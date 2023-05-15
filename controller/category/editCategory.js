const asyncHandler = require("express-async-handler");
const MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;
const client = new MongoClient(
  "mongodb+srv://devanshtivari:devansh123@cluster0.jmcjiee.mongodb.net/Dashboard?retryWrites=true&w=majority"
);

const edit = asyncHandler(async(req,res) => {
    try{
        const database = client.db("Dashboard");
        console.log(req.body.id);
        await database.collection('category').updateOne({_id: new ObjectId(req.body.id)},
            {
                $set: {
                    addCategory: req.body.category
                }
            } 
        )
        res.send("edited");
        res.status(200);
    }catch(err){
        throw new Error(err.message)
    }
})

module.exports = edit;