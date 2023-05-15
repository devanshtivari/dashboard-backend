const asyncHandler = require("express-async-handler");
const MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;
const client = new MongoClient(
  "mongodb+srv://devanshtivari:devansh123@cluster0.jmcjiee.mongodb.net/Dashboard?retryWrites=true&w=majority"
);

const del = asyncHandler(async(req,res) => {
    try{
        const database = client.db("Dashboard");
        const id = req.body;
        console.log(id);
        await database.collection("category").deleteOne({_id: new ObjectId(id)})
        res.send("Document Deleted");
        res.status(200)
    }catch(err){
        throw new Error(err.message)
    }
})

module.exports = del;