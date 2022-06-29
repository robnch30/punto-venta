import { ObjectType, Field, ID } from 'type-graphql';
import { Product } from './Product';

@ObjectType()
export class Taxe {
    @Field((type) => ID)
    id: string

    @Field()
    name: string

    @Field()
    percent: number

    @Field((type) => Product, {nullable: true})
    product?: Product | null

    @Field((type) => String, {nullable: true})
    productId?: String | null 

    @Field((type) => Date, {nullable: true})
    createAt: Date | null

    @Field((type) => Date, {nullable: true})
    updateAt: Date | null
}