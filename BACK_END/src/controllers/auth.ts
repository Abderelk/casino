import {userModel} from "../models/user.js";
import {Request,Response} from "express";

/**
 * @description Register a new user
 * @param {object} req - Request object
 * @param {object} res - Response object
 */

export const signUp = async (req:Request,res:Response) =>{
    try{
        const { username, email, password } = req.body;
const newUser = new userModel({
    username,
    email,
    password
})
await newUser.save();
res.status(201).json({message:"User created successfully",newUser})
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Erreur lors de la création de l'utilisateur"})
    }
}