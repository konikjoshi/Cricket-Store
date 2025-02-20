'use server';
import { NextResponse } from 'next/server';
import { readProductData } from '@/utils/product';

export async function GET() {
    const productMockData = await readProductData();
    const response = {
        status: 200,
        message: "Product fetched successfully.",
        data: productMockData
    }
    return NextResponse.json(response);
}
