import {MongoClient, Db} from 'mongodb'

let _db: Db | null = null

const getDb = async (): Promise<Db> => {
    if (!_db) {
        try {
            const newClient = await MongoClient.connect(process?.env?.MONGO_URI ?? 'mongodb://sensei:sensei@localhost:27017/')
            _db = newClient.db('sensei')            
        } catch (err) {
            console.error('Unable to connect to db', err)
        }
    }
    return _db as Db
}

export default getDb
