import React from 'react'
import {Link} from "react-router-dom";

import women from '../img/women.jpg';


const Catlist =()=>{
    return(
        <>
        <div className='wrapper d-flex my-5'>
            <div className='catimg'>
                <img src={women} alt='img not found'></img>

            </div>
            <div className='cat-cont'>
                <h3>Product 1</h3>
                <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                <div className='price'>$17.00</div>
            </div>
            <div className='wishlist-adtocart'>
            <ul className="d-flex">
                <li className="px-2">
                  <Link className="" href="/wishlist">
                  <i className="fa fa-heart-o" aria-hidden="true"></i></Link>
                </li>
                <li className="px-2">
                  <Link className="" href="/profile">
                  <i className="fa fa-cart-plus" aria-hidden="true"></i></Link>
                </li>
            </ul>
            </div>
        </div>
        </>
    )
}
export default Catlist;