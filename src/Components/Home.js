import React, { useEffect, useState } from "react";
import { axiosInstance } from "../axios";
import Card from "../resuesableCom/card";
import { Link, useNavigate } from "react-router-dom";
import LoadingBar from "../resuesableCom/LoadingBar";
import { useSelector } from "react-redux";
export default function Home() {
  const navigate = useNavigate();
  const [productsArr, productState] = useState([]);
  const [searchArr, searchState] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((res) => {
        let productsList = res.data.products.map((product) =>({
          ...product,isFav:false 
         }))
         productState(productsList)       
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axiosInstance
      .get("/products/search")
      .then((res) => {
        let productsList = res.data.products.map((product) =>({
         ...product,isFav:false 
        }))
        searchState(productsList)
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (id) => {
    navigate(`/productId/${id}`);
  };
  const handleChange = (e) => {
    let searchPro = [];
    productsArr.find((p) => {
      if (
        p.brand.toLowerCase().includes(e.target.value.toLowerCase()) == true
         ) {
        searchPro.push(p);
    }
    searchState([...searchPro]);
    
});
  };
  useSelector(state=>state.favourite)    

  return (
    <>
     <div className="container text-center">
     <input
        className="w-75 my-5 "
        style={{
          height: "50px",
        }}
        type="text"
        placeholder="Search by name"
        onInput={handleChange}
      />
     </div>
      {productsArr.length === 0 ? 
        <LoadingBar />
      : 
        <div className="container">
          {searchArr.length == 0 ? 
            <Card productsArr={productsArr} handleClick={handleClick} /> : 
            <Card productsArr={searchArr} handleClick={handleClick}  />
          }
        </div>
      }
    </>
  );
}
