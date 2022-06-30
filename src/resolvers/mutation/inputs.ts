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
    name?: string
    
    @Field()
    sellPrice?: number

    @Field()
    buyPrice?: number
    
    @Field()
    stock?: number
}

@InputType()
export class TiketCrete {
    @Field()
    name?: string
    
    @Field()
    sellPrice?: number
    
    @Field()
    stock?: number

    @Field()
    subTotal?: number
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



