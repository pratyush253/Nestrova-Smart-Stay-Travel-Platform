const  mongoose  = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main() 
.then (() => {
    console.log("connected to db");
})
.catch((err) =>  { 
    console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
  await initDB();
}

const initDB = async() => {
 await Listing.deleteMany({});
 initData.data = initData.data.map((obj) => ({...obj, owner:"688b74413147b857e4d9615a"}));
 await Listing.insertMany(initData.data);
 console.log("data was initialized");
};


