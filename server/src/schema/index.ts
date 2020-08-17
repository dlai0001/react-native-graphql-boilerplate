import { importSchema } from 'graphql-import'
import helloResolver from './resolvers/hello-resolver'
import { makeExecutableSchema } from 'graphql-tools'
import fooResolver from './resolvers/foo-resolvers'

const schema = makeExecutableSchema({
    typeDefs: [
        importSchema(`${__dirname}/typedefs/schema.graphql`),        
    ],
    resolvers: [
        helloResolver, 
        fooResolver
    ],
})

export default schema