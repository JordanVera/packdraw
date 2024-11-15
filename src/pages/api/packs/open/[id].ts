import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import { authOptions } from '../../auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  switch (req.method) {
    case 'POST':
      return openPack(req, res, id as string);
    default:
      return methodNotAllowed(req, res);
  }
}

async function openPack(req: NextApiRequest, res: NextApiResponse, id: string) {
  // TODO: Implement the logic to open the pack
  try {
    // Get the authenticated user
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user?.id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { packId, winningItemId, isRealMoney } = req.body;

    // Validate required fields
    if (!packId || !winningItemId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Verify that the pack and item exist
    const [pack, item] = await Promise.all([
      prisma.pack.findUnique({ where: { id: packId } }),
      prisma.item.findUnique({ where: { id: winningItemId } }),
    ]);

    if (!pack || !item) {
      return res.status(404).json({ error: 'Pack or Item not found' });
    }

    // Create the OpenPack entry
    const openPack = await prisma.openPack.create({
      data: {
        packId,
        winningItemId,
        userId: session.user.id,
        isRealMoney,
      },
      include: {
        pack: true,
        item: true,
        user: true,
      },
    });

    return res.status(201).json(openPack);
  } catch (error) {
    console.error('Error creating open pack:', error);
    return res.status(500).json({ error: 'Error creating open pack' });
  }
}

function methodNotAllowed(req: NextApiRequest, res: NextApiResponse) {
  res.status(405).json({ error: 'Method not allowed' });
}
