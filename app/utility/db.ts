import { MongoClient } from "mongodb";

type InsertJson = {
  name: string;
  mobile: number;
  email: string;
  dob: Date;
  gender: string;
  street: string;
  city: string;
  state: string;
  pincode: number;
  course: string;
  submitDate: Date;
}

const dbURI = 'mongodb://127.0.0.1:27017';
const dbClient = new MongoClient(dbURI);
const dbDatabase = dbClient.db("crater");
const dbCollection = dbDatabase.collection("studentsList");

export const insertData = async (params: string) => {
  try {
    // await dbClient.connect();
    // const json = params.json()
    const data = {
      // name: params.name,
      // mobile: params.mobile,
      // email: params.email,
      // dob: new Date(params.dob),
      // gender: params.gender,
      // street: params.street,
      // city: params.city,
      // state: params.state,
      // pincode: params.pincode,
      // course: params.course,
      // submitDate: new Date()
    };
    // const result = await dbCollection.insertOne(data);
    return (params);
  } finally {
    dbClient.close();
  }
}


