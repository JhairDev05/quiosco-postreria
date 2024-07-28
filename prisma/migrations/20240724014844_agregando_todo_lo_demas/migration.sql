-- CreateTable
CREATE TABLE "Product" (
    "idProduct" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("idProduct")
);

-- CreateTable
CREATE TABLE "Extra" (
    "idExtra" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Extra_pkey" PRIMARY KEY ("idExtra")
);

-- CreateTable
CREATE TABLE "ProductExtra" (
    "idProductExtra" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "extraId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "ProductExtra_pkey" PRIMARY KEY ("idProductExtra")
);

-- CreateTable
CREATE TABLE "IncludedExtra" (
    "idIncludedExtra" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "extraId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "IncludedExtra_pkey" PRIMARY KEY ("idIncludedExtra")
);

-- CreateTable
CREATE TABLE "Salsa" (
    "idSalsa" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Salsa_pkey" PRIMARY KEY ("idSalsa")
);

-- CreateTable
CREATE TABLE "Topping" (
    "idTopping" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Topping_pkey" PRIMARY KEY ("idTopping")
);

-- CreateTable
CREATE TABLE "PerlasExplosivas" (
    "idPerlas" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PerlasExplosivas_pkey" PRIMARY KEY ("idPerlas")
);

-- CreateTable
CREATE TABLE "ToppingFruit" (
    "idToppingFruta" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ToppingFruit_pkey" PRIMARY KEY ("idToppingFruta")
);

-- CreateTable
CREATE TABLE "SodaItaliana" (
    "idSoda" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SodaItaliana_pkey" PRIMARY KEY ("idSoda")
);

-- CreateTable
CREATE TABLE "Frappe" (
    "idFrappe" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Frappe_pkey" PRIMARY KEY ("idFrappe")
);

-- CreateTable
CREATE TABLE "Tapioca" (
    "idTapioca" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Tapioca_pkey" PRIMARY KEY ("idTapioca")
);

-- CreateTable
CREATE TABLE "Cafe" (
    "idCafe" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Cafe_pkey" PRIMARY KEY ("idCafe")
);

-- CreateTable
CREATE TABLE "Order" (
    "idOrder" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "orderReadyAt" TIMESTAMP(3),

    CONSTRAINT "Order_pkey" PRIMARY KEY ("idOrder")
);

-- CreateTable
CREATE TABLE "OrderProducts" (
    "idOrderProducts" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "OrderProducts_pkey" PRIMARY KEY ("idOrderProducts")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("idCategory") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductExtra" ADD CONSTRAINT "ProductExtra_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("idProduct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductExtra" ADD CONSTRAINT "ProductExtra_extraId_fkey" FOREIGN KEY ("extraId") REFERENCES "Extra"("idExtra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IncludedExtra" ADD CONSTRAINT "IncludedExtra_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("idProduct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IncludedExtra" ADD CONSTRAINT "IncludedExtra_extraId_fkey" FOREIGN KEY ("extraId") REFERENCES "Extra"("idExtra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProducts" ADD CONSTRAINT "OrderProducts_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("idOrder") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProducts" ADD CONSTRAINT "OrderProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("idProduct") ON DELETE RESTRICT ON UPDATE CASCADE;
