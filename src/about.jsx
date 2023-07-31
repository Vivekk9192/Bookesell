import { NavLink } from "react-router-dom";
export const About = (props) =>{
    return <h1> About Component {props.info}<br/>
        <NavLink to="/user">Go to User</NavLink><br/>
        <NavLink to="/home">Go to Home</NavLink><br/>
    </h1>
};  