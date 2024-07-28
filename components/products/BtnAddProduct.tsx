import { Product } from "@prisma/client";
import { useStore } from "@/src/store";

type BtnAddProductProps = {
    product: Product;
    extras: string[];
};

export default function BtnAddProduct({ product, extras }: BtnAddProductProps) {
    const addToOrder = useStore((state) => state.addToOrder);

    const handleAddToOrder = () => {
        addToOrder({ ...product, extras }); // Incluye los extras en el producto
    };

    return (
        <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            onClick={handleAddToOrder}
        >
            Agregar
        </button>
    );
}