import React from "react";
import shoes from './shoe.json';
import './App.css';
import { Link } from "react-router-dom";

export default function Product() {
  
 return(
   <div> 
     <h2 className="productchoose">Please Choose any Product</h2>
   <div className="shoeproduct">
  {Object.keys(shoes).map(shoekey =>{
    return(
      
      <Link to={`/Product/${shoekey}`} key={shoekey} className="link" >
      <h3>{shoes[shoekey].name}</h3>
      <img src= {shoes[shoekey].img} height={150} alt="showimage" ></img>
      </Link>
    );
  })
  }
  </div>
  </div>
 )
}
