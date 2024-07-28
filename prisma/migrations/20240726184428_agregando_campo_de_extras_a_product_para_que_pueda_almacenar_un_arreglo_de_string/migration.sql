/*
  Warnings:

  - You are about to drop the `Extra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IncludedExtra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductExtra` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "IncludedExtra" DROP CONSTRAINT "IncludedExtra_extraId_fkey";

-- DropForeignKey
ALTER TABLE "IncludedExtra" DROP CONSTRAINT "IncludedExtra_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductExtra" DROP CONSTRAINT "ProductExtra_extraId_fkey";

-- DropForeignKey
ALTER TABLE "ProductExtra" DROP CONSTRAINT "ProductExtra_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "extras" TEXT[];

-- DropTable
DROP TABLE "Extra";

-- DropTable
DROP TABLE "IncludedExtra";

-- DropTable
DROP TABLE "ProductExtra";
