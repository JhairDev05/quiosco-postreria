import { categories } from "./data/categories";
import { products } from "./data/products";
import { PrismaClient } from "@prisma/client";
import { frappes } from "./data/frappes";
import { frutas } from "./data/frutas";
import { perlas } from "./data/perlas";
import { salsas } from "./data/salsas";
import { sodas } from "./data/sodas";
import { toppings } from "./data/toppings";
import { tapiocas } from "./data/tapiocas";
import { cafes } from "./data/cafe";
import { pago } from "./data/pago";

const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.category.createMany({
            data: categories
        });
        await prisma.product.createMany({
            data: products
        });
        await prisma.frappe.createMany({
            data: frappes
        });
        await prisma.toppingFruit.createMany({
            data: frutas
        });
        await prisma.perlasExplosivas.createMany({
            data: perlas
        });
        await prisma.salsa.createMany({
            data: salsas
        });
        await prisma.sodaItaliana.createMany({
            data: sodas
        });
        await prisma.topping.createMany({
            data: toppings
        });
        await prisma.tapioca.createMany({
            data: tapiocas
        });
        await prisma.cafe.createMany({
            data: cafes
        });
    } catch (error) {
        console.log(error);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })