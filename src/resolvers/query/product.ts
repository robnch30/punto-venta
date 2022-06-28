import 'reflect-metadata'
import{
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
    Info,
}from 'type-graphql'
import { Product } from '../../db/entities'
import { Context } from '../../config/context'
import e from 'cors'

@InputType()
class ProductImput {
    @Field({ nullable: true })
    barCode: number

    @Field()
    name: string

}

@Resolver( Product )
export class ProductQuery {

    @Query(() => [Product])
    async allProducts ( @Ctx() ctx : Context ){
        return ctx.prisma.product.findMany()
    }

    @Query(() => Product)
    async findProduct(
         @Ctx() ctx : Context,
         params: { barCode : number }
    ){
        const product = await ctx.prisma.product.findUnique({
            where: {
                barCode: params.barCode
            }
        });
        if ( !product){
            throw new Error (`Product not fund whit this bar code ${params.barCode}`)
        } 
        return `${product.id}-${product.barCode}-${product.sellPrice}-${product.name},${product.stock}`
    }
}


    
