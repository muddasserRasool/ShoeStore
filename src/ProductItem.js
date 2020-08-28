import React from "react";
import { useParams } from "react-router-dom";
import shoes from './shoe.json';


export default function ProductItem() {
  const {id} = useParams()
  console.log(shoes[id])
    return (
    
    
    <h2> Welcome to ProductItem</h2>
    )}