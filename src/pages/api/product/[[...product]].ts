import { retrieveData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // membuat method get untuk menampilkan data users
  if (req.method === "GET") {
    const data = await retrieveData("product");

    res
      .status(200)
      .json({ status: true, statusCode: 200, message: "success", data });
  }
}
