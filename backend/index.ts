import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { CurrencyController } from './controllers/CurrencyController';
import { ICurrency } from './models/DataModels';
import { CurrencyModel } from './models/CurrencyModel';
import { UserController } from './controllers/UserController';

const app = express();
const PORT = 5001;  

app.use(bodyParser.json());

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3000/login'];

// CORS configuration
const corsOptions = {
    origin: function (origin: any, callback: any) {
        // Allow requests with no origin, like mobile apps or curl requests
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Enable credentials if needed
};

app.use(cors(corsOptions));

app.post('/converter/api',async (req: Request, res: Response) => {
    const data = req.body;
    console.log('Data received:', data);
    const user_conv = data.username
    const currency_from:string = data.from;
    const currency_to:string = data.to;
    const amount = data.amount
    const from_currency_usd = (await CurrencyController.getInfo(currency_from)).value_in_usd;
    const to_currency_usd = (await CurrencyController.getInfo(currency_to)).value_in_usd;
    console.log(from_currency_usd);
    const result = amount * from_currency_usd / to_currency_usd
    console.log(await UserController.logConversion(currency_from, amount, currency_to, result, user_conv))
    res.send(JSON.stringify({result: result.toFixed(2)}));
});

app.post('/login/api', async (req: Request, res: Response) => {
    const login_data = req.body
    const l_username = login_data.username
    const l_password = login_data.password
    const login_flag = {"check":await UserController.checkUser(l_username, l_password)}
    res.send(JSON.stringify(login_flag));
});

app.post('/signup/api', async (req: Request, res: Response) => {
    const signup_data = req.body;
    const s_username = signup_data.username
    const s_password = signup_data.password
    const s_email = signup_data.email
    const exists = await UserController.checkIfExists(s_username, s_email)
    if (exists) {
        res.send(JSON.stringify({exists, done: 'no'}))
    } else {
        await (UserController.addNewUser(s_username, s_password, s_email))
        res.send(JSON.stringify({exists, done: 'yes'}))
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:5001`);
});