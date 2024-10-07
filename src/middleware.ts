/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(request: any) {
  // Your middleware logic goes here

  return NextResponse.next();
}
