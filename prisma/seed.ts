import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const productData: Prisma.ProductCreateInput[] = [
    {
        barCode: 12345678,
        name: "coca cola light",
        sellPrice: 12,
        buyPrice: 16,
        stock: 200,
        supplier:{}
    }
]

async function main () {
    console.log ('sending....');
    for ( const u of productData ){
        const user = await prisma.product.create ({
            data: u
        });
    }    
}