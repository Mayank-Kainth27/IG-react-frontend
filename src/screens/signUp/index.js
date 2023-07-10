import axios from "axios";
import React, { useState } from "react";
import bcrypt from 'bcryptjs';
import logo from "../../assests/insta-logo.png";
import './index.css';
import { useNavigate } from "react-router";


const SignUp = () => {
    const [numOrEmail, setNumOrEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const emailOrNumberChangeHandler = (e) => {
        setNumOrEmail(e.target.value);
    }

    const usernameChangeHandler = e => {
        setUsername(e.target.value);
    }

    const fullnameChangeHandler = e => {
        setFullname(e.target.value);
    }
    const passwordChangeHandler = e => {
        setPassword(e.target.value);
    }

    const submitHandler = async e => {
        e.preventDefault();

        //let hashedPassword;

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt,);
        
        let userData;
        
        if(isNaN(Number(numOrEmail))){
            userData = {
                email: numOrEmail,
                number: null,
                fullname: fullname,
                username: username,
                password: hash,
                salt: salt
            }
            console.log("user.password "+userData.password);
        } else {
            userData = {
                number: Number(numOrEmail),
                email: null,
                fullname: fullname,
                username: username,
                password: hash,
                salt: salt
            }
        }

        const res = await axios.post('http://localhost:3001/signUp', userData)
        console.log(res.data);
        //navigate('/login', {replace:true});

    }

    return (
        <div id="main">
            <div id='main-flex'>
                <div id="info-login">
                    <img alt="logo" src={logo} />
                    <span>Sign up to see photos and videos from your friends.</span>
                    <button id="fb-login">Log in with Facebook</button>
                </div>
                <div id="separation">
                    <hr />
                    <span>OR</span>
                    <hr />
                </div>
                <div>
                    <form id="signUp-form" onSubmit={submitHandler}>
                        <input onChange={emailOrNumberChangeHandler} placeholder="Mobile number or email address"/>
                        <input onChange={fullnameChangeHandler} placeholder="Fullname"/>
                        <input onChange={usernameChangeHandler} placeholder="Username"/>
                        <input onChange={passwordChangeHandler} placeholder="Password" type="password"/>
                        <span>People who use our service may have uploaded your contact information to Instagram. <a>Learn more</a></span>
                        <span>By signing up, you agree to our <a>Terms</a>, <a>Privacy Policy</a> and <a>Cookies Policy</a>.</span>
                        <button type="submit" id="signUp-button">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;