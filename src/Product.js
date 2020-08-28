import React from "react";
import shoes from './shoe.json';
import './App.css';

export default function Product() {
  
 return(
   <div> 
     <h2 className="productchoose">Please Choose any Product</h2>
   <div className="shoeproduct">
  {Object.keys(shoes).map(key =>{
    return(
      <div key={key} >
      <h3>{shoes[key].name}</h3>
      <img src= {shoes[key].img} height={150} alt="showimage" ></img>
      </div>
    );
  })
  }
  </div>
  </div>
 )
}
