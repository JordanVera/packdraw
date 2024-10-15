import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      return getPack(req, res, id as string);
    case 'PUT':
      return updatePack(req, res, id as string);
    case 'DELETE':
      return deletePack(req, res, id as string);
    default:
      return methodNotAllowed(req, res);
  }
}

async function getPack(req: NextApiRequest, res: NextApiResponse, id: string) {
  try {
    const pack = await prisma.pack.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            item: true,
          },
        },
      },
    });
    if (!pack) {
      return res.status(404).json({ error: 'Pack not found' });
    }
    res.status(200).json(pack);
  } catch (error) {
    console.error('Error fetching pack:', error);
    res.status(400).json({ error: 'Error fetching pack' });
  }
}

async function updatePack(
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
) {
  try {
    const { name, description, price, coverImage, items } = req.body;
    const updatedPack = await prisma.pack.update({
      where: { id },
      data: {
        name,
        description,
        price,
        coverImage,
        items: {
          deleteMany: {},
          create: items.map((itemId: string) => ({
            item: {
              connect: { id: itemId },
            },
          })),
        },
      },
      include: {
        items: {
          include: {
            item: true,
          },
        },
      },
    });
    res.status(200).json(updatedPack);
  } catch (error) {
    console.error('Error updating pack:', error);
    res.status(400).json({ error: 'Error updating pack' });
  }
}

async function deletePack(
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
) {
  try {
    await prisma.pack.delete({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting pack:', error);
    res.status(400).json({ error: 'Error deleting pack' });
  }
}

function methodNotAllowed(req: NextApiRequest, res: NextApiResponse) {
  res.status(405).json({ error: 'Method not allowed' });
}
