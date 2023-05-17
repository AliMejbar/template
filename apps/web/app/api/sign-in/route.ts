import { signIn } from "@template/feature/authentication/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  return signIn(request);
}
