import { OrderProducts, Product, Order } from "@prisma/client";

export type OrderItem = Pick<Product, 'idProduct' | 'name' | 'price' | 'extras'> & {
    quantity: number
    subtotal: number
    extras: string[]
}

export type OrderWithProducts = Order & {
    orderProducts: (OrderProducts & {
        product: Product
    })[]
}

export type OrderWithProductsExcel = {
    idOrder: number;
    name: string;
    total: number;
    orderReadyAt: Date;
    orderProducts: {
        product: {
            name: string;
            extras: []
        };
    }[];
};