"use server"

import { prisma } from "@/src/lib/prisma";

export async function updateProductExtras(productId: number, extras: string[]) {
    try {
        await prisma.product.update({
            where: {
                idProduct: productId
            },
            data: {
                extras: extras // Usa 'set' para reemplazar los extras existentes
            }
        });

        return { success: true };
    } catch (error) {
        console.error(error);
        return { errors: [{ message: 'Error updating product extras' }] };
    }
}
