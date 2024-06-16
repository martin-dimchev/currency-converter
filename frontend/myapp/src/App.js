import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import Home from './Components/Home/Home';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<LoginSignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
