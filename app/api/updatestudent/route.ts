import { NextResponse } from 'next/server';
import { dbClient, dbCollection, objectId } from '../db/db';


export async function POST(req: Request) {
    type InsertJson = {
        _id: string;
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
    const reqData: InsertJson = await req.json()
    try {
        const id = reqData._id;
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

        const filter = objectId(id);
        console.log(filter);
        const updateOperation = {
            $set: data,
        };

        const result = await dbCollection.updateOne(filter, updateOperation);
        if (result.modifiedCount === 1) {
            return NextResponse.json({ result: 'Student data updated successfully' });
        } else {
            return NextResponse.json({ result: 'No matching student found' });
        }
    } finally {
        dbClient.close();
    }
}