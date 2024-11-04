/*
  Warnings:

  - Added the required column `userId` to the `Pack` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pack` ADD COLUMN `commission` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `PackItem` ADD COLUMN `quantity` DECIMAL(10, 4) NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE `Pack` ADD CONSTRAINT `Pack_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
