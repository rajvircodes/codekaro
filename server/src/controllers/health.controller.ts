import { Request, Response } from "express";
import { sendResponse } from "../utils/api-response.js";


export const healthCheck = (_req:Request, res:Response)=>{
    sendResponse(res,200,{
        success:true,
        message:"API is running healthy!",
        data:null,
    });
};

