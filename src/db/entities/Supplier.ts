import { IsEmail } from 'class-validator';
import { ObjectType, Field, ID } from 'type-graphql';
import { Product } from './Product'

@ObjectType()
export class Supplier {
    @Field((type) => ID)
    id: string

    @Field()
    @IsEmail()
    email: string

    @Field()
    name: string

    @Field()
    phone: number

    @Field()
    company: string

    @Field()
    rfcCompany: string
    
    @Field((type) => String)
    street?: string | null
    
    @Field((type) => Number)
    zipCode?: number | null
    
    @Field((type) => Number)
    outdoorNumber?: number | null
    
    @Field((type) => String)
    sttlement?: String | null
    
    @Field((type) => Product, {nullable: true})
    products?: Product | null
    
    @Field((type) => String, {nullable: true})
    productId?: string | null
    
    @Field((type) => Date, {nullable: true})
    createAt: Date | null

    @Field((type) => Date, {nullable: true})
    updateAt: Date | null
}