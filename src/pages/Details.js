import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Details.module.css";
import CheckoutBag from "../assets/CheckoutBag";
import BackArrow from "../assets/BackArrow";

const Details = () => {
  //! usePrams() url deki tum parametreleri getiriyor.
  const params = useParams();
  // console.log(params.productId);
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [params.productId]);
  
  const handleBack = () => {
    navigate(-1);
  };
  const handleCheckout = () => {
    navigate("/checkout");
  };
  // console.log(params.productId);
  return (
    <div>
      <div className={styles.detailsNav}>
        <BackArrow
          className={styles.detailsNavIcon}
          onClick={handleBack} />
        <h1>Details Page</h1>
        <CheckoutBag
          className={styles.detailsNavIcon}
          onClick={handleCheckout}
        />
      </div>
      <div className={styles.detailsWrapper}>
        <p>{product?.id}</p>
        <p>{product?.title}</p>
        <p>{product?.description}</p>
        <p>{product?.category}</p>
        <p>{product?.price}</p>
        <p>{product?.rating?.rate}</p>
        <p>{product?.rating?.count}</p>
        <img
          className={styles.detailsImage}
          src={product?.image}
          alt={product.title}
        />
      </div>
    </div>
  );
};

export default Details;
