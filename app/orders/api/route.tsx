import { prisma } from "@/src/lib/prisma";
import { startOfDay, endOfDay } from 'date-fns';

export const dynamic = 'force-dynamic'

export async function GET() {
    // Obtener la fecha de inicio y fin del día actual
    const today = new Date();
    const startOfToday = startOfDay(today);
    const endOfToday = endOfDay(today);

    // Consultar todas las órdenes del día actual
    const orders = await prisma.order.findMany({
        where: {
            orderReadyAt: {
                gte: startOfToday,
                lte: endOfToday
            }
        },
        orderBy: {
            orderReadyAt: 'desc'
        },
        include: {
            orderProducts: {
                include: {
                    product: true
                }
            }
        }
    });

    return Response.json(orders);
}
