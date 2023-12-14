/*
  Warnings:

  - You are about to drop the `Certificado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Curso` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Turma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_StudentToTurma` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Certificado" DROP CONSTRAINT "Certificado_idCurso_fkey";

-- DropForeignKey
ALTER TABLE "Certificado" DROP CONSTRAINT "Certificado_studentMatricula_fkey";

-- DropForeignKey
ALTER TABLE "Turma" DROP CONSTRAINT "Turma_idCurso_fkey";

-- DropForeignKey
ALTER TABLE "_StudentToTurma" DROP CONSTRAINT "_StudentToTurma_A_fkey";

-- DropForeignKey
ALTER TABLE "_StudentToTurma" DROP CONSTRAINT "_StudentToTurma_B_fkey";

-- DropTable
DROP TABLE "Certificado";

-- DropTable
DROP TABLE "Curso";

-- DropTable
DROP TABLE "Student";

-- DropTable
DROP TABLE "Turma";

-- DropTable
DROP TABLE "_StudentToTurma";
