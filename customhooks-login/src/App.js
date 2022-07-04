import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,  Route} from 'react-router-dom';
import Login  from './Components/Login';
import Logout from './Components/Logout';
import Nav from './Components/Nav';
function App() {
  return (
    <BrowserRouter>
<div className='App'>
<Nav/>
<Routes>
<Route  path="/" element={<Login/>}/>
<Route path="/Logout" element={<Logout/>}/>
</Routes> 
</div>
</BrowserRouter>

  );
}

export default App;