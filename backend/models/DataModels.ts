export interface IUser {
    id?: number;
    username: string;
    password: string;
    email: string;
}

export interface ICurrency {
    id?: number;
    name: string;
    currency_code: string;
    currency_value: number;
    value_in_usd: number;
}