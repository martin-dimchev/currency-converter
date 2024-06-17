import React, {useState, useEffect} from "react";
import "./History.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";



const History = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const {username} = useParams()
    const [accountLogs, setAccountLogs] = useState([])

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
      
      useEffect(() => {
        console.log(username)
          fetch(`http://localhost:5001/api/accountlogs/${username}`, {
            method: 'GET'
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setAccountLogs(data);
            });
        }, []);
        console.log(accountLogs);
        
        const deleteHistory = async () => {
          const res = await fetch(`http://localhost:5001/api/accountlogs/${username}`,{
            method: 'DELETE'
          })
          const result = await res.json()
          console.log(result);
        }

      return (
        <div className="history">
                <nav id="navbar">
                <a onClick={()=>{goToPage(`/home/${username}`)}}>Home</a>
                <a onClick={()=>{goToPage(`/allcurrencies/${username}`)}}>All currencies</a>
                <a onClick={()=>{goToPage(`/history/${username}`)}} className={!loggedIn?'hidden':''}>History</a>
                <a href="/login" onClick={()=>{if (loggedIn) {setLoggedIn(false);} else {setLoggedIn(true); }}}>{loggedIn?'Log Out':'Log In'}</a>
               
            </nav>
            <h1>ACCOUNT HISTORY</h1>
            <table>
    <thead>
        <tr>
            <th>FROM</th>
            <th>CURR</th>
            <th>TO</th>
            <th>CURR</th>
            <th>TIME</th>
        </tr>
    </thead>

    <tbody>
        {accountLogs.map((accLog)=>{
            return (
            <tr>
                <td>{accLog.from_amount}</td>
                <td>{accLog.converted_from}</td>
                <td>{accLog.to_amount}</td>
                <td>{accLog.converted_to}</td>
                <td>{accLog.timestamp.replace(/[TZ]/gm, ' ')}</td>
            </tr>
            )
        })}
    </tbody>  
</table>
<button type="submit" id="delete-btn" onClick={(e)=>{e.preventDefault(); deleteHistory(); window.location.reload()}}>Delete history</button>
        </div>
      )
    
    }

  export default History;