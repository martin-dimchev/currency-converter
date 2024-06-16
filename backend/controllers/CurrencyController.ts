import { Request, Response } from "express";
import { CurrencyModel } from "../models/CurrencyModel";
import { ICurrency } from "../models/DataModels";


export class CurrencyController {

    static async getInfo(c_code: string) {
        const model:CurrencyModel = new CurrencyModel();

        const currency: ICurrency = await model.getInfo(`${c_code}`);
        return currency;
    }
}