import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../resuesableCom/card'
import { useNavigate } from 'react-router-dom'

export default function FavouritesPage() {
    const navigate =useNavigate()
    const favouriteList =useSelector(state=>state.favourite)
    const handleClick = (id) => {
        navigate(`/productId/${id}`);
      };
  return (
    
       <Card productsArr={favouriteList} handleClick={handleClick}/>
    )
  
}

