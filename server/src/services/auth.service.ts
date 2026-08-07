import {prisma} from "../config/prisma.js";

export const getUser = async()=>{
    return prisma.user.findMany();
}