import * as XLSX from 'xlsx';
import { Workbook } from 'exceljs';
import { OrderWithProducts } from '../types';
import { toast } from 'react-toastify';


export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount)
}

export function getImagePath(imagePath: string) {
    const cloudinaryBaseUrl = 'https://res.cloudinary.com'
    if (imagePath.startsWith(cloudinaryBaseUrl)) {
        return imagePath
    } else {
        return `/products/${imagePath}.jpg`
    }
}

export function exportToExcel(data: OrderWithProducts[]) {

    const ordersSheetData = data.map(order => ({
        'ID de orden': order.idOrder,
        'Nombre de cliente': order.name,
       'Fecha de preparación': order.orderReadyAt ? new Date(order.orderReadyAt).toLocaleString('es-ES', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }) : 'Fecha no disponible',
        'Total': order.total,
        'Productos de orden': order.orderProducts.map(op => op.product.name).join(', '),
        'Detalles': order.orderProducts.map(op => op.product.extras).join(', ')
    }));

    const ordersSheet = XLSX.utils.json_to_sheet(ordersSheetData, {
        header: ['ID de orden', 'Nombre de cliente', 'Fecha de preparación', 'Total', 'Productos de orden', 'Detalles']
    });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ordersSheet, 'Órdenes');

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ordenes.xlsx';
    a.click();
    URL.revokeObjectURL(url);
}
