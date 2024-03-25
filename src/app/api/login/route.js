import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/login' , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
  const data = await response.json();
  
  if(!response.ok){
    return new NextResponse(
      JSON.stringify({message: data.message }), {
        status: response.status,
        statusText: 'Unauthorized'
    })
  }
  
  if (data.token) {
    cookies().set('accessToken', data.token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60,
    });

  delete data.accessToken;
  return NextResponse.json(data);
  }
}