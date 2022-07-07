import { Product, Departament } from "@prisma/client";
import { faker } from '@faker-js/faker';
import { MockContext, Context, createMockContext } from "../../../config/context";
import { ProductQuery } from "../../query/product";
import { DepartamentMutation } from "../../mutation/departament";


const ProductClass = new ProductQuery();
const DepartamenMutationClass = new DepartamentMutation();

describe('Product Query Class',() => {
    
    let mockCtx: MockContext;
    let ctx: Context;

    beforeEach(() => {
        mockCtx = createMockContext();
        ctx = mockCtx as unknown as Context; 
    });

     test('should find a product by barCode', async() => {
        const expectProduct: Product = {
            id: faker.database.mongodbObjectId(),
            name: faker.name.findName(),
            barCode: faker.datatype.number(),
            sellPrice: faker.datatype.float(),
            buyPrice: faker.datatype.float(),
            stock: faker.datatype.number(),
            createAt:faker.date.future(),
            updateAt: faker.date.future()
        };


    
        mockCtx.prisma.product.findUnique.mockResolvedValue( expectProduct )
        const response = ProductClass.findProductByBarCode( expectProduct.barCode, mockCtx);
        await expect(response).resolves.toEqual( expectProduct );
    })

    test('Create a Departament', async() => {
        const expectDepartament: Departament = {
            id: faker.database.mongodbObjectId(),
            name: faker.name.findName(),
            productId: faker.database.mongodbObjectId(),
            createAt:faker.date.future(),
            updateAt: faker.date.future()
        };
    
        mockCtx.prisma.departament.create.mockResolvedValue( expectDepartament )
        const response = DepartamenMutationClass.createDepartament( { name: expectDepartament.name }, mockCtx );
        await expect(response).resolves.toEqual( expectDepartament );
    })

})