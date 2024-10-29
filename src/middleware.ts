import withAuth from "./middlewares/WithAuth";
import { NextResponse } from "next/server";

export function mainMiddleware() {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMiddleware, ["admin", "auth", "member"]);
