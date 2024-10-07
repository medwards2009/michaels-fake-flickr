import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const response = NextResponse.json({ message: "user logged out" });
  // response.cookies.delete("sessionId");
  cookies().delete("sessionId");

  return response;
}
