import React from "react";

import Navigation from "./Navigation";
import Footer from './Footer';
import Carousel from './Carousel'
import catimg from '../img/category.jpeg';
import exclusive from '../img/exclusive.jpg'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';


const AboutUs=()=>{
    return(
        <>
        <>
            <Navigation></Navigation>
            <section className="banner"><img src={catimg} alt="img not found"></img> <span>All About US</span></section>
            <section className="AboutUs container">
            <h2 className="mt-5 mb-3">Our Story</h2>
            <p>
            <b>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </b>
            </p>
            <p>
                Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.
            </p>

            <div className="row my5">
                <div className="col-md-6">
                    <h3>
                        Our Mission
                    </h3>
                    <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="col-md-6">
                    <h3>
                        Our Vision
                    </h3>
                    <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

            <div className="row h-100 g-0 my-5">
                    <div className="col-md-6">
                        <div className="card card-span h-100 text-white"> <img src={exclusive} className="card-img h-100" alt="img not found"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg-300 p-4 h-100 d-flex flex-column justify-content-center">
                            <h4 className="text-800">The Company</h4>
                            <h1 className="fw-semi-bold">All About Our Company an and Work</h1>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
           </section>

           <section class="service-promotion horizontal container pt-0 mb-md-4 pb-md-4 mb-xl-5 mt-5">
                <div class="row">
                    <div class="col-md-4 text-center mb-5 mb-md-0">
                        <div class="service-promotion__icon mb-4">
                            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                        </div>
                        <h3 class="service-promotion__title fs-6 text-uppercase">Fast And Free Delivery</h3>
                        <p class="service-promotion__content text-secondary">Free delivery for all orders over $140</p>
                    </div>
                    
                    <div class="col-md-4 text-center mb-5 mb-md-0">
                        <div class="service-promotion__icon mb-4">
                           <HeadsetOutlinedIcon></HeadsetOutlinedIcon>
                        </div>
                        <h3 class="service-promotion__title fs-6 text-uppercase">24/7 Customer Support</h3>
                        <p class="service-promotion__content text-secondary">Friendly 24/7 customer support</p>
                    </div>
                        
                    <div class="col-md-4 text-center mb-5 mb-md-0">
                        <div class="service-promotion__icon mb-4">
                            <VerifiedUserOutlinedIcon></VerifiedUserOutlinedIcon>
                            </div>
                            <h3 class="service-promotion__title fs-6 text-uppercase">Money Back Guarantee</h3>
                            <p class="service-promotion__content text-secondary">We return money within 30 days</p>
                        </div>
                </div>
            </section>
            <section className="carousel">
                <h2 className="text-center">Our Happy Customers</h2>
                <Carousel></Carousel>
            </section>
            
            <Footer></Footer>
        </>
        </>
    );

}
export default AboutUs;

