"use client"; 
import { formatCurrency, getImagePath } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import BtnAddProduct from "./BtnAddProduct";
import AddExtra from "../order/AddExtra";
import { useState } from "react";

type ProductCardProps = {
    product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
    // Estado para los extras seleccionados
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

    // Maneja el cambio en los extras seleccionados
    const handleExtrasChange = (extras: string[]) => {
        setSelectedExtras(extras);
    };

    const imagePath = getImagePath(product.image);

    return (
        <div className="border bg-white">
            <Image src={imagePath} alt={`Imagen platillo ${product.name}`} width={400} height={500} />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="mt-1 font-black text-2x text-gray-400">{product.description}</p>
                <p className="mt-5 font-black text-4xl text-amber-500">{formatCurrency(product.price)}</p>

                <AddExtra
                    product={product}
                    onExtrasChange={handleExtrasChange}
                />
                
                <BtnAddProduct
                    product={product}
                    extras={selectedExtras}
                />
            </div>
        </div>
    );
}
