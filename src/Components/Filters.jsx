import React from "react"

const Filter =()=>{
    return(
        <>
    <div classNameName="filter">
        <div className="dropdown">
            <button className="dropbtn">Categories</button>
            <div className="dropdown-content">
                <a href="#">All Items</a>
                <a href="#">Sling Bags for Women</a>
                <a href="#">Bags for Men</a>
                <a href="#">Wallets</a>
                <a href="#">Laptop Bags</a>
                <a href="#"></a>
            </div>
        </div>
        <div>
        <div className="dropdown">
            <button className="dropbtn">Sort By:</button>
            <div className="dropdown-content">
                <a href="#">All Items</a>
                <a href="#">Sling Bags for Women</a>
                <a href="#">Bags for Men</a>
                <a href="#">Wallets</a>
                <a href="#">Laptop Bags</a>
                <a href="#"></a>
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