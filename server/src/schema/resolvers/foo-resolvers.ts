import getDb from '../../libs/get-db'

const helloResolver = {
    Query: {
        getFoos: async (
            parent: any,
            args: {},
            context: any,
            info: any
        ) => {
            const db = await getDb()
            const results = await db.collection('foos').find().toArray()
            return results.map(x => x.bar)
        }
    }
}

export default helloResolver