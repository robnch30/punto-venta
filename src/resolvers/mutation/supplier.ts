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
import { SupplierCreateImput } from '../mutation/inputs'

@Resolver(Supplier)
export class SupplierMutation {

    @Mutation((returns) => Supplier)
    async createSupplier( 
        @Arg('data') data: SupplierCreateImput,
        @Ctx() ctx: Context
    ): Promise<Supplier> {
        return ctx.prisma.supplier.create({
            data:{
                email: data.email,
                name: data.name,
                phone: data.phone,
                company: data.company,
                rfcCompany: data.rfcCompany
            }
        })
    }

}