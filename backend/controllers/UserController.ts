import {Request, Response} from "express";
import {UserModel} from "../models/UserModel";
import {IUser} from "../models/DataModels";

export class UserController {

    static async checkUser(username: string, password: string) {
        const model:UserModel = new UserModel();

        const person: IUser = await model.loginCheck(username, password);
        if (person){
            return true;
        }
        return false;
    }

    static async addNewUser(username: string, password: string, email: string) {
        const new_model: UserModel = new UserModel();
        const res = await new_model.addUser(username, password, email)
        return res;
    }

    static async checkIfExists(username:  string, email: string){
        const check_model: UserModel = new UserModel();
        const chk_response: IUser  = await check_model.checkIfExists(username,email)
        if (chk_response) {
            return true;
        } 
        return false;
        
    }

    static async logConversion (coverted_from: string, from_amount:number, converted_to:string, to_amount: number, usernmame:string) {
        const model: UserModel = new UserModel();
        const res = await model.logConversion(coverted_from, from_amount, converted_to, to_amount, usernmame)
        return res;
    }
}