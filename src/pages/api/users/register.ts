import type { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "@/services/auth/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // membuat api register dengan method post
  if (req.method === "POST") {
    await signUp(req.body, (status: boolean) => {
      if (status) {
        res.status(200).json({ status: true, msg: "succes", statusCode: 200 });
      } else {
        res.status(400).json({ status: false, msg: "failed", statusCode: 400 });
      }
    });
  } else {
    res
      .status(405)
      .json({ status: false, msg: "method not allowed", statusCode: 405 });
  }
}
