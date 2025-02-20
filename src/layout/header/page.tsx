'use client';
import Link from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation'

const Header = () => {
    const segment = useSelectedLayoutSegment();
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-lg font-bold">
                <Link href="/product/list">
                    <h1 className="text-3xl">Cricket Store</h1>
                </Link>
            </div>

            <nav className="flex space-x-10">
                <Link href="/product/list" className={segment === "product" || segment === null ? "text-yellow-400 text-xl" : "text-xl"}>
                    Products
                </Link>
                <Link href="/cart" className={segment === "cart" ? "text-yellow-400 text-xl mr-10" : " text-xl"}>
                    Cart
                </Link>
            </nav>
        </header>
    )
}

export default Header;