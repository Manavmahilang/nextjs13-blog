/*
  Warnings:

  - You are about to drop the column `apiKeyId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "apiKeyId";

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdOn" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "sDescription" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "Image" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
