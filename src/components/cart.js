import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { deleteItems } from "../store/cartSlice";
export default function Cart() {
  const product = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cart = product?.map((product) => {
    return (
      <div
        className="col-md-12"
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
            <Button variant="danger" onClick={() => deletCart(product)}>
              Remove from Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  function deletCart(product) {
    dispatch(deleteItems(product));
  }
  // if (cart.length > 0) {
  //   return (
  //     <div className="container-fluid">
  //       <div className="row">{cart}</div>
  //     </div>
  //   );
  // } else {
  //   return <div style={{ padding: "50px" }}>Please Add Items</div>;
  // }
  return cart.length > 0 ? (
    <div className="container-fluid">
      <div className="row">{cart}</div>
    </div>
  ) : (
    <div style={{ padding: "50px" }}>Please Add Items</div>
  );
}
