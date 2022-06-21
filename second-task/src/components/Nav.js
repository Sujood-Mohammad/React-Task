import React from "react";
class Nav extends React.Component 
{
     Welcome(){
        return(<h1>Welcome To Our Site</h1>);
    }

    render(){
        return(
            <div className="navbar bg-dark text-white container">{this.Welcome()}</div>
        );
    }
}
export default Nav;