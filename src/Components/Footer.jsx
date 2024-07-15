import React from 'react';
import {Link} from "react-router-dom";

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

const Footer=()=>{
return(
    <>
<section className="py-0 pt-5 footer">
        <div className="container">
        <div className="row">
        <div className="col-6 col-lg-3 mb-3">
            <h5 className="footer-logo">SCHAMADA</h5>
            <ScrollAnimation animateIn='fadeInBottom' animateOnce={true}>
            <div class="footer-add">
                <p class="lh-lg address">G-21, Vatika India Next Gurugram, Near Matrikaran School</p>
                <br></br>
                <p class="lh-lg mail"><a href="mailto:name@gmail.com">anjalisingh@gmail.com</a></p>
                <p class="lh-lg call"><a href="tel:+91123-456-7890"> +1 246-345-0695 </a></p>
            </div>
            </ScrollAnimation>
            </div>

            <div className="col-6 col-lg-3 mb-3">
            <h5 className="lh-lg fw-bold text-1000">Company</h5>
            <ScrollAnimation animateIn='fadeInBottom' animateOnce={true}>
            <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><Link to="/AboutUs" className="text-800 text-decoration-none">About Us</Link></li>
                <li className="lh-lg"><Link to="/Contact" className="text-800 text-decoration-none">Contact Us</Link></li>
            </ul>
            </ScrollAnimation>
            </div>
            <div className="col-6 col-lg-3 mb-3">
            <h5 className="lh-lg fw-bold text-1000">Help &amp; Support</h5>
            <ScrollAnimation animateIn='fadeInBottom' animateOnce={true}>
            <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><Link className="text-800 text-decoration-none">My Account</Link></li>
                <li className="lh-lg"><Link className="text-800 text-decoration-none">Legal & Privacy</Link></li>
                <li className="lh-lg"><Link className="text-800 text-decoration-none">Delivery Information</Link></li>
                <li className="lh-lg"><Link className="text-800 text-decoration-none">Returns & Refund Procedure</Link></li>
            </ul>
            </ScrollAnimation>
            </div>
            <div className="col-6 col-lg-3 mb-3">
            <h5 className="lh-lg fw-bold text-1000">Shop</h5>
            <ScrollAnimation animateIn='fadeInBottom' animateOnce={true}>
            <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><Link className="text-800 text-decoration-none">New Arrivals</Link></li>
                <li className="lh-lg"><Link className="text-800 text-decoration-none">Men</Link></li>
                <li className="lh-lg"><Link className="text-800 text-decoration-none">Women</Link></li>
                <li className="lh-lg"><Link className="text-800 text-decoration-none">Accessories</Link></li>
                <li className="lh-lg"><Link className="text-800 text-decoration-none">Shop All</Link></li>
            </ul>
            </ScrollAnimation>
            </div>
        </div>
        </div>
       
        <div className="footer-sub">
        <div className="row flex-center my-1">
            <div className="col-md-4 order-1 order-md-0">
            <p className="my-2 text-1000 text-center text-md-start"> Made with&nbsp;
                <svg className="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#EB6453" viewBox="0 0 16 16">
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
                </svg>&nbsp;by&nbsp;<Link className="text-800" href="#" target="_blank">The SCHAMDA</Link>
            </p>
            </div>
            <div className="col-md-4 text-center">  <p>All rights reserved © 2024 SCHAMDA Pvt. Ltd.</p> </div>
            <div className="col-md-4">
                <div className="text-center text-md-end">
                    <Link to="#!"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook me-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link>
                    <Link to="#!"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram me-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></Link>
                    <Link to="#!"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-youtube me-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></Link>
                    <Link to="#!"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter me-4"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></Link>
                </div>
            </div>
           
        </div>
        </div>
       
</section>
    </>
)
}

export default Footer;