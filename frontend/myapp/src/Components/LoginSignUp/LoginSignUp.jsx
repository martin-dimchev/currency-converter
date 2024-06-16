import React, {useState} from "react";
import "./LoginSignUp.css";
import { useNavigate } from "react-router-dom";

const LoginSignUp = () => {

    const [action, setAction] = useState('Login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confPassword, setConfPassword] = useState('')
    const [wrongUorP, setwrongUorP] = useState(false)
    const [diffPass, setDiffPass] = useState(false)
    const [exists, setExists] = useState(false)

    const url = 'localhost:5001';

    async function send_login_user_data (username, password) {
            const login_data = {username, password}
            const login_response = await fetch('http://localhost:5001/login/api',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(login_data)
            })
            const login_result = await login_response.json();
            if (login_result.check === false) {
                setwrongUorP(true)
            } else {
                setwrongUorP(false);
                navigate("/", {state:{loggedIn:true, username: username}})
            }
    }
    async function send_signup_user_data (username, password, email, confPassword) {
            if (password !== confPassword) {
                setDiffPass(true)
                return;
            } else {
                setDiffPass(false)
            }
            const signup_data = {username, email, password, confPassword}
            const signup_response = await fetch('http://localhost:5001/login/api', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(signup_data)
            })
            const signup_result = await signup_response.json();
            if (signup_result.exists){
                setExists(true)
            } else {
                setExists(false)
                navigate('/', {state:{loggedIn:true, username}})
            }

    };


    const navigate = useNavigate()

    return (
        <div className="login-wrapper">
        <div className="wrapper">
            <form action="">
                <h1>{action}</h1>
                <input type="text" placeholder="Username" className="login" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <input type="text" placeholder="Email" className={action==='Login'?"hidden login":"login"} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" className="login" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirm password" className={action==='Login'?"hidden login":"login"} value={confPassword} onChange={(e)=>setConfPassword(e.target.value)}/>
                <button type="submit" onClick={(e)=>{e.preventDefault();action==='Login'?send_login_user_data(username, password):send_signup_user_data(username, password, email, confPassword)}}>{action}</button>
                <div className={action==='Sign Up'?"hidden q":"q"}>
                <span>Don't have an account?</span> <span className="chng-action" onClick={() => {setAction("Sign Up"); setUsername(''); setPassword(''); setConfPassword(''); setEmail('');}}>Sign Up</span> 
                <p className={wrongUorP===false?'hidden wr_log':'wr_log'}>Wrong Username or Password</p>
                
                </div>
                <div className={action==='Login'?"hidden q":"q"}>
                <span>Already have an account?</span> <span className="chng-action" onClick={() =>{setAction("Login"); setUsername(''); setPassword(''); setConfPassword(''); setEmail('');}}>Login</span>
                <p className={diffPass===false?'hidden dp':'dp'}>Passwords must match</p>
                <p className={exists===false?'hidden ex':'ex'}>Username or Email already exists</p>
                </div>
            </form>
        </div>
        </div>
    )
};

export default LoginSignUp;