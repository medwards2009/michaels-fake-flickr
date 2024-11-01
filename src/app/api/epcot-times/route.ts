import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.themeparks.wiki/preview/parks/WaltDisneyWorldEpcot/waittime"
    ); // Replace with your third-party API URL
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
