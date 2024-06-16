import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import Home from './Components/Home/Home';
import AllCurrencies from "./Components/AllCurrencies/AllCurrencies";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<LoginSignUp/>}/>
          <Route path='/allcurrencies' element={<AllCurrencies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
