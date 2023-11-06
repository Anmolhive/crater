import { MongoClient, ObjectId } from "mongodb";

const dbURI = 'mongodb://127.0.0.1:27017';
export const dbClient = new MongoClient(dbURI);
export const dbDatabase = dbClient.db("crater");
export const dbCollection = dbDatabase.collection("studentsList");
export function objectId(id:string) {
    return { _id: new ObjectId(id) };
}