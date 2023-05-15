const asyncHandler = require("express-async-handler");
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(
  "mongodb+srv://devanshtivari:devansh123@cluster0.jmcjiee.mongodb.net/Dashboard?retryWrites=true&w=majority"
);
const data = asyncHandler(async(req,res) => {
    try{
        const database = client.db("Dashboard");
        var Data = [];
        await database.collection('category').find().forEach((e)=>{
            Data.push(e)
        })

        res.json(Data);
        res.status(200);
    }catch(err){
        throw new Error(err.message)
    }
})

module.exports = data;