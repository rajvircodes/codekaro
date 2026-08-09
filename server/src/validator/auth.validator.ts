import {z} from "zod"


export const registerSchema = z.object({
    fullName:z 
    .string()
    .trim()
    .min(2, "Full name must be at least two character")
    .max(50, "Full name must not exceed 50 character"),

    username:z 
    .string()
    .trim()
    .min(3, "username must be at least two character")
    .max(30, "username must not exceed 50 character")
    .regex(/^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"),

    email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .toLowerCase(),

     password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must not exceed 100 characters"),

})


export type RegisterInput = z.infer<typeof registerSchema>