import { RowDataPacket } from "mysql2";
import {Database} from "../Database";
import { ICurrency, IUser } from "./DataModels";

export class CurrencyModel extends Database {
    async getInfo(c_code: string) {
        const [results] =
            await this.connection.query<RowDataPacket[]>("SELECT * FROM currencies WHERE currency_code=?", [c_code])
        return results[0] as ICurrency;
    }
}