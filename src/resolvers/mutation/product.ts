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
    Root
} from 'type-graphql'
import { Product, Taxe, Supplier,Departament } from '../../db/entities'
import { Context } from '../../config/context'

@InputType()
class SupplierInput {
    @Field()
    email: string
    @Field()
    name: string
    @Field()
    phone: number
    @Field()
    company: string
    @Field()
    rfcCompany: string
}

@InputType()
class ProductCreateInput {
    @Field()
    barCode: number

    @Field()
    name: string
    
    @Field()
    sellPrice: number

    @Field()
    buyPrice: number
    
    @Field()
    stock: number
}

@Resolver(Product)
export class ProductMutation {

    @FieldResolver()
    async departament(
        @Root() product: Product,
        @Ctx() ctx: Context
    ): Promise<Departament[]> {
        return ctx.prisma.product
            .findUnique({ where: { barCode: product.barCode },})
            .department()
    }
    
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

    
}
