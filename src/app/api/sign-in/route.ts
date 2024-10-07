import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const response = NextResponse.json({ message: "user logged in" });
  cookies().set("sessionId", "1");

  // response.cookies.set("sessionId", "1", {
  //   httpOnly: true,
  //   secure: true,
  //   sameSite: true,
  //   path: "/",
  // });

  return response;
}
