import { MongoBulkWriteError, MongoClient } from "mongodb";
import mongourl from "./appkey";

const url = mongourl

const options = { useNewUrlParser: true}

let connectDB

if(process.env.NODE_ENV == 'development'){
    if(!global._mongo){
        global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
}else{
    connectDB = new MongoClient(url,options).connect()
}

export { connectDB }