const asyncHandler = require("express-async-handler");
const MongoClient = require("mongodb").MongoClient;
const categoryModel = require('../../model/category');
const client = new MongoClient(
  "mongodb+srv://devanshtivari:devansh123@cluster0.jmcjiee.mongodb.net/Dashboard?retryWrites=true&w=majority"
);
const add = asyncHandler(async(req,res) => {
    try{
        const database = await client.db("Dashboard");
        console.log("the request received is: ",req.body);
        await database.collection('category').insertOne(req.body);
        res.send("document inserted");
        res.status(200)
    }catch(err){
        throw new Error(err.message);
    }
})

module.exports = add;