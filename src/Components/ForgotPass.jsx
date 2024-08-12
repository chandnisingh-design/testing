import React from 'react';

import Navigation from './Navigation';
import catimg from '../img/category.jpeg';
import Footer from './Footer';
import { Button } from '@mui/material';
import {Link} from "react-router-dom";


const Forgot=()=>{
    return(
        <>
         <Navigation></Navigation>
            <section className="banner"><img src={catimg} alt="img not found"></img> <span>Reset Your Account</span></section>
            <section className="form container">
            
            <div className="h-100 g-0 my-5 d-flex justify-content-center">
                    <div className="w-50">
                        <div className="LoginLeft bg-300 p-5 h-100">
                            <h3>Recover Your Password</h3>
                            <p>If you forgot your password, please recover it</p>
                            <form className='login-form'>
                                <label>Email Id</label>
                                <input type='text-field' aria-label='Your mail Id' placeholder='Your Mail Id'></input>
                                <label className='pt-4'>Your Password</label>
                                <input type='password' area-label='password' placeholder='Type your Password'></input>
                                <label className='pt-4'>ReEnter Your Password</label>
                                <input type='password' area-label='password' placeholder='Re-Type your Password'></input>
                                <Button size="small" variant="contained" className='mt-4 w-100'>Submit</Button>
                            </form>
                        </div>
                    </div>
                </div>
           </section>
           <Footer></Footer>
        </>
    )
}

export default Forgot;