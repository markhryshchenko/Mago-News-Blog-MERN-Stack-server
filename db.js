/* const { MongoClient } = require("mongodb");
const client = new MongoClient(
  "mongodb+srv://qwerty:ghbdtn721@cluster0.3sguchi.mongodb.net/?retryWrites=true&w=majority"
);
const start = async () => {
      try {
        await client.connect()
        console.log("Connection complited")
        await client.db('test').createCollection('users')
        const users = client.db('test').collection('users')
       await users.insertOne({name: "Peter", age:'21'})
        const user = await users.findOne({name: 'Peter'})
        console.log(user) 
    } catch (e){

        console.log("Error")
        console.log(e)
        
    }
}
module.exports = client
 */
/* const Pool = require('pg').Pool
const pool = new Pool ({
    user: 'postgres',
    password: 'ghbdtn721',
    host: 'localhost',
    port: 5432,
    database: 'news_magazine'
})

module.exports = pool */