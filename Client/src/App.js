import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ProtectorRouter from './Component/protectorRouter';
import { Provider } from 'react-redux';
import store from './redux/store';
import Admin from './Pages/Admin/Admin';
import Profile from './Pages/Profile/Profile';
import Land from "./Pages/Landingpage/Land";

function App() {
  return (
    <div className="App">
    
      <Provider store={store}>
     <BrowserRouter>
     <Routes>
      
      <Route path='/home' element={
      <ProtectorRouter>
      <Home/>
      </ProtectorRouter>
    }/>
 <Route path='/' element={<Land/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      
      <Route path='/admin' element={
      <ProtectorRouter>
      <Admin/>
      </ProtectorRouter>
    }/>
      
      <Route path='/profile' element={
      <ProtectorRouter>
      <Profile/>
      </ProtectorRouter>
    }/>

     </Routes>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
