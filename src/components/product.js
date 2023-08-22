import React from "react";
import { useState, useEffect } from "react";
// import {}
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import { apiStatus } from "./utils";
// import {  useSelector } from "react-redux/es/hooks/useSelector";
export default function Product() {
  // const [product, getProducts] = useState();
  const { data: product, status } = useSelector((state) => state.product);
  console.log(product, status);
  const dispatch = useDispatch();

  useEffect(() => {
    //API FETCHING
    // console.log(getProduct());
    console.log(status);
    dispatch(getProducts());
    console.log(status);
    // console.log(getProduct());
    // console.log(dispatch(getProduct()));
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
  }, []);

  function addCart(product) {
    dispatch(addItems(product));
  }
  if (status === apiStatus.Loading) {
    return <p>loading</p>;
  }
  if (status === apiStatus.Error) {
    return <p className="text-danger">404 Error</p>;
  }
  const cards = product?.map((product) => {
    return (
      <div
        className="col-md-3"
        key={product.id}
        style={{ marginBottom: "10px" }}
      >
        <Card style={{ width: "18rem" }} className="h-100">
          <div className="tect-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>Price: :{product.price} INR</Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: "white" }}>
            <Button variant="primary" onClick={() => addCart(product)}>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  console.log(status, "out");
  return <div className="row">{cards}</div>;
}
