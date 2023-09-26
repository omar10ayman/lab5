import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { axiosInstance } from '../axios'
import EachImg from '../resuesableCom/EachImg'
import LoadingBar from '../resuesableCom/LoadingBar'
export default function Product() {
   const {id} =useParams()
   const [product,setProduct]=useState({})
   const [productImg,setImg]=useState([])
   useEffect(() => {
    axiosInstance.get(`/products/${id}`).then(res=>{ 
        setProduct(res.data)
        }).catch(err=>console.log(err))
},[id])
  return (
   product=={} ?  <LoadingBar/>:
 <div className='container flex-column d-flex justify-content-center align-items-center text-center my-4'>
 <div className="card mb-3 w-75">
     <div className='w-100 ' style={{
          backgroundImage:`url(${product?.thumbnail})`,
          backgroundPosition:"center center",
          backgroundSize:"contain",
          backgroundRepeat:"no-repeat",
          height:"264px"
     }}/>
         <div className=' d-flex justify-content-center gap-5' >
            
            {product.images &&   
             <>
             <EachImg img={product?.images[0]}/>
             <EachImg img={product?.images[1]}/>
             <EachImg img={product?.images[2]}/>
             </>}
          
     </div>

<div className="card-body">
<h5 className="card-title">Title : {product.title}</h5>
<h5 className="card-title">Name : {product.brand}</h5>
<h5 className="card-title">Category : {product.category}</h5>
</div>
</div>

</div>
  )
}
