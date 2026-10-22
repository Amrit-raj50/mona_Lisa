import {MongoClient} from 'mongodb';

const client = new MongoClient(process.env.MONGO_URI);
// console.log("client : " , client);

export default client.connect();