import { faker } from "@faker-js/faker";
import fs from "fs";

// Define the number of products you want to generate
const TOTAL_PRODUCTS = 12;

// Generate an array of fake cricket products
const generateFakeProducts = () => {
    return Array.from({ length: TOTAL_PRODUCTS }, () => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        imageUrl: `https://picsum.photos/400/400?random=${faker.number.int({ min: 1, max: 1000 })}`,
        price: faker.commerce.price({ min: 500, max: 5000, dec: 0 }),
        description: faker.commerce.productDescription(),
        category: faker.helpers.arrayElement([
            "Jersey",
            "Bat",
            "Gloves",
            "Helmet",
            "Pads",
            "Shoes",
            "Ball",
            "Bag",
            "Wicket",
            "Guard",
            "Accessories",
        ]),
        sizes: faker.helpers.arrayElements(["S", "M", "L", "XL", "Standard"]),
    }));
};

// Generate fake products and write them to a mock JSON file
const fakeProducts = generateFakeProducts();
fs.writeFileSync("src/fake-db/product.json", JSON.stringify(fakeProducts, null, 2));

console.log("✅ Fake product data generated and saved to src/mock/products.json!");
