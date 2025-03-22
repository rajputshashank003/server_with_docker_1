import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();

const prismaClient = new PrismaClient();

app.get("/", async (req : Request, res : Response) => {
    try {
        const data = await prismaClient.user.findMany();
        res.status(200).json({
            success : true, 
            payload : {
                message : "server working!",
                data : data
            }
        });
    } catch (e : any) {
        res.status(404).json({
            success : false,
            payload : {
                message : "data not found \n \n \n \n" + e.message,
            }
        })
    }
})

app.get("/create", async (req: Request, res : Response) => {
    try {
        await prismaClient.user.create({
            data : {
                username : "afasdf",
                password : "asdfghjkl"
            }
        })
        const data = await prismaClient.user.findMany({});
        res.status(200).json({
            success : true,
            payload : {
                message : "create success",
                data 
            }
        })
    } catch (e : any) {
        res.status(402).json({
            success : false,
            payload : {
                message : "not able to create data " + e.message,
            }
        })
    }
})

app.listen(3000, () => console.log("working"));