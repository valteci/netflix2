/*
  Warnings:

  - You are about to drop the `login` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "login";

-- CreateTable
CREATE TABLE "user" (
    "email" TEXT NOT NULL,
    "hashSenha" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("email")
);
