const asyncHandler = require("express-async-handler");
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(
  "mongodb+srv://devanshtivari:devansh123@cluster0.jmcjiee.mongodb.net/Dashboard?retryWrites=true&w=majority"
);

const database = client.db("Dashboard");
database.collection("sliders").updateMany({
    device_id: {
        $exists: true
    }
},{
    $set: {
        topic_second: "23vv211"
    }
}
)
database.collection("toggle_buttons").updateMany(
  {
    device_id: {
      $exists: true,
    },
  },
  {
    $set: {
      topic_second: "23vv211",
    },
  }
);
database.collection("widgets").updateMany(
  {
    device_id: {
      $exists: true,
    },
  },
  {
    $set: {
      topic_second: "23vv211",
    },
  }
);