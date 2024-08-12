import React from 'react';

import Navigation from './Navigation';
import catimg from '../img/category.jpeg';
import Footer from './Footer';
import { Button } from '@mui/material';
import {Link} from "react-router-dom";


const LogIn=()=>{
    return(
        <>
         <Navigation></Navigation>
            <section className="banner"><img src={catimg} alt="img not found"></img> <span>Login Your Account</span></section>
            <section className="form container">
            
            <div className="row h-100 g-0 my-5 ">
                    <div className="col-6">
                        <div className="LoginLeft bg-300 p-5 h-100">
                            <h3>Login Your Account</h3>
                            <p>If you have already Your account please login with your Credentials</p>
                            <form className='login-form'>
                                <label>Email Id</label>
                                <input type='text-field' aria-label='Your mail Id' placeholder='Your Mail Id'></input>
                                <label className='pt-4'>Your Password</label>
                                <input type='password' area-label='password' placeholder='Type your Password'></input>
                                <Link to="/ForgotPassword" className='pb-4 pt-4'> Forgot Your Password?</Link>
                                <Button size="small" variant="contained" className='w-100'>LogIn</Button>
                            </form>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="LoginRight bg-300 p-5 h-100">
                            <h3>Create an account</h3>
                            <form className='login-form'>
                               <p>Registering for this site allows you to access your order status and history. We’ll get a new account set up for you in no time. We’ll get a new account set up for you in no time. For this will only ask you for information necessary to make the purchase process faster and easier</p>
                                <Link className='create-acount w-100 pt-4' to="/CreateAccount">Create Your Account</Link>
                               
                            </form>
                        </div>
                    </div>
                </div>
           </section>
           <Footer></Footer>
        </>
    )
}

export default LogIn;