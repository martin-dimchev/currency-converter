import {Database} from "../Database";
import {ICurrency, IUser} from "./DataModels";
import {RowDataPacket} from "mysql2";

export class UserModel extends Database {
    

    async loginCheck(username: string, password: string) {
        const [results] =
            await this.connection.query<RowDataPacket[]>("SELECT * from accounts WHERE username=? AND password=?", [username, password])

        return results[0] as IUser;
    }

    async addUser(username: string, password: string, email: string) {
        await this.connection.query("INSERT INTO accounts(username, password, email) VALUES (?, ?, ?)", [username, password, email])
        return 'Done;'
    }

    async checkIfExists (username:string, email:string) {
        const [check_results] = await this.connection.query<RowDataPacket[]>('SELECT * FROM accounts WHERE username=? OR email=?', [username, email])
        return check_results[0] as IUser;
    }

    async logConversion (converted_from: string, from_amount:number, converted_to:string, to_amount: number, username:string) {
        const [results] = await this.connection.query<RowDataPacket[]>("SELECT * from accounts WHERE username=?", [username])
        const account_id = results[0]["id"]
        console.log(account_id);
        
        await this.connection.query("INSERT INTO accounts_history(converted_from, from_amount, converted_to, to_amount, account_id) VALUES (?, ?, ?, ?, ?)", [converted_from, from_amount, converted_to, to_amount, account_id])
        return 'Done;'
    }
}