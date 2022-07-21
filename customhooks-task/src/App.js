import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import FirstLogin from "./components/FirstLogin";
import SecondLogin from "./components/SecondLogin";
export default function App() {




return (
<BrowserRouter>
<Link to="First"> First Login</Link>
<br></br>
<Link to="second">Second Login</Link>
<br></br>
<Routes>
  <Route path="First" element={ <FirstLogin />}/>
  <Route path="second" element={ <SecondLogin />}/>

</Routes>
</BrowserRouter>



);
}