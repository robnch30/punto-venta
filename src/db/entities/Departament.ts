import { ObjectType, Field, ID } from 'type-graphql';
import { Product } from './Product'

export class Departament {

    @Field((type) => ID)
    id: string

    @Field()
    name: string

    @Field((Type) => Product, { nullable: true} )
    product?: Product | null

    @Field()
    productId?: string

    @Field((type) => Date)
    createAt: Date

    @Field((type) => Date)
    updateAt: Date
}