import { NextResponse } from "next/server";
import { dbClient, dbCollection } from "../db/db";

export async function GET(req: Request) {
    await dbClient.connect();
    const data = await dbCollection.find({}).toArray();
    return NextResponse.json(data);
}