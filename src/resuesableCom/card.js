import React from "react";
import img from "../images/icons8-heart-50.png";
import imgFill from "../images/icons8-heart-50 (1).png";
import { useDispatch } from "react-redux";

export default function Card({ handleClick, productsArr }) {
  const dipatch = useDispatch();
  const handleAddToFav = (e, product) => {
    if (product.isFav) {
      dipatch({ type: "REMOVE_FROM_FAV", payload: product });
      product.isFav = false;
    } else {
      dipatch({ type: "ADD_FAVORITE", payload: product });
      product.isFav = true;
    }
  };
  return (
    <>
      <div className="container gap-3 d-flex flex-wrap justify-content-center align-items-center ">
        {productsArr.map((product) => (
          <div className="position-relative " key={product.id}>
            <div
              onClick={(e) => handleAddToFav(e, product)}
              style={{
                backgroundImage:
                  product.isFav == false ? `url(${img})` : `url(${imgFill})`,
                width: "50px",
                height: "50px",
                position: "absolute",
                right: "0px",
                zIndex: "1",
              }}
            />
            <div
              className="col-3 card"
              onClick={() => handleClick(product.id)}
              style={{
                width: "18rem",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${product?.thumbnail})`,
                  backgroundPosition: "center center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  height: "300px",
                }}
                className="card-img-top rounded-3  mt-5"
              />
              <div className="card-body">
                <h5 className="card-title">Title : {product.title}</h5>
                <h5 className="card-title">Name : {product.brand}</h5>
                <h5 className="card-title">Category : {product.category}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
