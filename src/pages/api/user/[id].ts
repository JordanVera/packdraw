import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      return getUser(req, res, id as string);
    case 'DELETE':
      return deleteUser(req, res, id as string);
    default:
      return methodNotAllowed(req, res);
  }
}

async function getUser(req: NextApiRequest, res: NextApiResponse, id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        accounts: true,
        OpenPack: {
          include: {
            item: true,
          },
        },
      },
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Transform the balance from string to number
    const transformedUser = {
      ...user,
      balance: Number(user.balance),
    };

    res.status(200).json(transformedUser);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(400).json({ error: 'Error fetching user' });
  }
}

async function deleteUser(
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
) {
  try {
    await prisma.user.delete({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(400).json({ error: 'Error deleting user' });
  }
}

function methodNotAllowed(req: NextApiRequest, res: NextApiResponse) {
  res.status(405).json({ error: 'Method not allowed' });
}
