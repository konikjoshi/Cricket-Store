'use client';
import Banner from '@/components/image/banner';
import React, { useEffect, useState } from 'react';
import { useCartContext } from "@/context/CartContext";

interface MenuDetailProps {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    category: string;
    sizes: string[];
    quantity: number;
};

interface ResponseData {
    status: number,
    message: string,
    data?: MenuDetailProps
}

const MenuDetail = ({ params }: { params: { id: string } }) => {
    const [data, setData] = useState<MenuDetailProps | null | any>(null);
    const { addToCart } = useCartContext();

    const getMenuDetail = async () => {
        try {
            const response = await fetch(`/api/product/view/${params.id}`);
            const res: ResponseData = await response.json();
            if (res.data) {
                setData(res.data);
            } else {
                setData(null);
            }
        } catch (error) {
            console.error('Failed to fetch menu detail:', error);
        }
    }

    useEffect(() => {
        getMenuDetail();
    }, [])

    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-1/5">
            <Banner image={{ src: data?.imageUrl, alt: data?.name }} />
            {/* className="w-full h-64 object-cover rounded-lg mb-4" */}
            <h2 className="text-2xl font-bold my-2">{data?.name}</h2>
            <p className="mb-4">{data?.description}</p>
            <p className="text-lg font-semibold mb-4 text-yellow-400">${data?.price}</p>
            <button onClick={() => addToCart(data)} className="px-4 py-2 rounded-lg border-2 border-[#243c5a] hover:bg-gray-600">
                Add to Cart
            </button>
        </div>
    );
};


export default MenuDetail;