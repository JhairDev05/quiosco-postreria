import { OrderWithProducts, OrderWithProductsExcel } from "@/src/types";
import { toast } from "react-toastify";
import * as XLSX from 'xlsx';

export async function downloadOrders(ordersData: OrderWithProductsExcel[]) {
    if (ordersData.length === 0) {
        console.error("No hay datos de órdenes para descargar");
        return;
    }

    try {
        const ws = XLSX.utils.json_to_sheet(ordersData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'sheet');

        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'ordenes.xlsx';
        a.click();
        URL.revokeObjectURL(url);

        console.log("Mostrando toast de éxito");
        toast.success('Pedido realizado correctamente');

    } catch (error) {
        console.error("Error al exportar las órdenes a Excel:", error);
    }
}