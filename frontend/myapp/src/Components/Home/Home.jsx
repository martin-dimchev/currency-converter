import React, {useState, useEffect} from "react";
import "./Home.css";
import { useLocation } from "react-router-dom";


const Home = () => {

    const [from_currency, setFromCurrency] = useState('EUR')
    const [to_currency, setToCurrency] = useState('EUR')
    const [amount, setAmount]  = useState(0)
    const [conv_value, setConvValue] = useState(0)
    const [loggedIn, setLoggedIn] = useState(false)
    const [LogIn, setLogIn] = useState('Log In')
    const [username, setUsername] = useState('')

    const location = useLocation();
    useEffect(() => {
        if (location.state == null){
            setLoggedIn(false)
        }  else if (location.state.loggedIn){
            setLoggedIn(true)            
        }
      }, [location.state]);
      
      useEffect(() => {
        if (location.state && location.state.username) {
          setUsername(location.state.username);
        }
      }, [location.state]);
      
      console.log(username);
    const sendData = async (a, b, c, d) => {
        const data = { "from": a, "to": b, "amount": c, "username": d };
        
            const res = await fetch('http://localhost:5001/login/api', {  // Changed port to 3000
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            setConvValue(result.result);
    }

    
    
    return (
        <div>
        <nav id="navbar">
                <a href="/">Home</a>
                <a href="/allcurrencies">All currencies</a>
                <a href="/history" className={!loggedIn?"hidden":""}>History</a>
                <a href="/login" onClick={()=>{if (loggedIn) {setLoggedIn(false); setLogIn('Log In') } else {setLoggedIn(true); setLogIn('Log Out')}}}>{loggedIn?'Log Out':'Log In'}</a>
               
            </nav>
        <div className="home">
            <div className="home-wrapper">
            
            <h1>CURRENCY CONVERTER</h1>
            <div className="the-converter">
                <div className="from">
                <span>Amount</span>
                <div>
                <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                <select name="currency" id="from-currency" value={from_currency} onChange={(e)=>setFromCurrency(e.target.value)}>
                    <option value="BGN">BGN</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="JPY">JPY</option>
                    <option value="GBP">GBP</option>
                    <option value="AUD">AUD</option>
                    <option value="CAD">CAD</option>
                    <option value="CHF">CHF</option>
                    <option value="CNY">CNY</option>
                    <option value="SEK">SEK</option>
                    <option value="NZD">NZD</option>
                    <option value="MXN">MXN</option>
                    <option value="SGD">SGD</option>
                    <option value="HKD">HKD</option>
                    <option value="NOK">NOK</option>
                    <option value="TRY">TRY</option>
                    <option value="RUB">RUB</option>
                    <option value="INR">INR</option>
                    <option value="BRL">BRL</option>
                    <option value="ZAR">ZAR</option>
                </select>
                </div>
                </div>
                <div className="to">
                <span>Converted to</span>
                <div>
                <input type="text" disabled value={conv_value}/>
                <select name="currency" id="to-currency" value={to_currency} onChange={(e)=>setToCurrency(e.target.value)}>
                <option value="BGN">BGN</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="JPY">JPY</option>
                    <option value="GBP">GBP</option>
                    <option value="AUD">AUD</option>
                    <option value="CAD">CAD</option>
                    <option value="CHF">CHF</option>
                    <option value="CNY">CNY</option>
                    <option value="SEK">SEK</option>
                    <option value="NZD">NZD</option>
                    <option value="MXN">MXN</option>
                    <option value="SGD">SGD</option>
                    <option value="HKD">HKD</option>
                    <option value="NOK">NOK</option>
                    <option value="TRY">TRY</option>
                    <option value="RUB">RUB</option>
                    <option value="INR">INR</option>
                    <option value="BRL">BRL</option>
                    <option value="ZAR">ZAR</option>
                </select>
                </div>
                </div>
                <button className="convert-btn"  onClick={()=>{if (loggedIn) {sendData(from_currency, to_currency, 'martin')} else {alert("Please log in!")}}}>Convert</button>
                
            </div>
        </div>
    </div>
    </div>
    )
};

export default Home;