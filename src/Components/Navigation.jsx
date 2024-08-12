import React, { useState, useEffect } from 'react';

import {Link, NavLink} from "react-router-dom";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import "animate.css/animate.compat.css"

const Navigation =()=>{
  // OpenSublist
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const openSubList = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };
  // Add transition for logo
  const [scrollY, setScrollY] = useState(0);
  const initialScale = 3.5; 
  const zoomThreshold = 90; 
  const initialMarginTop = 110;
  const zoomOutMarginTop = -25; 
  const zoomColor = "#000";
  const InitialColor= "#414447"

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scale = scrollY > zoomThreshold ? 0.8 : initialScale; 
  const marginTop = scrollY > zoomThreshold ? zoomOutMarginTop : initialMarginTop; // Adjust margin based on scroll
  const logocolor = scrollY > zoomThreshold ? zoomColor : InitialColor;

  // Add Scroll bg color after 150px
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return(
      <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top py-3 d-block backdrop shadow-transition ${
        isScrolled ? 'scroll' : ''
      }`}
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
       <div className="container">
       <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
       <div className='d-flex w-100 justify-content-start'>
          <div className='mt-4 mt-lg-0 d-flex'>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* <li className="nav-item px-2"><NavLink className="nav-link fw-medium" to="/Call">Call Us</NavLink></li> */}
                  <li className="nav-item px-2"><Link className="nav-link fw-medium" to="/wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>
                  <li className="nav-item px-2"><Link className="nav-link fw-medium" to="/profile"><i className="fa fa-user-o" aria-hidden="true"></i></Link></li>
                </ul>
                 <div className="search-container">
                    <div class="search-icon-btn">
                      <i class="fa fa-search"></i>
                    </div>
                    <div class="search-input">
                      <input type="search" class="search-bar" placeholder="Search..."/>
                    </div>
                  </div>
              </div>
        </div>

        <div className='d-flex justify-content-between'>
              <Link className="navbar-brand d-inline-flex p-0" to="/">
              {/* <span class="text-1000 fs-0 fw-bold ms-2">SCHAMDA</span> */}
              <h1 className="logo" style={{ transform: `scale(${scale})`, transition:'0.5s',  marginTop: `${marginTop}px`, color: `${logocolor}`}}>
                    SCHAMDA
                  </h1>
            </Link>
        </div>
        <div className='d-flex justify-content-end'>
          <div class="hamburger-menu pull-right">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
              <span></span>
            </label>
            <div className='menu__box'>
              <ul className="navbar-nav d-block">
                    <li className="nav-item px-2"><NavLink className="nav-link" to="/"><ArrowRightIcon></ArrowRightIcon> Home</NavLink></li>
                    <li className="nav-item px-2"><NavLink className="nav-link" to="/"><ArrowRightIcon></ArrowRightIcon> My Orders</NavLink></li>
                    <li className="nav-item px-2"><NavLink className="nav-link" to="/"><ArrowRightIcon></ArrowRightIcon> My Wish List</NavLink></li>
                    <li className="nav-item px-2"><NavLink className="nav-link" to="/AboutUs"><ArrowRightIcon></ArrowRightIcon> About Us</NavLink></li>
                    <li className="nav-item px-2"><NavLink className="nav-link" to="/Contact"><ArrowRightIcon></ArrowRightIcon> Contact Us</NavLink></li>
                    <li className="nav-item px-2"><NavLink className="nav-link" to="/Collections" onClick={openSubList}><ArrowRightIcon></ArrowRightIcon> Explore Collections</NavLink>
                    <ul className={`submenuList ${isSubmenuOpen ? 'open' : ''}`}>
                      <li><Link>All Collection</Link></li>
                      <li><Link>Whats New</Link></li>
                      <li><Link>Women</Link></li>
                      <li><Link>Men</Link></li>
                      <li><Link>Accessories</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item px-2"><NavLink className="nav-link" to="/Faq"><ArrowRightIcon></ArrowRightIcon> Lookout FAQ's</NavLink></li>
                    <li className="nav-item px-2"><NavLink className="nav-link" to="/MyAccount"><ArrowRightIcon></ArrowRightIcon> Manage Your Account</NavLink></li>
                    <li className="nav-item px-2"><NavLink className="nav-link sign-in" to="/Login"><ArrowRightIcon></ArrowRightIcon> Sign In</NavLink></li>
              </ul>
            </div>
           
           
          </div>
        </div>
        
        </div>
      </nav>
    )
}
export default Navigation;