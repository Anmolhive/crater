import { NextResponse } from 'next/server';
import { dbClient, dbDatabase } from '../db/db';
import  bcrypt from 'bcrypt';


export async function POST(req: Request) {
    type InsertJson = {
        email: string;
        password: string;
      }
    const reqData:InsertJson = await req.json()
    try {
        const data = {
            email: reqData.email,
            password: reqData.password
          };
          await dbClient.connect();
          const dbCollection = dbDatabase.collection("users");
          const filter = { email: data.email };
          const user = await dbCollection.findOne(filter);
          if(user) {
            const isPasswordValid = await bcrypt.compare(reqData.password, user.password);
            if(isPasswordValid) {
                return NextResponse.json({result: true});
            } else {
                return NextResponse.json({result: false});
            }
          }
      } finally {
        dbClient.close();
      }
}