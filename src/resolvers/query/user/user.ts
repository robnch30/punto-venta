import 'reflect-metadata'
import{
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
}from 'type-graphql'
import { User } from '../../../db/entities'
import { Context } from '../../../config/context'

@InputType()

class UserUniqueInput{
    @Field({ nullable: true})
    id: number

    @Field({ nullable: true})
    email: string
}

@InputType()
class UserCreateInput{
    @Field()
    email: string

    @Field({ nullable: true})
    name: string
}

@Resolver(User)
export class UserQuery{

    @Query(() => [User])
    async allUsers(@Ctx() ctx: Context){
        return ctx.prisma.user.findMany()
    }

    @Query(() => User)
    async userById(
        @Ctx() ctx: Context,
        params: {userId: string}
    ) {
        return ctx.prisma.user.findUnique({
            where: { id: params.userId }
        })
    }

    @Query(() => String)
    async userNameEmail(
        @Ctx() ctx: Context,
        params: {userId: string }
    ) {

        const user = await ctx.prisma.user.findUnique({
            where: {  id: params.userId }
        });

        if( !user ){
            throw new Error (`user not found with id ${ params.userId }`);
        }
        return `${user.name}-${user.email}`;
    }


}