import 'reflect-metadata'
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
    Mutation,
    Arg,
    FieldResolver,
    Root,
} from 'type-graphql'
import { Product, Taxe, Supplier,Departament, Tiket } from '../../db/entities'
import { Context } from '../../config/context'
import { ProductCreateInput, FindProduct, TiketCrete, UpdateProduct } from '../mutation/inputs'
import { prisma } from '@prisma/client'

@Resolver(Product)
export class ProductMutation {

/*     @FieldResolver()
    async tiket(
        @Root() product: TiketCrete,
        @Ctx() ctx: Context
    ): Promise<Departament[]> {
        return ctx.prisma.product
            .findUnique({ where: { barCode: product.barCode, },})
            .tiket()
    } */
    
    @Mutation((returns) => Product)
    async creteProduct (
        @Arg('data') data: ProductCreateInput,
        @Ctx() ctx: Context
    ): Promise<Product> {
        return ctx.prisma.product.create({
            data:{
                barCode: data.barCode,
                name: data.name,
                sellPrice: data.sellPrice,
                buyPrice: data.buyPrice,
                stock: data.stock
            }
        })
    }

    @Mutation((returns) => Product)
    async deleteProduct (
        @Arg ('data') data: FindProduct,
        @Ctx() ctx: Context
    ):Promise<Product>{
        console.log(data.barCode)
        return ctx.prisma.product.delete({
            where:{ barCode: data.barCode}
        })
    }

/*     @Mutation((returns) => Product)
    async updateProduct(
        @Arg('data') data: ProductCreateInput,
        @Arg('fields') fields: UpdateProduct,
        @Ctx() ctx: Context
    ):Promise<Product>{
        console.log(data.barCode)
        return ctx.prisma.product.update({
            where: {
                barCode: data.barCode
            },
            data: {
                name: data.name,
                sellPrice: data.sellPrice,
                buyPrice: data.buyPrice,
                stock: data.stock
            }
        })
    } */

    @Mutation((returns) => Product)
    async updateProductByBarCode(
        @Arg('barCode') barCode: number,
        @Arg('mod') mod: UpdateProduct,
        @Ctx() ctx: Context
    ):Promise<Product>{ 
        console.log("Busqueda de producto "+barCode)
        return await ctx.prisma.product.update({
            where: {barCode: barCode},
            data:{ 
                name: mod.name,
                buyPrice: mod.buyPrice,
                sellPrice: mod.sellPrice,
                stock: mod.stock
             }
        });
    }

/*     @Mutation( (returns) => Product )
    async CreateTiket(
        @Arg('findProduc') quantityProduct: {
            barCodeProduct: number,
            quantityProduct: number
        }

    ):Promise<Product>{

    } */

    @Mutation((returns) => Tiket)
    async createTiket(
        @Arg('barCodeProduct') barCodeProduct: number,
        @Arg('quantityProduct') quantityProduct: number,
        @Arg('data') data: TiketCrete,
        @Ctx() ctx: Context
    ){
        const product = await ctx.prisma.product.findUnique({
            where:{
                barCode: barCodeProduct
            }
        });
        console.log(product)
        if ( !product){
            throw new Error (`Product not fund whit this bar code ${barCodeProduct}`)
        } 
       
        const tiket = await ctx.prisma.tiket.create({
            data:{
                quantity: quantityProduct,
                barCode: product.barCode,
                nameProduct: product.name,
                sellPrice: product.sellPrice,
                subTotal: quantityProduct * product.sellPrice
            }
        });
        console.log("Tiket")
        console.log(tiket)
        return tiket
    }
}
