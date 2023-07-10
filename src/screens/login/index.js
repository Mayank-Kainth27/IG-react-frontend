
import image from "../../assests/login-image.png";
import logo from "../../assests/insta-logo.png";
import "./index.css";
import Footer from "../../components/footer";
import axios from "axios";
import { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs';


const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const usernameChangeHandler = e => {
        setUserName(e.target.value);
    }

    const passwordChangeHandler = e => {
        setPassword(e.target.value);
    }

    const data = {
        userName: userName,
        password: password
    }

    const formSubmitHandler = async e => {
        e.preventDefault();

        const res = await axios.post('http://localhost:3001/login', data);
        if(res.data.message === "user not found"){
            navigate(res.data.redirectTo, {replace:true});
        } else if (res.data.message === "user logged in"){
            navigate(res.data.redirectTo, {replace: true})
        }

        console.log(res.data);
    }


    return (
        <div id='container'>
            <div id="login">
                <div id="login-image">
                    <img alt="login-capture" src={image} />
                </div>
                <div id="login-signUp">
                    <div id="login-data">
                        <img alt="insta-logo" src={logo} />
                        <form onSubmit={formSubmitHandler}>
                            <input className="cred-input" type="text" placeholder="Phone number, username or email address" onChange={usernameChangeHandler}/>
                            <input className="cred-input" type="password" placeholder="Password" onChange={passwordChangeHandler}/>
                            <span id="checkbox">    
                                <label>
                                 <input type="checkbox" />
                                    Save login info
                                </label>
                            </span>    
                            <button type="submit" id="login-button">Log in</button>
                        </form>
                        <div id="separation"> 
                            <hr />
                            <span>OR</span>
                            <hr />
                        </div>
                        <button id="login-facebook">Log in with Facebook</button>
                        <Link to="/forgetPassword" id="forgetPassword">Forgotten your password?</Link>
                    </div>
                    <div id="signUp-data">
                        <span>Dont have an account?</span>
                        <Link to={'/signUp'} id="signUp">Sign up</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;