import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { newProduct } from "@/backend/controllers/productController";

const handler = nc();

dbConnect().then(() => console.log("connected"));

handler.post(newProduct);

export default handler;
