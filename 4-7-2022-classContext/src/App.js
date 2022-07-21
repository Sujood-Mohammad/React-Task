import ChangeBackground from "./components/ChangeBackground";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import { UserProvider } from './components/UserContext'

export default function App() {
  const color = 'coral'


return (

   <UserProvider value={color}>
  <ChangeBackground />
  </UserProvider>
 
);
}