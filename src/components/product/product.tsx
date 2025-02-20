"use client";
import React from 'react';
import Banner from '../image/banner';

type ProductCardProps = {
    id: string;
    name: string;
    dsc: string;
    img: string;
    price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, dsc, img, id, price }) => {
    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-700">
            <div className="w-full h-64">
                <Banner image={{ src: img, alt: id }} />
            </div>

            <div className="p-4 h-25">
                <h2 className="text-lg font-semibold mb-2">{name}</h2>
                <div className="flex items-center mb-2 justify-between">
                    <div className="text-sm font-medium text-yellow-400">
                        ${price}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
