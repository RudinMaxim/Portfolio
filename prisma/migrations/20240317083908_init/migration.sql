-- AlterTable
ALTER TABLE "libraries" ALTER COLUMN "versions" SET DEFAULT 'latest';

-- AlterTable
ALTER TABLE "technologies" ALTER COLUMN "versions" SET DEFAULT 'latest';

-- CreateTable
CREATE TABLE "Submission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);
