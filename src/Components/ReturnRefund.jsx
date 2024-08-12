import React from 'react';

import Navigation from './Navigation';
import catimg from '../img/category.jpeg';
import Footer from './Footer';



const ReturnRefund=()=>{
    return(
        <>
         <Navigation></Navigation>
            <section className="banner"><img src={catimg} alt="img not found"></img> <span>Return & Refund Policy</span></section>
           <div className='Return-Refund-policy container p-5 mt-5 bg-white'>
            <section>
                <ul>
                    <li>
                    We are committed to make your shopping experience as fuss-free and enjoyable as much as possible! Please read through the following terms & conditions prior to making a purchase.
                    </li>
                    <li>
                    aking a purchase indicates that you have acknowledged, understood, and agree to adhere to the following terms and conditions.
                    </li>
                    <li>Products that are on sale or discounted, or purchased with a coupon or gift voucher are not eligible for returns, refund or exchange. Please go through the size chart carefully for on-sale products.</li>
                    <li>In case the product is damaged, we request you to get in touch with us with the next 48 hours to start processing the cancellation or return. We will require a box opening video and photo of the same in order to process the request.</li>
                    <li>There are some items that are Made to order (Lehenga & Sarees) which are not eligible for returns, cancellation or exchange.</li>
                </ul>
               <h3>RETURNS & EXCHANGES</h3>
               <ul>
                <li>What is the Exchange policy on Bunaai ?</li>
                <p>As a company policy we do not provide refund/return on any product once sold. Once the Bunaai pieces are sold they can be exchanged for replacement in a bigger or a smaller size (provided the aforementioned terms and conditions are met). Customer will be issued a credit note, in case the desired size of the product is not in stock.</p>
              <p>If the product is not from sale section & eligible for size exchange, you may write to us at orders@bunaai.com within 2 working days or 48 working hours of delivery to request an exchange.</p>
              <p>Once acknowledged by the Bunaai team during next working day, please send the product back to us yourself, we do not have a reverse pickup facility for now. Please do not forget to take acknowledgement receipt from the courier person about the number of products you are dispatching with his signature and mobile number. Bunaai will not be responsible for any lost shipment.</p>
              <p>The cost of return shipping is at the customer’s expense and is non-refundable. We recommend returning items through traceable mail.</p>
              <span><span data-mce-style="color: #ba2b0e;"><b><span class="pink">Artssy Fashion Pvt Ltd<br></br>3rd Floor, B 29-30, B 39-40, <br></br>22 Godam Cir, Industrial Area, <br></br>Hawa Sadak, Sharma Colony, <br></br>Ashok Nagar, Jaipur, Rajasthan <br></br>302001</span></b></span></span>
              
              <ol>
    <li>Exchange can be done within 7 days from the date of delivery</li>
    <li>Only products which are unused, unworn, unwashed, undamaged, with all its labels and tags completely intact, in original packaging and eligible for exchange.</li>
    <li>Please mention your name, address, number, email and order id on the parcel along with the size needed.</li>
    <li>Please do note, that exchange is allowed once per order.</li>
    <li>Size exchange is available (in case of size exchange, the customer is eligible to get a bigger or smaller size, equal to the amount of the exchanged product minus the shipping/COD cost of to & fro).</li>
    <li> Store credit equalling the amount of the exchanged product minus the shipping/COD cost of to & fro with a validity of 30 days from the date of receipt of store credit.</li>
    <li>The cost of shipping to & fro (reverse pickup as well as shipping charges) for the product is to be borne by you.</li>
</ol>
        <li>Can I cancel my order ?</li>
        <p>
        Prepaid orders are not eligible for cancellation. 

You can cancel your Cash on Delivery order within 24 hours of order. Please call us on 0141-6652270 or write to us at orders@bunaai.com to request a cancellation.

The customer agrees not to dispute the decision made by Bunaai and accepts that Bunaai’s decision regarding the cancellation.
        </p>
               </ul>

<h3>INTERNATIONAL SHIPPING AND RETURNS</h3>
<ul>
    <li>Which countries does Bunaai ship to?</li>
    <p>Bunaai ships worldwide.</p>
    <li>What are the international shipping costs and duties?</li>
    <p>Shipping is FREE worldwide.

    Please note that custom duties and taxes will be charged at the time of delivery based on actual duties charged by your country of delivery address.</p>
<li>Can I return, exchange or cancel an international order?</li>
<p>Please note that international orders are not eligible for returns/cancellations or exchanges. For tracking please email us on orders@bunaai.com</p>
</ul>
    </section>
            </div>
           <Footer></Footer>
        </>
    )
}

export default ReturnRefund;