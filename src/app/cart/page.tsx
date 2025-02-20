'use client';
import React, { useContext, useEffect, useState } from 'react';
import { useCartContext } from '@/context/CartContext';

interface CartItem {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    category: string;
    sizes: string[];
    quantity: number;
}

const Cart: React.FC = () => {
    const { cart, removeFromCart } = useCartContext();
    const [cartItems, setCartItems] = useState<CartItem[]>(cart);

    useEffect(() => {
        if (cart) {
            setCartItems(cart)
        }
    }, [cart])

    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-full">
            <h2 className="text-xl font-bold mb-4">Cart</h2>
            {cartItems.length > 0 ? (
                cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center mb-2 border-b border-gray-600 pb-2">
                        <div className="flex items-center space-x-4">
                            <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                            <span className="text-sm">{item.name} (x{item.quantity})</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="px-3 py-1 rounded-lg border-2 border-[#243c5a] hover:bg-gray-600"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-400">No items in cart.</p>
            )}
            <hr className="my-4 border-gray-600" />
            <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
            </div>
        </div>
    );
};

export default Cart;
