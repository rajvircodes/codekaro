import { Request, Response } from "express";
import { getUser } from "../services/auth.service.js";
import { sendResponse } from "../utils/api-response.js";


export const getAllUsers = async(_req:Request, res:Response)=>{
    const users = await getUser()

    sendResponse(res, 200,{
        success:true,
        message:"Users fetched successfully!",
        data:users,
    })
}