'use server';
import fs from 'fs';
import path from 'path';

// Path to the cart file
const productFilePath = path.join(process.cwd(), 'src', 'fake-db', 'product.json');

// Function to read the cart data from the JSON file
export const readProductData = async () => {
    const fileData = fs.readFileSync(productFilePath, 'utf8');

    // Parse the JSON string
    return JSON.parse(fileData);
};
