const { MongoClient } = require('mongodb');

function circulationRepo() {
    function loadData(data) {
        const url = 'mongodb://localhost:27017';
        const dbName = 'circulation'; 
        
        return new Promise(async (resolve, reject) => {
            const client = new MongoClient(url)
            try {
                await client.connect();
                const db = client.db(dbName)

                results = await db.collection('newspapers').insertMany(data);
                resolve(results);
                client.close()

            } catch (error) {
                reject(error)
            }

            
        })
    }
    function get(query,limit){
        const url = 'mongodb://localhost:27017';
        const dbName = 'circulation'; 
        return new Promise(async (resolve, reject)=>{
            const client = new MongoClient(url);
            try {
                await client.connect()
                const db = client.db(dbName)
                let results = await db.collection('newspapers').find(query);
                if(limit > 0){
                    results=results.limit(limit);
                }

                resolve(await results.toArray());
                client.close();
            } catch (error) {
                reject(error)
            }
        })
    }

    return { loadData , get }
}

module.exports = circulationRepo();