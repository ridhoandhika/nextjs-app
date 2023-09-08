// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

//declara for response api
type Data = {
  status: boolean;
  statusCode: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //cek data bedasarkan id yyang di request
  if (req.query.product![1]) {
    const data = await retrieveDataById("products", req.query.product![1]);
    if(!data){
      return res.status(404).json({ status: false,statusCode: 404, data});
    }
    return res.status(200).json({ status: true, statusCode: 200, data });
  }

  //get all data dari firebase berdasarkan document
  const data = await retrieveData("products");
  if(!data){
    return res.status(404).json({ status: false,statusCode: 404, data});
  }
  res.status(200).json({ status: true, statusCode: 200, data });
}
