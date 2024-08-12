import React from "react";
import {Link} from "react-router-dom";

const Filter =()=>{
    return(
        <>
    <div classNameName="filter">
        <div className="dropdown">
            <button className="dropbtn">Categories</button>
            <div className="dropdown-content">
                <Link to="#">All Items</Link>
                <Link to="#">Sling Bags for Women</Link>
                <Link to="#">Bags for Men</Link>
                <Link to="#">Wallets</Link>
                <Link to="#">Laptop Bags</Link>
                <Link to="#"></Link>
            </div>
        </div>
        <div>
        <div className="dropdown">
            <button className="dropbtn">Sort By:</button>
            <div className="dropdown-content">
                <Link to="#">All Items</Link>
                <Link to="#">Sling Bags for Women</Link>
                <Link to="#">Bags for Men</Link>
                <Link to="#">Wallets</Link>
                <Link to="#">Laptop Bags</Link>
                <Link to="#"></Link>
            </div>
        </div>
            <h3>Sort By:</h3>
            <select id="sortBy">
                <option value="name">Name</option>
                <option value="price">Price (Low to High)</option>
                <option value="-price">Price (High to Low)</option>
            </select>
         </div>
        </div>
    
        </>
    )
}
export default Filter;