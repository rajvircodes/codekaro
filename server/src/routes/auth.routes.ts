import { Router } from "express";
import { getAllUsers } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { registerSchema } from "../validator/auth.validator.js";

const router = Router()
router.get('/', getAllUsers)
router.post('/register', validate(registerSchema),(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Validation successful",
        data:req.body
    })
})

export default router