import React from 'react';
import {Link} from "react-router-dom";

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

import Navigation from './Navigation';
import Footer from './Footer';

import women from '../img/women.jpg';
import men from '../img/men.jpg';
import video from '../img/begVideo.mp4'
import exclusive from '../img/exclusive.jpg'
import collect from "../img/1.mp4";
import packaging from "../img/2.mp4";
import stamp from "../img/3.mp4";


const Home=()=>{
return(
    <>
    <Navigation></Navigation>
   <section className="py-11 bg-light-gradient border-bottom border-white border-5">
        <div className="bg-holder overlay overlay-light">
        </div>
        <div className="container">
          <div className="row flex-center">
            <div className="col-12 mb-10">
              <div className="d-flex align-items-center flex-column ban-title">
                {/* <h1 className="fw-normal fadeInBottom"> With an outstanding style, only for you</h1> */}
                <h1 className="exclusive-text fadeInBottom">Exclusively designed for you</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section class="py-0" id="header">
        <div class="container">
          <div class="row g-0">
            <div class="col-md-6">
              <div class="card card-span text-white"> <img src={women}class="img-fluid" alt="img not found"/>
                <div class="card-img-overlay d-flex flex-center"> <Link to="/AboutUs" class="btn btn-lg btn-light">For Her</Link></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card card-span text-white"> <img src={men}  class="img-fluid" alt="img not found"/>
                <div class="card-img-overlay d-flex flex-center"> <Link to="/AboutUs" class="btn btn-lg btn-light">For Him </Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="mt-3" id="videosec">
      <div>
          <div class="row g-0">
            <div class="col-md-12">
              <div class="card card-span text-white"> <video src={video} muted autoPlay loop preLoad="auto" alt="video not loaded" />
                <div class="card-img-overlay"> 
                <ScrollAnimation animateIn='fadeInBottom' animateOnce={true}>
                <h2>Unique Bags with Refind City Style</h2> 
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInBottom' delay={100} animateOnce={true}>
                  <small>Premium Material from Top to Bottom</small>
                </ScrollAnimation>
                </div>
               
              </div>
            </div>
            </div>
        </div>
      </section>
       {/* End Video Section */}
{/* Exclusive section */}

<section id="Exclusive-Section" className="mt-3">
        <div className="container">
          {/* Exclusive services */}
          <div className="row h-100 g-0">
            <div className="col-md-6">
              <div className="bg-300 p-4 h-100 d-flex flex-column justify-content-center">
                <h4 className="text-800">Exclusive collection 2021</h4>
                <ScrollAnimation animateIn='fadeInBottom' animateOnce={true}> <h1 className="fw-semi-bold">Be exclusive</h1></ScrollAnimation>
                <ScrollAnimation animateIn='fadeInBottom' delay={100} animateOnce={true}><p className="mb-5">The best everyday option in a Super Saver range within a reasonable price. It is our responsibility&nbsp;to keep you 100 percent stylish. Be smart &amp; , trendy with us.</p></ScrollAnimation>
                <ScrollAnimation animateIn='fadeInBottom' delay={100} animateOnce={true}><div className="d-grid gap-2 d-md-block"><Link to="/AboutUs" className="discover-more" role="button"><span className="px-1">+</span> Discover More</Link></div></ScrollAnimation>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-span h-100 text-white"> <img src={exclusive} className="card-img h-100" alt="img not found"/>
                <div className="card-img-overlay bg-dark-gradient">
                  <div className="d-flex align-items-end justify-content-center h-100 fadeInBottom"> <ScrollAnimation animateIn='fadeIn'><Link to="/AboutUs" className="btn btn-lg text-light fs-1" role="button">Bags
                      <svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"> </path>
                      </svg></Link></ScrollAnimation>
                    </div>
                </div>
              </div>
            </div>
          </div>
          {/*End  Exclusive services */}

          {/* Product services */}
          <div className="row h-100 g-2 py-1 prod-cat">
            <div className="col-md-4">
              <div className="card card-span"> 
                <video src={stamp} muted autoPlay loop preLoad="auto" alt="video not loaded"/>
                </div>
               <div className="cat-caption pt-3 ">
               <ScrollAnimation animateIn='fadeInBottom' animateOnce={true}><h4>PERSONALIZATION</h4></ScrollAnimation>
               <ScrollAnimation animateIn='fadeInBottom' delay={100} animateOnce={true}><p>Emboss select bags, luggage, belts, leather accessories, and items from the pet’s collection with initials to create a truly unique piece.</p></ScrollAnimation>
               <ScrollAnimation animateIn='fadeInBottom' delay={100} animateOnce={true}> <Link to="/AboutUs">Explore the Collection</Link></ScrollAnimation>
               </div>
            </div>

            <div className="col-md-4">
              <div className="card card-span"> 
              <video src={packaging} autoPlay muted loop preLoad="auto" alt="video not loaded"/>
                </div>
               <div className="cat-caption pt-3">
               <ScrollAnimation animateIn='fadeInBottom' animateOnce={true}> <h4 className='fadeInBottom'>PACKAGING</h4></ScrollAnimation>
               <ScrollAnimation animateIn='fadeInBottom' delay={100} animateOnce={true}><p className='fadeInBottom1'>Choose between our online exclusive tote, boutique shopping bag or minimalist packaging choices to give your order the perfect finish.</p></ScrollAnimation>
               <ScrollAnimation animateIn='fadeInBottom' delay={100} animateOnce={true}><Link to="/AboutUs">Explore Our packaging</Link></ScrollAnimation>
               </div>
            </div>
            <div className="col-md-4">
              <div className="card card-span"> 
              <video src={collect} autoPlay muted loop preLoad="auto" alt="video not loaded"/>
                </div>
               <div className="cat-caption pt-3">
               <ScrollAnimation animateIn='fadeInBottom' animateOnce={true}><h4 className='fadeInBottom'>COLLECT AT YOUR DOORSTEP</h4></ScrollAnimation>
               <ScrollAnimation animateIn='fadeInBottom' delay={100} animateOnce={true}><p className='fadeInBottom1'>Order online and collect your order from your preferred Gucci boutique.</p></ScrollAnimation>
               <ScrollAnimation animateIn='fadeInBottom' delay={100} animateOnce={true}> <Link to="/AboutUs">Discover How</Link></ScrollAnimation>
               </div>
            </div>
           
         </div>
          {/* End Product services */}

        </div>
</section>

{/* Newsletter */}
<section id="newsletter-block" className="mt-5">
  <img className="left-image-popup fade-in lazyloaded" src="https://cdn.shopify.com/s/files/1/0653/3919/files/Harber-London-1-min.jpg?v=1606846159" alt='img not found'/>
  <img className="right-image-popup fade-in lazyloaded" src="https://cdn.shopify.com/s/files/1/0653/3919/files/Harber-London-2-min.jpg?v=1606846159" alt='img not found' />
  <img className="right-image-popup-mobile lazyload fade-in" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt='img not found' />
  <div className="content-news">
    <div className="header-text-news">
    <ScrollAnimation animateIn='fadeInBottom' animateOnce={true}> <h3 className="text-top fadeInBottom">Be the first to get the latest news about trends, promotions, and much more! DON’T MISS OUT NEW RELEASES &amp; SUBSCRIBER EXCLUSIVES.</h3></ScrollAnimation>
    <ScrollAnimation animateIn='fadeInBottom' animateOnce={true}><p className="text fadeInBottom1">We won’t spam you, that’s a promise.</p></ScrollAnimation>
    <ScrollAnimation animateIn='fadeInBottom' delay={1000} animateOnce={true}>
      <div className="offer-email fadeInBottom1">
          <form  id="newsletter-footer" accept-charset="UTF-8" className="contact-form">
            <input type="hidden" name="form_type" value="customer"/><input type="hidden" name="utf8" value="✓"/>
            <input type="hidden" name="contact[tags]" value="prospect, newsletter, email subscribe, footer"/>
            <div className="input-row">
              <div className="input-wrapper">
                <input type="email" name="contact[email]" id="email" placeholder="email@example.com" className="input-group-field" required=""/>
              </div>
              <div class="button-wrapper">
                <button type="submit" id="subscribe" className="btn">Submit</button>
              </div>
            </div>
          </form>
      </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeInBottom' delay={100} animateOnce={true}>
      <div className="bottom-text-news fadeInBottom1">
        <p>You are signing up to receive product updates and newsletters, By signing up, you are consenting to our <Link to="https://www.harberlondon.com/pages/privacy-policy" rel="nofollow">privacy policy</Link> but you can opt out at any time.</p>
      </div>
      </ScrollAnimation>
    </div>
  </div>
</section>

<Footer></Footer>
    </>
)
}

export default Home;