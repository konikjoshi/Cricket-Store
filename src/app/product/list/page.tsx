"use client";
import { useEffect, useState } from 'react';
import ProductCard from "@/components/product/product";
import Link from 'next/link';

interface ProductData {
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
    data?: ProductData[]
}

const Product = () => {
    const [data, setData] = useState<ProductData[]>([]);

    const getAllProduct = async () => {
        try {
            const response = await fetch('/api/product');
            const res: ResponseData = await response.json();
            if (res.data) {
                setData(res.data);
            } else {
                setData([]);
            }
        } catch (error) {
            console.error('Failed to fetch product data:', error);
        }
    }

    useEffect(() => {
        getAllProduct();
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            getAllProduct();
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((product, index) =>
                    <div key={`${product.id}-${index}`}>
                        <Link href={`/product/view/` + product.id}>
                            <ProductCard
                                id={product.id}
                                name={product.name}
                                img={product.imageUrl}
                                dsc={product.description}
                                price={product.price}
                            />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Product;