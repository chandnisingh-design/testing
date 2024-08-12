import React from 'react';

import Navigation from './Navigation';
import catimg from '../img/category.jpeg';
import Footer from './Footer';
import {Link} from "react-router-dom";


const MyAccount=()=>{
    const openCity=(evt, cityName)=> {
        // var i, tabcontent, tablinks;
       var tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        var tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }

    return(
        <>
         <Navigation></Navigation>
            <section className="banner"><img src={catimg} alt="img not found"></img> <span>My Account</span></section>
            <section className="myAcc container mt-5">
                <div className="tab">
                    <button className="tablinks active" onClick={(e) => openCity(e, 'Orders')}>My Orders</button>
                    <button className="tablinks" onClick={(e)=>openCity(e, 'Address')}>All Address</button>
                </div>

                <div id="Orders" className="tabcontent active" >
                <h3>My All Past Orders</h3>
                <table className='w-100'>
                    <tr className='tableHead'>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Payment Status</th>
                        <th>Fulfill Status</th>
                        <th>Total Amount</th>
                        <th>Action</th>
                    </tr>
                    <tr className='tableRow'>
                        <td className='ordersList'>Schamada385052</td>
                        <td className='dateList'>30/July/2024</td>
                        <td className='paymentStatus'><span>Pain</span></td>
                        <td className='fulfilment'>FulFilled</td>
                        <td className='totalAmount'>4000 INR</td>
                        <td className='actionList'><button type='button'>ReOrder</button></td>
                        
                    </tr>

                    <tr className='tableRow'>
                        <td className='ordersList'>Schamada385052</td>
                        <td className='dateList'>30/July/2024</td>
                        <td className='paymentStatus'><span>Pain</span></td>
                        <td className='fulfilment'>FulFilled</td>
                        <td className='totalAmount'>4000 INR</td>
                        <td className='actionList'><button type='button'>ReOrder</button></td>
                        
                    </tr>

                    <tr className='tableRow'>
                        <td className='ordersList'>Schamada485652</td>
                        <td className='dateList'>31/July/2024</td>
                        <td className='paymentStatus'><span>Pain</span></td>
                        <td className='fulfilment'>FulFilled</td>
                        <td className='totalAmount'>3500 INR</td>
                        <td className='actionList'><button type='button'>ReOrder</button></td>
                        
                    </tr>

                    <tr className='tableRow'>
                        <td className='ordersList'>Schamada883752</td>
                        <td className='dateList'>10/July/2024</td>
                        <td className='paymentStatus'><span>Pain</span></td>
                        <td className='fulfilment'>FulFilled</td>
                        <td className='totalAmount'>2500 INR</td>
                        <td className='actionList'><button type='button'>ReOrder</button></td>
                        
                    </tr>
                    
                </table>

                </div>

                <div id="Address" className="tabcontent">
                    <h3> All Saved Address</h3>
                <div className='d-flex py-2'>
                <div className="card p-0">
                    <div className="card-body p-0">
                        <h5 className="card-title p-3">Address 1</h5>
                        <div className="card-text p-3">
                            <p className='addName'>Chandni Singh</p>
                            <p className='fullAdd'>sector-130 Noida</p>
                            <p className='pinCity'>201304 Noida UP</p>
                            <p className='addCountry'>India</p>
                        </div>
                        <div className='card-footer'>
                            <Link to=""><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                            <Link to=""><i class="fa fa-trash" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>

                {/* Add new Address */}
                <div className="card AddAddress">
                    <div className="card-body">
                        <div className="card-text">
                           <Link to="">
                            <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                            <p>Add New Address</p>
                           </Link>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </section>
           <Footer></Footer>
        </>
    )
}

export default MyAccount;