import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import Home from './Components/Home/Home';
import AllCurrencies from "./Components/AllCurrencies/AllCurrencies";
import History from "./Components/History/History";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home/:username' element={<Home/>}></Route>
          <Route path='/login' element={<LoginSignUp/>}/>
          <Route path='/allcurrencies/:username' element={<AllCurrencies />} />
          <Route path='/history/:username' element={<History />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
