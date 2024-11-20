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
  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user?.id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { packId, winningItemId, isRealMoney } = req.body;

    // Validate required fields
    if (!packId || !winningItemId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Use a transaction to handle balance deduction and pack opening atomically
    const result = await prisma.$transaction(async (tx) => {
      // Get the pack, item, and user data
      const [pack, item, user] = await Promise.all([
        tx.pack.findUnique({ where: { id: packId } }),
        tx.item.findUnique({ where: { id: winningItemId } }),
        tx.user.findUnique({ where: { id: session.user.id } }),
      ]);

      if (!pack || !item || !user) {
        throw new Error('Pack, Item, or User not found');
      }

      // If it's a real money pack, check and update balance
      if (isRealMoney) {
        const currentBalance = Number(user.balance);
        const packPrice = pack.price;

        if (currentBalance < packPrice) {
          throw new Error('Insufficient balance');
        }

        // Update user's balance
        await tx.user.update({
          where: { id: user.id },
          data: {
            balance: {
              decrement: packPrice,
            },
          },
        });
      }

      // Create the OpenPack entry
      const openPack = await tx.openPack.create({
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

      return openPack;
    });

    return res.status(201).json(result);
  } catch (error) {
    console.error('Error creating open pack:', error);
    if (error instanceof Error && error.message === 'Insufficient balance') {
      return res.status(400).json({ error: 'Insufficient balance' });
    }
    return res.status(500).json({ error: 'Error creating open pack' });
  }
}

function methodNotAllowed(req: NextApiRequest, res: NextApiResponse) {
  res.status(405).json({ error: 'Method not allowed' });
}
