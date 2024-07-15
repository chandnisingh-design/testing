import React from 'react';

import Navigation from './Components/Navigation';
import catimg from './img/category.jpeg';
import Footer from './Components/Footer';
import { TextField, Button } from '@mui/material';
import { Form } from 'react-router-dom';


const Contact=()=>{
    return(
        <>
         <Navigation></Navigation>
            <section className="banner"><img src={catimg} alt="img not found"></img> <span>Contact US</span></section>
            <section className="ContactUs container">
            
            <div className="row my-5">
                <div className="col-md-6">
                    <h3>
                        Store in NCR
                    </h3>
                    <div class="address">
                        <p class="lh-lg address">G-21, Vatika India Next Gurugram, Near Matrikaran School</p>
                        <p class="lh-lg mail"><a href="mailto:name@gmail.com">anjalisingh@gmail.com</a></p>
                        <p class="lh-lg call"><a href="tel:+91123-456-7890"> +1 246-345-0695 </a></p>
                    </div>
                </div>
                <div className="col-md-6">
                    <h3>
                    Store in Istanbul
                    </h3>
                    <div class="address">
                        <p class="lh-lg address">G-21, Vatika India Next Gurugram, Near Matrikaran School</p>
                        <p class="lh-lg mail"><a href="mailto:name@gmail.com">anjalisingh@gmail.com</a></p>
                        <p class="lh-lg call"><a href="tel:+91123-456-7890"> +1 246-345-0695 </a></p>
                    </div>
                </div>

            <div className="row h-100 g-0 my-5">
                    <div className="col-12">
                        <div className="bg-300 p-4 h-100 d-flex flex-column justify-content-center">
                            <h3>Get In Touch</h3>
                           
                            <TextField label="Full Name"  className='my-4'/>
                            <TextField label="Email" className='my-4'/>
                            <TextField
                                className='my-4'
                                id="inputmsg"
                                label="Your Message"
                                multiline
                                rows={4}
                                defaultValue="Type Your Message Here"
                                />
                            <Button size="small" variant="contained">Contained</Button>
                           
                        </div>
                    </div>
                </div>
            </div>
           </section>
           <Footer></Footer>
        </>
    )
}

export default Contact;