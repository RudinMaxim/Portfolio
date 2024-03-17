/*
  Warnings:

  - You are about to drop the column `phone` on the `Submission` table. All the data in the column will be lost.
  - Made the column `email` on table `Submission` required. This step will fail if there are existing NULL values in that column.
  - Made the column `message` on table `Submission` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "phone",
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "message" SET NOT NULL;
