import { NextResponse } from 'next/server';
import { dbClient, dbCollection } from '../db/db';


export async function POST(req: Request) {
    type InsertJson = {
        name: string;
        mobile: number;
        email: string;
        dob: string;
        gender: string;
        street: string;
        city: string;
        state: string;
        pincode: number;
        course: string;
        submitDate: string;
      }
    const reqData:InsertJson = await req.json()
    try {
        const data = {
            name: reqData.name,
            mobile: reqData.mobile,
            email: reqData.email,
            dob: new Date(reqData.dob),
            gender: reqData.gender,
            street: reqData.street,
            city: reqData.city,
            state: reqData.state,
            pincode: reqData.pincode,
            course: reqData.course,
            submitDate: new Date()
          };
        await dbClient.connect();
        const result = await dbCollection.insertOne(data);
        return NextResponse.json({result: result});
      } finally {
        dbClient.close();
      }
}

  


