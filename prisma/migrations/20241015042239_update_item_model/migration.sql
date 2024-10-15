/*
  Warnings:

  - You are about to drop the column `rarity` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Item` DROP COLUMN `rarity`,
    DROP COLUMN `value`,
    ADD COLUMN `brand` VARCHAR(191) NULL,
    ADD COLUMN `price` DOUBLE NOT NULL DEFAULT 0;
