const asyncHandler = require('express-async-handler');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb+srv://devanshtivari:devansh123@cluster0.jmcjiee.mongodb.net/Dashboard?retryWrites=true&w=majority");
const data = asyncHandler(async(req,res) => {
    try{
        const database = client.db("Dashboard");
        var Data = [];
        var tempData = [];

        //widgets
        await database.collection("widgets").find().forEach(function(e){
            tempData.push(e);
        })

        Data.push({widgets: tempData});
        tempData = [];

        //gauzes
        await database
          .collection("gauzes")
          .find()
          .forEach(function (e) {
            tempData.push(e);
          });

        Data.push({ gauzes: tempData });
        tempData = [];

        //sliders
        await database
          .collection("sliders")
          .find()
          .forEach(function (e) {
            tempData.push(e);
          });

        Data.push({ sliders: tempData });
        tempData = [];

        //togglebuttons
        await database
          .collection("toggle_buttons")
          .find()
          .forEach(function (e) {
            tempData.push(e);
          });

        Data.push({ togglebuttons: tempData });
        tempData = [];

        //colorpickers
        await database
          .collection("color_picker")
          .find()
          .forEach(function (e) {
            tempData.push(e);
          });

        Data.push({ colorpickers: tempData });
        tempData = [];

        //devices
        await database
          .collection("devices")
          .find()
          .forEach(function (e) {
            tempData.push(e);
          });

        Data.push({ device: tempData });
        tempData = [];

        //pushbuttons
        await database
          .collection("push_buttons")
          .find()
          .forEach(function (e) {
            tempData.push(e);
          });

        Data.push({ pushbuttons: tempData });
        tempData = [];


        res.json(Data);
        res.status(200);
    }
    catch(err) {
        throw new Error(err.message);
    }
})

module.exports = data;