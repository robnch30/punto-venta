import 'reflect-metadata';
import * as tq from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { GraphQLScalarType } from 'graphql';
import { DateTimeResolver } from 'graphql-scalars';
import { context } from './config/context';

import { query } from './resolvers/query';
import { mutations } from './resolvers/mutation';

const app = async () => {
    const schema = await tq.buildSchema({
        resolvers: [ ...query, ...mutations ],
        scalarsMap: [{type: GraphQLScalarType, scalar: DateTimeResolver}]
    })

    new ApolloServer({schema, context}).listen({ port:4000 }, () => {
        console.log('server ready');
    })
}

app();
