"use client"

import useSWR from "swr";
import Logo from "@/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import LatestOrderItem from "@/components/order/LatestOrderItems";
import { downloadOrders } from "@/actions/download-orders-action";
import { exportToExcel } from "@/src/utils";
import { toast } from "react-toastify";

export default function OrdersPage() {
    const url = '/orders/api'
    const fetcher = () => fetch(url).then(res => res.json()).then(data => data)
    const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 1000,
        revalidateOnFocus: false
    })

    if (isLoading) return <p>Cargando...</p>

    if (data) return (
        <>

            <h1 className="text-center mt-20 text-6xl font-black">Órdenes listas</h1>

            <Logo />

            <div className="flex flex-col lg:flex-row justify-center gap-5 mt-10">
                <button onClick={() => {
                    exportToExcel(data);
                }} className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer">
                    Descargar órdenes
                </button>
            </div>


            {data.length ? (

                <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10 mb-10">
                    {data.map(order => (
                        <LatestOrderItem order={order} key={order.idOrder} />
                    ))}
                </div>

            ) : <p className="text-center my-10">No hay órdenes listas</p>}

        </>
    )
}