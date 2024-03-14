/*
  Warnings:

  - You are about to drop the `modules` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Direction" AS ENUM ('FRONTEND', 'BACKEND', 'DEVOPS');

-- DropForeignKey
ALTER TABLE "modules" DROP CONSTRAINT "modules_projectId_fkey";

-- DropForeignKey
ALTER TABLE "modules" DROP CONSTRAINT "modules_technologyId_fkey";

-- AlterTable
ALTER TABLE "technologies" ADD COLUMN     "direction" "Direction" NOT NULL DEFAULT 'FRONTEND';

-- DropTable
DROP TABLE "modules";

-- CreateTable
CREATE TABLE "libraries" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "technologyId" TEXT NOT NULL,
    "projectId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "libraries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "libraries_name_idx" ON "libraries"("name");

-- CreateIndex
CREATE INDEX "technologies_name_idx" ON "technologies"("name");

-- AddForeignKey
ALTER TABLE "libraries" ADD CONSTRAINT "libraries_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "libraries" ADD CONSTRAINT "libraries_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
