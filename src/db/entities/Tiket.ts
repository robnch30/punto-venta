import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Tiket {

    @Field((type) => ID)
    id: string

    @Field((type) => Number)
    quantity: number

    @Field((type) => Number)
    barCode: number

    @Field((type) => String, {nullable:true})
    nameProduc: String | null

    @Field((type) => Number)
    sellPrice: number

    @Field((type) => Number)
    subTotal: number
}