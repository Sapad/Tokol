import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { UpdateData, retrieveDataByID } from "@/lib/firebase/service";
import { compare, hash } from "bcrypt";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // membuat api get untuk menampilkan user dengan token padda authorization
  if (req.method === "GET") {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
      jwt.verify(
        token,
        process.env.NEXTAUTH_SECRET || "",
        async (err: any, decoded: any) => {
          if (decoded) {
            const profile: any = await retrieveDataByID("users", decoded.id);
            if (profile) {
              profile.id = decoded.id;
              res.status(200).json({
                status: true,
                statusCode: 200,
                message: "success",
                data: profile,
              });
            } else {
              res.status(404).json({
                status: false,
                statusCode: 404,
                message: "failed",
                data: {},
              });
            }
          } else {
            res.status(403).json({
              status: false,
              statusCode: 403,
              message: "Access Denied",
              data: {},
            });
          }
        },
      );
    }
  } else if (req.method === "PUT") {
    const { data } = req.body;
    const token = req.headers.authorization?.split(" ")[1] || "";
    // melakukan jwt token dengan secret untuk update data
    jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || "",
      async (err: any, decode: any) => {
        if (decode) {
          if (data.password) {
            const passwordConfirm = await compare(
              data.oldPassword,
              data.encryptedPasword,
            );
            if (!passwordConfirm) {
              res.status(400).json({
                status: false,
                statusCode: 400,
                message: "Passwoed Old Salah ",
              });
            }
            delete data.oldPassword;
            delete data.encryptedPasword;
            data.password = await hash(data.password, 10);
          }
          await UpdateData("users", decode.id, data, (result: boolean) => {
            if (result) {
              res
                .status(200)
                .json({ status: true, statusCode: 200, message: "success" });
            } else {
              res
                .status(400)
                .json({ status: false, statusCode: 400, message: "failed" });
            }
          });
        } else {
          res
            .status(403)
            .json({ status: false, statusCode: 400, message: "Access Denied" });
        }
      },
    );
  }
}
