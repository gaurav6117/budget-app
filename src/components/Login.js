import React, { useState } from 'react'
import { Link } from "react-router-dom";
import SocialButton from "./SocialButton"
export default function Login(props) {
    const [state, setstate] = useState({ isLoggedIn: false, userData: [], email: "", password: "", credentials: [{ email: "abc@gmail.com", password: "aaaaaaaa" }] })
    const handler = (event) => {
        const { name, value } = event.target;
        setstate({ ...state, [name]: value });
    }
    const submit = (e) => {
        e.preventDefault();
        state.credentials.map(element => {
            if (element.email === state.email && element.password === state.password) {
                setstate({ ...state, isLoggedIn: true })
            }
        });
    }
    if (state.isLoggedIn === true) {
        props.history.push('../home');
    }
    const handleSocialLogin = (user) => {
        setstate({ ...state, isLoggedIn: true, userData: user })
        console.log(state);
    };

    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };
    console.log(state)
    return (
        <div>
            <section className="ftco-section">
                <div className="container">
                    {/* right side-: sign-up side  */}
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="wrap d-md-flex">
                                <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                                    <div className="text w-100">
                                        <h2>Welcome to login</h2>
                                        <p>Don't have an account?</p>
                                        <Link to="/registration" className="btn btn-white btn-outline-white">Sign Up</Link>
                                        <br /><br />
                                        <p>OR</p>
                                        <SocialButton
                                            provider="facebook"
                                            appId="177290744525925"
                                            onLoginSuccess={handleSocialLogin}
                                            onLoginFailure={handleSocialLoginFailure}
                                        >
                                            Login with Facebook
                                        </SocialButton><br /><br />
                                        <SocialButton
                                            provider="google"
                                            appId="173488185022-879gol0l1na3nlprsfrjmo4eg1ma5022.apps.googleusercontent.com"
                                            onLoginSuccess={handleSocialLogin}
                                            onLoginFailure={handleSocialLoginFailure}
                                        >
                                            Login with Google
                                        </SocialButton><br /><br /><br />

                                    </div>
                                </div>
                                {/* left side-: Login side  */}
                                <div className="login-wrap p-4 p-lg-5">
                                    <div className="d-flex">
                                        <div className="w-100">
                                            <h3 className="mb-4">Sign In</h3>
                                        </div>
                                    </div>
                                    <form action="/vendor/loginrequest/" method="POST" className="signin-form">
                                        <div className="form-group mb-3">
                                            <label className="label" for="loginusername">Username</label>
                                            <input type="text" id="loginusername" placeholder="abc@gmail.com" onChange={handler} name="email" className="form-control"
                                                required />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="label" for="loginpassword">Password</label>
                                            <input type="password" id="loginpassword" onChange={handler} name="password" className="form-control"
                                                placeholder="Password" required />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" onClick={submit} className="form-control btn btn-primary submit px-3">Sign In</button>
                                        </div>
                                        <div className="form-group d-md-flex">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
