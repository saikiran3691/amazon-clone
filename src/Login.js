import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {auth} from "./firebase"
import "./Login.css"

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => 
    {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
         .then((auth) => {
            //Logged in, redirect to homepage
            history.push("/");
         })
         .catch((e) => alert(e.message));
    };

    const register = event => 
    {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then (auth => {
            //created a user and logged in
            history.push("/");
        })
        .catch((event) => alert(event.message));
    };

    return (
        <div className = "login">
            <Link to = "/">
                <img className = "login__logo"
                src = "http://www.pngmart.com/files/8/Amazon-PNG-Transparent-Image.png"
                alt = ""
                />
            </Link>
            <div className = "login__container">
                <h1>Sign In</h1>
                <form>
                <h5>Email</h5>
                <input value = {email} onChange = {event => setEmail(event.target.value)} type = "email"/>
                <h5>Password</h5>
                <input value = {password} onChange = {event => setPassword(event.target.value)} type = "password" />
                <button onClick = {login} className = "login__signin">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Noitce and our Interest-Based Ads Notice.
                </p>
                <button onClick = {register} className = "login__register">Create your Amazon account</button>
            </div>
        </div>
    );
}

export default Login;
