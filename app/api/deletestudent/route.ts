import { NextResponse } from 'next/server';
import { dbClient, dbCollection, objectId } from '../db/db';


export async function POST(req: Request) {
    type InsertJson = {
        _id: string;
    }
    const reqData: InsertJson = await req.json()
    try {
        const id = reqData._id;
        const filter = objectId(id);
        const result = await dbCollection.deleteOne(filter);
        if (result.deletedCount === 1)
            return NextResponse.json({ result: 'Student deleted successfully' });
        else return NextResponse.json({ result: 'No matching student found' });
    } finally {
        dbClient.close();
    }
}




