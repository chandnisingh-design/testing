import React from 'react';

import Navigation from './Navigation';
import catimg from '../img/category.jpeg';
import Footer from './Footer';
import { Button } from '@mui/material';
import {Link} from "react-router-dom";


const CreateAcc=()=>{
    return(
        <>
         <Navigation></Navigation>
            <section className="banner"><img src={catimg} alt="img not found"></img> <span>Create Your New Account</span></section>
            <section className="form container">
            
            <div className="row h-100 g-0 my-5 ">
                    <div className="col-12">
                        <div className="LoginLeft bg-300 p-5 h-100">
                            <h3>Create Your Account</h3>
                            <p>If you Don't have Your account please Create Your Account</p>
                            <form className='login-form'>
                            <div className='d-flex justify-content-between'>
                                <div className='d-grid w-100'>
                                    <label className='pt-4'>Your Full Name</label>
                                    <input type='text-field' aria-label='Your mail Id' placeholder='Your Mail Id'></input>
                                </div>
                                <div className='d-grid w-100'>
                                    <label className='pt-4'>Email Id</label>
                                    <input type='text-field' aria-label='Your mail Id' placeholder='Your Mail Id'></input>
                                </div>
                            </div>


                                <label className='pt-4'>Full Address</label>
                                <input type='text-field' placeholder='Type Your Address'></input>

                                <label className='pt-4'>Your Landmark</label>
                                <input type='text-field' placeholder='Your Landmark'></input>
                                <div className='d-flex justify-content-between'>
                                <div className='d-grid w-100'>
                                    <label className='pt-4'>City</label>
                                    <input type='text-field' placeholder='Enter Your City'></input>
                                </div>
                                
                                <div className='d-grid w-100'> 
                                    <label className='pt-4'>State</label>
                                    <input type='text-field' placeholder='Enter Your State'></input></div>
                                <div className='d-grid w-100'> 
                                    <label className='pt-4'>Postal Code</label>
                                    <input type='text-field' placeholder='Your Pin Code'></input>
                                </div>
                                </div>
                               
                                
                               
                                <label className='pt-4'>Your Password</label>
                                <input type='password' area-label='password' placeholder='Type your Password'></input>

                                <label className='pt-4'>Retype Your Password</label>
                                <input type='password' area-label='password' placeholder='Type your Password'></input>
                                <Link to="/Login" className='pb-4 pt-4'> LogIn If already have an account </Link>
                                <Button size="small" variant="contained" className='w-100 mt-4'>Craete Account</Button>
                            </form>
                        </div>
                    </div>

                </div>
           </section>
           <Footer></Footer>
        </>
    )
}

export default CreateAcc;