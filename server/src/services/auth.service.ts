import bcrypt from 'bcrypt'
import {prisma} from "../config/prisma.js";
import { RegisterInput } from '../validator/auth.validator.js';

export const registerUser = async (input:RegisterInput)=>{
    const {fullName, username, email, password} = input

    const existingUser = await prisma.user.findFirst({
        where:{
            OR: [{email}, {username}]
        },
    })

    if(existingUser){
        throw new Error("Email or username already exists")

    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
        data:{
            fullName,
            username,
            email,
            password:hashedPassword
        },
    });
    return user;
}