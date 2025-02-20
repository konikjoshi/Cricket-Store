"use client";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    category: string;
    sizes: string[];
}

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existingProduct = prev.find((item) => item.id === product.id);
            if (existingProduct) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
        toast.success(`${product.name} added to cart`, {
            icon: "🛒",
            style: {
                borderRadius: "10px",
                background: "green",
                color: "#fff",
            },
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
        toast.error("Product removed from cart", {
            icon: "❌",
            style: {
                borderRadius: "10px",
                background: "#ff4d4d",
                color: "#fff",
            },
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }
    return context;
};
