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

    @Field((type) => Product)
    product: Product

    @Field((type) => ID)
    productId: string

    @Field((type) => Date)
    createAt: string

    @Field((type) => Date)
    updateAt: string    
}