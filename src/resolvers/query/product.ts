import 'reflect-metadata'
import{
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
    Info,
    Arg,
}from 'type-graphql'
import { Product } from '../../db/entities'
import { Context } from '../../config/context'
import { FindProduct, ProductCreateInput } from '../mutation/inputs'

@Resolver( Product )
export class ProductQuery {

    @Query(() => [Product])
    async allProducts ( @Ctx() ctx : Context ){
        return ctx.prisma.product.findMany()
    }

    @Query(() => Product)
    async findProduct(
         @Arg('params') params: FindProduct,  
         @Ctx() ctx : Context
    ){
        const product = await ctx.prisma.product.findUnique({
            where: {
                barCode: params.barCode
            }
        });
        console.log(product)
        if ( !product){
            throw new Error (`Product not fund whit this bar code ${params.barCode}`)
        } 
        return product
    }
}


    
