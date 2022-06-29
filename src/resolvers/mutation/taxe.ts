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
import { Supplier, Taxe } from '../../db/entities'
import { Context } from '../../config/context'
import { TaxeCreateImput } from './inputs'

@Resolver(Taxe)
export class TaxeMutation {

    @Mutation((returns) => Taxe)
    async createTaxe (
        @Arg('data') data: TaxeCreateImput,
        @Ctx() ctx: Context
    ):Promise<Taxe> {
        return ctx.prisma.taxe.create({
            data: {
                name: data.name,
                percent: data.percent
            }
        })
    }
}
