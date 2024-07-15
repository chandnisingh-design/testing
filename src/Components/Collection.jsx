import React from "react";

import Navigation from "./Navigation";
import Footer from './Footer';
import Catlist from './CatList';
import Filter from './Filters';

import catimg from '../img/category.jpeg';
const Collections=()=>{
    return (
        <>
            <Navigation></Navigation>
            
            <section className="banner"><img src={catimg} alt="img not found"></img> <span>All new Collection</span></section>
            <section className="row categories w-100">
                <div className="col-6 half-col p-5">
                    <h1 className="pt-5"> THE BEST DEALS IN THIS SEASON</h1>
                    <h4>SHOP NEW ARRIVALS <span>+</span></h4>
                    <div className="cat-list">
                        <Catlist></Catlist>
                        <Catlist></Catlist>
                        <Catlist></Catlist>
                        <Catlist></Catlist>
                        <Catlist></Catlist>
                        <Catlist></Catlist>
                    </div>
                </div>

                <div className="col-6 p-5">
                    <Filter></Filter>
                <div className="cat-list">
                        <Catlist></Catlist>
                        <Catlist></Catlist>
                        <Catlist></Catlist>
                        <Catlist></Catlist>
                        <Catlist></Catlist>
                        <Catlist></Catlist>
                    </div>
                </div>

            </section>
            <Footer></Footer>
        </>
    )
}
export default Collections;