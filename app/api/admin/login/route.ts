import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

import Admin from "../../../(models)/Admin";

export async function POST(req: any, res: NextApiResponse) {
    try {
        const body = await req.json();
        await Admin.create(body);
        return NextResponse.json({ message: "Admin Created" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}

export async function GET(req: any, res: NextApiResponse) {
    try {
        const data = await Admin.find();
        return NextResponse.json({ data }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}