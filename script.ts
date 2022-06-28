import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here
  const allProducts = await prisma.product.findMany({
    include: { taxes: true },
  })
  // use `console.dir` to print nested objects
  console.dir(allProducts, { depth: null })
}


main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
