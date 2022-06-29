import 'reflect-metadata'
import {
    Query,
    Ctx,
    InputType,
    Field,
    Mutation,
    Arg,
    FieldResolver,
    Root,
    Resolver,
} from 'type-graphql'
import { Prisma } from '@prisma/client';
import { Context } from '../../config/context'
import { Product, Departament } from '../../db/entities';
import { DepartamentCreateInput } from './inputs';

@Resolver(Departament)
export class DepartamentMutation {

    @Mutation((returns) => Departament)
    async createDepartament (
        @Arg('data') data: DepartamentCreateInput,
        @Ctx() ctx: Context
    ): Promise <Departament> {
        return ctx.prisma.departament.create({
            data:{
                name: data.name
            }
        })
    }

}



