/*
  Warnings:

  - You are about to drop the column `isShowe` on the `libraries` table. All the data in the column will be lost.
  - You are about to drop the column `isShowe` on the `technologies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "libraries" DROP COLUMN "isShowe",
ADD COLUMN     "isShowed" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "technologies" DROP COLUMN "isShowe",
ADD COLUMN     "isShowed" BOOLEAN NOT NULL DEFAULT true;
