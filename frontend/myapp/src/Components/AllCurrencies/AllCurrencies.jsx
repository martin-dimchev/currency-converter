import React, {useState, useEffect} from "react";
import "./AllCurrencies.css";
import { useLocation, useNavigate , useParams} from "react-router-dom";

const AllCurrencies = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const {username} = useParams()

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state == null){
            setLoggedIn(false)
        }  else if (location.state.loggedIn){
            setLoggedIn(true)            
        }
      }, [location.state]);

    
      const goToPage = (ep) => {
        navigate(ep, {state: {loggedIn: loggedIn, username:username}})
      }

    const [currencies, setCurrencies] = useState([])

      useEffect(() => {
        fetch('http://localhost:5001/api/currencies', {
          method: 'GET'
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setCurrencies(data);
          });
      }, []);
    
    return (
        <div className="allcurrencies">
                <nav id="navbar">
                <a onClick={()=>{goToPage(`/home/${username}`)}}>Home</a>
                <a onClick={()=>{goToPage(`/allcurrencies${username}`)}}>All currencies</a>
                <a onClick={()=>{goToPage(`/history/${username}`)}} className={!loggedIn?'hidden':''}>History</a>
                <a href="/login" onClick={()=>{if (loggedIn) {setLoggedIn(false);} else {setLoggedIn(true); }}}>{loggedIn?'Log Out':'Log In'}</a>
               
            </nav>
            <h1>CURRENCY EXGANGE RATES</h1>
  <table>
    <thead>
        <tr>
            <th>Currency name</th>
            <th>Currency code</th>
            <th>Currency value</th>
            <th>Value in USD</th>
        </tr>
    </thead>

    <tbody>
        {currencies.map((currency)=>{
            return (
            <tr>
                <td>{currency.name}</td>
                <td>{currency.currency_code}</td>
                <td>{currency.currency_value}</td>
                <td>{currency.value_in_usd}</td>
            </tr>
            )
        })}
    </tbody>

 
</table>
            
        </div>
    )
}

export default AllCurrencies