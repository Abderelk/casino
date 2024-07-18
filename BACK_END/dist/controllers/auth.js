var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { userModel } from "../models/user.js";
/**
 * @description Register a new user
 * @param {object} req - Request object
 * @param {object} res - Response object
 */
export const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const newUser = new userModel({
            username,
            email,
            password
        });
        yield newUser.save();
        res.status(201).json({ message: "User created successfully", newUser });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
    }
});
