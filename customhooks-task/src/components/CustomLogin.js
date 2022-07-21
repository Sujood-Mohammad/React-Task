import { useState } from "react";

export default function CustomLogin(email,pass)
{
    const database = [
        {
          username: "user1",
          password: "pass1",
          phone: "0777777"

        },
        {
          username: "user2",
          password: "pass2",
          phone: "07777"
        }
      ];
    
     const [message, setMessage] = useState('');

    function Handle() {
       
        const userData = database.find((user) => user.username === email||user.phone === email);

        if (userData) 
        {
          if (userData.password===pass) 

            // console.log('true');
            setMessage('successful')
        }

        else {
            // console.log('false');
            setMessage('fail')


        }
      
    }
  
    return {
        Handle,message
       }
}