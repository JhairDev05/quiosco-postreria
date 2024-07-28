import { prisma } from "@/src/lib/prisma";
import { z } from 'zod';

export async function updateProductExtras(idProduct: number, extras: string[]) {
    const response = await fetch(`/api/products/${idProduct}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ extras })
    });

    if (!response.ok) {
        // Maneja el error
        throw new Error('Error al actualizar los extras del producto');
    }

    return response.json();
}