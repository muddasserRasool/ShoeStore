import React from "react";
import { useParams } from "react-router-dom";
import shoes from './shoe.json';


export default function ProductItem() {
  const { id } = useParams();
  const shoe = shoes[id]

  if (!shoe)
        return <h2>Product Not Found!</h2>
    return (
    <div>
      <h2 className="welcome"> This page is to view product in detail</h2>
    <div className="productitem">
      <h3>{shoes[id].name}</h3>
      <img src={shoes[id].img} height={450} alt="shoe"></img>
    </div>
    </div>

    )}