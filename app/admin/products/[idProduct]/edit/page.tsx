import EditProductForm from "@/components/products/EditProductForm";
import ProductForm from "@/components/products/ProductForm";
import BtnGoBack from "@/components/ui/BtnGoBack";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma"
import Link from "next/link";
import { notFound, redirect } from "next/navigation";



async function getProductsById(idProduct: number) {
    const product = await prisma.product.findUnique({
        where: {
            idProduct
        }
    })

    if(!product) {
        notFound()
    }

    return product
}

export default async function EditProductsPage({ params }: { params: { idProduct: string } }) {

    const product = await getProductsById(+params.idProduct)
    
    return (
        <>
        
            <Heading>Editar producto: {product.name}</Heading>
        
            <BtnGoBack/>

            <EditProductForm>
                <ProductForm product={product}/>
            </EditProductForm>
        </>
    )
}