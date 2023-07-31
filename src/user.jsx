import { NavLink } from "react-router-dom";

export const User = ({name, age}) =>{
    return (
    <h1>
         Hi, My name is {name} and {age}.<br/>
         <NavLink to="/home">Go to Home</NavLink><br/>
        <NavLink to="/about">Go to About</NavLink><br/>
    </h1>
    
    
    );
};  