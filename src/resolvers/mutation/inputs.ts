import 'reflect-metadata'
import {
    Resolver,
    Query,
    Ctx,
    Field,
    Mutation,
    Arg,
    FieldResolver,
    InputType,
    ID,
    Int
} from 'type-graphql'
import { Product } from '../../db/entities'

@InputType()
export class DepartamentCreateInput {
    @Field()
    name: string
}

@InputType()
export class ProductCreateInput {
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
@InputType()
export class FindProduct {
    @Field((type) => Int)
    barCode: number
}

@InputType()
export class UpdateProduct {
    @Field()
    barCode: number

    @Field((type) => String, {nullable: true})
    name?: string | null
    
    @Field((type) => Number, {nullable: true})
    sellPrice?: number | null

    @Field((type) => Number, {nullable: true})
    buyPrice?: number | null
    
    @Field((type) => Number, {nullable: true})
    stock?: number | null
}

@InputType()
export class TiketCrete {
    @Field()
    quantity: number

    @Field()
    barCode: number
}

@InputType()
export class SupplierCreateImput {
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
export class TaxeCreateImput {
    @Field()
    name: string

    @Field()
    percent: number
}



