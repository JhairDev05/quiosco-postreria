"use server"

import { prisma } from "@/src/lib/prisma"
import { revalidatePath } from "next/cache"

export async function deleteProduct(idProduct: number) {
    try {
        await prisma.product.delete({
            where: {
                idProduct
            }
        });

        revalidatePath('/admin/products');
        
        return { success: true };
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        return { success: false, error: "No se pudo eliminar el producto" };
    }
}
