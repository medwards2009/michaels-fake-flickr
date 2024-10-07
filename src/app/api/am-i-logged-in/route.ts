import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();

  const loggedIn = cookieStore.get("sessionId")?.value === "1";

  if (loggedIn) {
    return NextResponse.json({ loggedIn: true }, { status: 200 });
  } else {
    return NextResponse.json({ loggedIn: false }, { status: 200 });
  }
}
