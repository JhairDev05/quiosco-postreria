import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";

interface Store {
    order: OrderItem[]
    addToOrder: (product: Product) => void
    increaseQuantity: (id: Product['idProduct']) => void
    decreaseQuantity: (id: Product['idProduct']) => void
    removeItem: (id: Product['idProduct']) => void
    clearOrder: () => void
    setExtras: (idProduct: Product['idProduct'], extras: string[]) => void;

}

export const useStore = create<Store>((set, get) => ({
    order: [],
    addToOrder: (product) => {
        const {categoryId, image, description, ...data} = product
        let order : OrderItem[] = []

        if(get().order.find( item => item.idProduct === product.idProduct)) {
            order = get().order.map(item => item.idProduct === product.idProduct ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1),
                extras: product.extras
            } : item)
        } else {
            order = [...get().order, {
                ...data,
                quantity: 1,
                subtotal: 1 * product.price,
                extras: product.extras
            }]
        }
        
        set(() => ({
            order
        }))
    },
    increaseQuantity: (idProduct) => {
        set((state) => ({
            order: state.order.map(item => item.idProduct === idProduct ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1)
            } : item)
        }))
    },
    decreaseQuantity: (idProduct) => {

        const order = get().order.map(item => item.idProduct === idProduct ? {
            ...item,
            quantity: item.quantity - 1,
            subtotal: item.price * (item.quantity - 1)
        } : item)


        set(() => ({
            order
        }))
    },
    removeItem: (idProduct) => {
        set((state) => ({
            order: state.order.filter(item => item.idProduct !== idProduct)
        }))
    },
    clearOrder: () => {
        set(() => ({
            order: []
        }))
    },
    setExtras: (idProduct, extras) => {
        set((state) => ({
            order: state.order.map(item => item.idProduct === idProduct ? {
                ...item,
                extras
            } : item)
        }));
    }
}))