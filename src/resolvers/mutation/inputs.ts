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
    ID
} from 'type-graphql'

@InputType()
export class DepartamentCreateInput {
    
    @Field()
    name: string
}

