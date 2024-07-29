"use client"

import React, { useEffect, useState } from 'react';
import { Product } from "@prisma/client";
import { frappes } from "@/prisma/data/frappes";
import { tapiocas } from "@/prisma/data/tapiocas";
import { perlas } from "@/prisma/data/perlas";
import { sodas } from "@/prisma/data/sodas";
import { toppings } from "@/prisma/data/toppings";
import { salsas } from "@/prisma/data/salsas";
import { frutas } from "@/prisma/data/frutas";
import { cafes } from '@/prisma/data/cafe';

type AddExtraProps = {
    product: Product;
    onExtrasChange: (extras: string[]) => void;
};

export default function AddExtra({ product, onExtrasChange }: AddExtraProps) {
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

    const handleChange = (type: string, value: string) => {
        setSelectedExtras(prev => {
            const newExtras = prev.filter(extra => !extra.startsWith(type));
            if (value) newExtras.push(`${value}`);
            return newExtras;
        });
    };

    useEffect(() => {
        onExtrasChange(selectedExtras);
    }, [selectedExtras, onExtrasChange]);

    return (

        <>
            {product.name == 'Frappe' && (
                <div className="space-y-2 mt-4">
                    <label
                        className="text-slate-800"
                        htmlFor="includeExtra"
                    >Sabor:</label>
                    <select
                        className="block w-full p-3 bg-slate-100"
                        id="frappeId"
                        name="includeExtra"
                        onChange={(e) => handleChange('frappe', e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        {frappes.map(frappe => (
                            <option key={frappe.name} value={frappe.name}>
                                {frappe.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {product.name === 'Licuado' && (
                <div className="space-y-2 mt-4">
                    <label className="text-slate-800" htmlFor="frappeId">Sabor:</label>
                    <select
                        className="block w-full p-3 bg-slate-100"
                        id="frappeId"
                        name="includeExtra"
                        onChange={(e) => handleChange('frappe', e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        {frappes.map(frappe => (
                            <option key={frappe.name} value={frappe.name}>
                                {frappe.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {product.name === 'Malteada' && (
                <div className="space-y-2 mt-4">
                    <label className="text-slate-800" htmlFor="frappeId">Sabor:</label>
                    <select
                        className="block w-full p-3 bg-slate-100"
                        id="frappeId"
                        name="includeExtra"
                        onChange={(e) => handleChange('frappe', e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        {frappes.map(frappe => (
                            <option key={frappe.name} value={frappe.name}>
                                {frappe.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {product.name === 'Milk Tea/Tapioca frappe' && (
                <div className="space-y-2 mt-4">
                    <label className="text-slate-800" htmlFor="tapiocaId">Sabor:</label>
                    <select
                        className="block w-full p-3 bg-slate-100"
                        id="tapiocaId"
                        name="includeExtra"
                        onChange={(e) => handleChange('tapioca', e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        {tapiocas.map(tapioca => (
                            <option key={tapioca.name} value={tapioca.name}>
                                {tapioca.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {product.name === 'Soda italiana' && (
                <>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="sodaId">Soda Italiana:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="sodaId"
                            name="includeExtra"
                            onChange={(e) => handleChange('soda', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {sodas.map(soda => (
                                <option key={soda.name} value={soda.name}>
                                    {soda.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="perlasId">Perlas Explosivas:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="perlasId"
                            name="includeExtra"
                            onChange={(e) => handleChange('perlas', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {perlas.map(perlas => (
                                <option key={perlas.name} value={perlas.name}>
                                    {perlas.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            )}

            {product.description === '1 salsa, 2 topping' && (
                <>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="salsa">Salsa:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="salsa"
                            name="includeExtra"
                            onChange={(e) => handleChange('salsa', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {salsas.map(salsa => (
                                <option key={salsa.name} value={salsa.name}>
                                    {salsa.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="topping">Topping:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="topping"
                            name="includeExtra"
                            onChange={(e) => handleChange('topping', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {toppings.map(toppings => (
                                <option key={toppings.name} value={toppings.name}>
                                    {toppings.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="topping">Topping:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="topping"
                            name="includeExtra"
                            onChange={(e) => handleChange('topping', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {toppings.map(topping => (
                                <option key={topping.name} value={topping.name}>
                                    {topping.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            )}

            {product.description === '1 salsa, 1 topping' && (
                <>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="salsa">Salsa:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="salsa"
                            name="includeExtra"
                            onChange={(e) => handleChange('salsa', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {salsas.map(salsa => (
                                <option key={salsa.name} value={salsa.name}>
                                    {salsa.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="topping">Topping:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="topping"
                            name="includeExtra"
                            onChange={(e) => handleChange('topping', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {toppings.map(topping => (
                                <option key={topping.name} value={topping.name}>
                                    {topping.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            )}

            {product.description === '1 salsa, 1 topping, 1 fruta' && (
                <>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="salsa">Salsa:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="salsa"
                            name="includeExtra"
                            onChange={(e) => handleChange('salsa', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {salsas.map(salsa => (
                                <option key={salsa.name} value={salsa.name}>
                                    {salsa.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="topping">Topping:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="topping"
                            name="includeExtra"
                            onChange={(e) => handleChange('topping', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {toppings.map(topping => (
                                <option key={topping.name} value={topping.name}>
                                    {topping.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="frutas">Fruta:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="fruta"
                            name="includeExtra"
                            onChange={(e) => handleChange('fruta', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {frutas.map(fruta => (
                                <option key={fruta.name} value={fruta.name}>
                                    {fruta.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            )}


            {product.description === '2 salsa, 3 topping' && (
                <>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="salsa">Salsa:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="salsa"
                            name="includeExtra"
                            onChange={(e) => handleChange('salsa', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {salsas.map(salsa => (
                                <option key={salsa.name} value={salsa.name}>
                                    {salsa.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="salsa">Salsa:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="salsa"
                            name="includeExtra"
                            onChange={(e) => handleChange('salsa', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {salsas.map(salsa => (
                                <option key={salsa.name} value={salsa.name}>
                                    {salsa.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="topping">Topping:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="topping"
                            name="includeExtra"
                            onChange={(e) => handleChange('topping', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {toppings.map(topping => (
                                <option key={topping.name} value={topping.name}>
                                    {topping.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="topping">Topping:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="topping"
                            name="includeExtra"
                            onChange={(e) => handleChange('topping', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {toppings.map(topping => (
                                <option key={topping.name} value={topping.name}>
                                    {topping.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="topping">Topping:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="topping"
                            name="includeExtra"
                            onChange={(e) => handleChange('topping', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {toppings.map(topping => (
                                <option key={topping.name} value={topping.name}>
                                    {topping.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            )}

            {product.name === 'Taiyaki' && (
                <>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="salsa">Salsa:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="salsa"
                            name="includeExtra"
                            onChange={(e) => handleChange('salsa', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {salsas.map(salsa => (
                                <option key={salsa.name} value={salsa.name}>
                                    {salsa.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            )}

            {product.description.includes('2 salsa, 2 topping') && (
                <>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="salsa">Salsa:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="salsa"
                            name="includeExtra"
                            onChange={(e) => handleChange('salsa', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {salsas.map(salsa => (
                                <option key={salsa.name} value={salsa.name}>
                                    {salsa.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="salsa">Salsa:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="salsa"
                            name="includeExtra"
                            onChange={(e) => handleChange('salsa', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {salsas.map(salsa => (
                                <option key={salsa.name} value={salsa.name}>
                                    {salsa.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="topping">Topping:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="topping"
                            name="includeExtra"
                            onChange={(e) => handleChange('topping', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {toppings.map(topping => (
                                <option key={topping.name} value={topping.name}>
                                    {topping.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2 mt-4">
                        <label className="text-slate-800" htmlFor="topping">Topping:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="topping"
                            name="includeExtra"
                            onChange={(e) => handleChange('topping', e.target.value)}
                        >
                            <option value="">-- Seleccione --</option>
                            {toppings.map(topping => (
                                <option key={topping.name} value={topping.name}>
                                    {topping.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            )}

            {product.name.includes('frío')  && (
                <div className="space-y-2 mt-4">
                <label className="text-slate-800" htmlFor="cafes">Sabor:</label>
                <select
                    className="block w-full p-3 bg-slate-100"
                    id="cafe"
                    name="includeExtra"
                    onChange={(e) => handleChange('cafe', e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    {cafes.map(cafe => (
                        <option key={cafe.name} value={cafe.name}>
                            {cafe.name}
                        </option>
                    ))}
                </select>
            </div>
            )}
        </>
    )
}