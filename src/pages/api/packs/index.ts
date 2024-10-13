import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      return createPack(req, res);
    case 'GET':
      return getAllPacks(req, res);
    default:
      return methodNotAllowed(req, res);
  }
}

async function createPack(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, description, price, coverImage, items } = req.body;
    const pack = await prisma.pack.create({
      data: {
        name,
        description,
        price,
        coverImage,
        items: {
          create: items.map((item: any) => ({
            name: item.name,
            description: item.description,
            rarity: item.rarity,
          })),
        },
      },
      include: {
        items: true,
      },
    });
    res.status(201).json(pack);
  } catch (error) {
    res.status(400).json({ error: 'Error creating pack' });
  }
}

async function getAllPacks(req: NextApiRequest, res: NextApiResponse) {
  try {
    const packs = await prisma.pack.findMany({
      include: {
        items: true,
      },
    });
    res.status(200).json(packs);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching packs' });
  }
}

function methodNotAllowed(req: NextApiRequest, res: NextApiResponse) {
  res.status(405).json({ error: 'Method not allowed' });
}
