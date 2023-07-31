import { NavLink } from "react-router-dom";
export const Home = () =>{
    return <h1> Home Component <br/>
        <NavLink to="/user">Go to User</NavLink><br/>
        <NavLink to="/about">Go to About</NavLink><br/>
    </h1>
};  