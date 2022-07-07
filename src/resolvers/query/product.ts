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
    async findProductByBarCode(
         @Arg('barCodeProduct') barCodeProduc: number,  
         @Ctx() ctx : Context
    ){
        const product = await ctx.prisma.product.findUnique({
            where: {
                barCode: barCodeProduc
            }
        });
        console.log(product)
        if ( !product){
            throw new Error (`Product not fund whit this bar code ${barCodeProduc}`)
        } 
        return product
    }
}


    
