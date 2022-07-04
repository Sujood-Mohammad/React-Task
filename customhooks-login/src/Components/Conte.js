import React  from 'react';
import {useState ,createContext} from 'react';
const context = React.createContext()
function Conte(props){
    const [Flag , setflag] = useState(false);
//    console.log(Flag);
    return (
    <context.Provider value={{Flag:Flag}}>
    {props.children}
    </context.Provider>)
}
export default Conte