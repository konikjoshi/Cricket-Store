'use server';
import { NextResponse } from 'next/server';
import { readProductData } from '@/utils/product';

export async function GET(request: any, { params }: any) {
    const { id } = params;
    const productData = await readProductData()

    const productItem = productData.find((item: { id: any; }) => item.id === id);

    if (productItem) {
        const response = {
            status: 200,
            message: "Product fetched successfully.",
            data: productItem
        }
        return NextResponse.json(response);
    } else {
        const response = {
            status: 404,
            message: "Item not found.",
        }
        return NextResponse.json(response);
    }
}
