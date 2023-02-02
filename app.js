const mongoClient = require('mongodb').MongoClient;

const circulationRepo = require('./repos/circulationRepo')
const data = require('./circulation.json')


const url = 'mongodb://localhost:27017';
const dbName = 'circulation';

async function main() {
    const client = new mongoClient(url);
    await client.connect();
    
   
    await client.db(dbName).dropDatabase();
    const results = await circulationRepo.loadData(data);
    const getData = await circulationRepo.get({},);
    // console.log(results.insertedCount, results.ops)
    const admin = client.db(dbName).admin();
    console.log(getData)
    // console.log(await admin.serverStatus());
    // console.log(await admin.listDatabases());
    client.close();
}

main();