import { Product } from "@prisma/client";
import { faker } from '@faker-js/faker';
import { MockContext, Context, createMockContext } from "../../../config/context";
import { UserQuery } from "../../query/user/user";
import { ProductQuery } from "../../query/product";
import { text } from "stream/consumers";
import { Int } from "type-graphql";

const userClass = new UserQuery();
const ProductClass = new ProductQuery();

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
   mockCtx = createMockContext();
   ctx = mockCtx as unknown as Context; 
});

test('should find a product by barCode', async() => {
    const productExpec = {
        id: faker.database.mongodbObjectId(),
        barCode: Int,
        createAt: new Date(),
        updateAt: new Date()
    };

    mockCtx.prisma.product.findUnique.mockResolvedValue([ productExpec ])
    const response = ProductClass.product( mockCtx, { userId: expectUser.id });
    await expect(response).resolves.toEqual(expectUser);
})

test('Given an UserId a user by id', async() => {
    const expectUser = {
        id: faker.database.mongodbObjectId(),
        email: faker.internet.email(),
        name: faker.name.findName(),
        createAt: new Date(),
        updateAt: new Date()
    };

    const expectResponse = `${expectUser.name}-${expectUser.email}`;
    mockCtx.prisma.user.findUnique.mockResolvedValue(expectUser);
    const response = userClass.userNameEmail(mockCtx, { userId: expectUser.id} ) 
    expect(spyUserClass).toBeCalledTimes(1);
    await expect (response).resolves.toEqual(expectResponse);

    test('', async () => {
        const expectedErrorMsg = `user not froud with id ${ userId }`;
        mockCtx.prisma.user.findUnique.mockResolvedValue(null);
        const response =  userClass.userById(mockCtx, { userId });
        expect( response ).rejects.toThrow( expectedErrorMsg);
    })
})