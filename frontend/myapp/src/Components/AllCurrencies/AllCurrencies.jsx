import React, {useState, useEffect} from "react";
import "./AllCurrencies.css";
import { useLocation } from "react-router-dom";

const AllCurrencies = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    const location = useLocation();
    useEffect(() => {
        if (location.state == null){
            setLoggedIn(false)
        }  else if (location.state.loggedIn){
            setLoggedIn(true)            
        }
      }, [location.state]);


    return (
        <div>
                <nav id="navbar">
                <a href="/">Home</a>
                <a href="/allcurrencies">All currencies</a>
                <a href="/history" className={!loggedIn?'hidden':''}>History</a>
                <a href="/login" onClick={()=>{if (loggedIn) {setLoggedIn(false);} else {setLoggedIn(true); }}}>{loggedIn?'Log Out':'Log In'}</a>
               
            </nav>
            <table>
    <thead>
        <tr>
            <th>name</th>
            <th>currency_code</th>
            <th>currency_value</th>
            <th>value_in_usd</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Bulgarian Lev</td>
            <td>BGN</td>
            <td>1</td>
            <td>0.55</td>
        </tr>
        <tr>
            <td>United States Dollar</td>
            <td>USD</td>
            <td>1</td>
            <td>1.00</td>
        </tr>
        <tr>
            <td>Euro</td>
            <td>EUR</td>
            <td>1</td>
            <td>1.18</td>
        </tr>
        <tr>
            <td>Japanese Yen</td>
            <td>JPY</td>
            <td>1</td>
            <td>0.01</td>
        </tr>
        <tr>
            <td>British Pound</td>
            <td>GBP</td>
            <td>1</td>
            <td>1.38</td>
        </tr>
        <tr>
            <td>Australian Dollar</td>
            <td>AUD</td>
            <td>1</td>
            <td>0.75</td>
        </tr>
        <tr>
            <td>Canadian Dollar</td>
            <td>CAD</td>
            <td>1</td>
            <td>0.79</td>
        </tr>
        <tr>
            <td>Swiss Franc</td>
            <td>CHF</td>
            <td>1</td>
            <td>1.08</td>
        </tr>
        <tr>
            <td>Chinese Yuan Renminbi</td>
            <td>CNY</td>
            <td>1</td>
            <td>0.16</td>
        </tr>
        <tr>
            <td>Swedish Krona</td>
            <td>SEK</td>
            <td>1</td>
            <td>0.12</td>
        </tr>
        <tr>
            <td>New Zealand Dollar</td>
            <td>NZD</td>
            <td>1</td>
            <td>0.72</td>
        </tr>
        <tr>
            <td>Mexican Peso</td>
            <td>MXN</td>
            <td>1</td>
            <td>0.05</td>
        </tr>
        <tr>
            <td>Singapore Dollar</td>
            <td>SGD</td>
            <td>1</td>
            <td>0.74</td>
        </tr>
        <tr>
            <td>Hong Kong Dollar</td>
            <td>HKD</td>
            <td>1</td>
            <td>0.13</td>
        </tr>
        <tr>
            <td>Norwegian Krone</td>
            <td>NOK</td>
            <td>1</td>
            <td>0.11</td>
        </tr>
        <tr>
            <td>Turkish Lira</td>
            <td>TRY</td>
            <td>1</td>
            <td>0.12</td>
        </tr>
        <tr>
            <td>Russian Ruble</td>
            <td>RUB</td>
            <td>1</td>
            <td>0.01</td>
        </tr>
        <tr>
            <td>Indian Rupee</td>
            <td>INR</td>
            <td>1</td>
            <td>0.01</td>
        </tr>
        <tr>
            <td>Brazilian Real</td>
            <td>BRL</td>
            <td>1</td>
            <td>0.19</td>
        </tr>
        <tr>
            <td>South African Rand</td>
            <td>ZAR</td>
            <td>1</td>
            <td>0.07</td>
        </tr>
    </tbody>
</table>
            
        </div>
    )
}

export default AllCurrencies