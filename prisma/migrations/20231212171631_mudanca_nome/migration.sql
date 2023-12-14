/*
  Warnings:

  - You are about to drop the `loginInstitucional` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "loginInstitucional";

-- CreateTable
CREATE TABLE "login" (
    "email" TEXT NOT NULL,
    "hashSenha" TEXT NOT NULL,

    CONSTRAINT "login_pkey" PRIMARY KEY ("email")
);
