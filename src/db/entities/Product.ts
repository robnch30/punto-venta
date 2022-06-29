import { ObjectType, Field, ID } from 'type-graphql';
import { Supplier } from './Supplier'
import { Taxe } from './Taxe'
import { Departament } from './Departament'


@ObjectType()
export class Product {
    @Field((type) => ID)
    id: string

    @Field((type) => Number)
    barCode: number

    @Field()
    name: string

    @Field()
    sellPrice: number

    @Field()
    buyPrice: number
    @Field()
    stock: number

    @Field((type) => Supplier, {nullable: true})
    supplier?: Supplier | null

    @Field((type) => Taxe, {nullable: true})
    taxes?: Taxe[] | null

    @Field((type) => String, {nullable: true})
    departamentId?: string | null

    @Field((type) => Date, {nullable: true})
    createAt: Date | null

    @Field((type) => Date, {nullable: true})
    updateAt: Date | null
}

