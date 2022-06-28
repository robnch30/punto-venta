import { User } from "@prisma/client";
import { faker } from '@faker-js/faker';
import { MockContext, Context, createMockContext } from "../../../config/context";
import { UserQuery } from "../../query/user/user";
import { text } from "stream/consumers";

const userClass = new UserQuery();

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
   mockCtx = createMockContext();
   ctx = mockCtx as unknown as Context; 
});

test('should find a user by id', async() => {
    const expectUser = {
        id: faker.database.mongodbObjectId(),
        email: faker.internet.email(),
        createAt: new Date(),
        updateAt: new Date()
    };

    mockCtx.prisma.user.findUnique.mockResolvedValue(expectUser)
    const response = userClass.userById( mockCtx, { userId: expectUser.id });
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