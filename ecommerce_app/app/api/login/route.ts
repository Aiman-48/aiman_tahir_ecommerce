import { NextRequest, NextResponse } from "next/server"

export const POST = async (request : NextRequest) => {

    const body = await request.json()

    const email = body.email
    console.log(email)

    // if(!email){
    //     return NextResponse.json("email is required")
    // }
 
    return NextResponse.json({isLoggedIn:true})
}