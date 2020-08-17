import { GraphQLServer } from 'graphql-yoga'
import {config as dotenvInit} from 'dotenv'
import schema from './schema'

dotenvInit()

const server = new GraphQLServer({ 
    schema,
    context: ({request}) => {        
        const token = request?.headers?.authorization;

        // TODO: Implement authentication

        // const user = getUserByJwt(token)

        // return {user}
        return {}
    },
    
})
server.start(() => console.log('Server is running on localhost:4000'))
