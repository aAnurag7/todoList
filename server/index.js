const { MongoClient } =require('mongodb');

let uri = 'mongodb+srv://anurag:anuragchatur@cluster0.r9fqxa8.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri);

async function getdata(){
    let result = await client.connect();
    let db = result.db('anurag');
    return db.collection('username')
}   
const main = async()=>{
    let data = await getdata();
    data = await data.insertMany([{
        name:'anruag chaturvedi'
    }])
    console.log(data);
}
main();