const {MongoClient, ServerApiVersion} = require('mongodb');
const uri =
  "mongodb+srv://devanshtivari:devansh123@cluster0.jmcjiee.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connectDB = async() => {
    try{
        await client.connect();
        console.log("connected successfully to mongodb✔");
    }catch{
        await client.close();
        console.log("Error in connection");
    }
}

module.exports = connectDB;