import { ObjectType, Field, ID } from 'type-graphql';
import { Supplier } from './Supplier'
import { Taxe } from './Taxe'
import { Departament } from './Departament'


@ObjectType()
export class Product {
    @Field((type) => ID)
    id: string

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

    @Field((type) => Supplier, {nullable: true})
    supplier?: Supplier | null

    @Field()
    supplierId?: string

    @Field((Type) => Departament, {nullable: true})
    departament?: Departament [] | null

    @Field((type) => Taxe, {nullable: true})
    taxes?: Taxe [] | null

    @Field((type) => Date)
    createAt: Date

    @Field((type) => Date)
    updateAt: Date
}