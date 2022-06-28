import { ObjectType, Field, ID } from 'type-graphql';
import { Product } from './Product'

@ObjectType()
export class Supplier {
    @Field((type) => ID)
    id: string

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
    
    @Field()
    street?: string
    
    @Field()
    zipCode?: number
    
    @Field()
    outdoorNumber?: number
    
    @Field()
    sttlement?: String
    
    @Field((type) => Product)
    products?: Product
    
    @Field()
    productId?: string

    @Field((type) => Date)
    createAt: Date

    @Field((type) => Date)
    updateAt: Date    
}