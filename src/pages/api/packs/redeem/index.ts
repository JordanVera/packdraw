import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]';
import prisma from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const session = await getServerSession(req, res, authOptions);

    if (!session?.user?.email) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { openPackIds } = req.body;

    if (!openPackIds || !Array.isArray(openPackIds)) {
      return res.status(400).json({ message: 'Invalid input' });
    }

    // Use a transaction to ensure both operations complete successfully
    await prisma.$transaction(async (tx) => {
      // Get all the open packs and their associated items
      const openPacks = await tx.openPack.findMany({
        where: {
          id: { in: openPackIds },
          userId: session.user.id,
          isRedeemed: false,
          isRealMoney: true,
        },
        include: {
          item: true,
        },
      });

      // Calculate total amount to add to user's balance
      const totalAmount = openPacks.reduce(
        (sum, pack) => sum + pack.item.price,
        0
      );

      // Update all open packs to be redeemed
      await tx.openPack.updateMany({
        where: {
          id: { in: openPackIds },
          userId: session.user.id,
          isRedeemed: false,
          isRealMoney: true,
        },
        data: {
          isRedeemed: true,
        },
      });

      // Update user's balance
      await tx.user.update({
        where: {
          id: session.user.id,
        },
        data: {
          balance: {
            increment: totalAmount,
          },
        },
      });
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error redeeming cart items:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
