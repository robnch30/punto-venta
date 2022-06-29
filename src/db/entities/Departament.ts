import { ObjectType, Field, ID } from 'type-graphql';
import { Product } from './Product'

export class Departament {

    @Field((type) => ID)
    id: string

    @Field()
    name: string

    @Field((type) => Product, { nullable: true})
    product?: Product | null

    @Field((type) => ID, {nullable: true})
    productId?: string | null

    @Field((type) => Date)
    createAt: Date

    @Field((type) => Date)
    updateAt: Date
}