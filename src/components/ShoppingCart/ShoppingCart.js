import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartService from "../../services/cart.service";
import "../Home/Home.css";
import "./ShoppingCart.css";
import ProductRow from "./ProductRow";
import React from "react";

function ShoppingCart() {
    const currency = "$";
    const [cartProducts, setCartProducts] = useState(CartService.getCartProducts());
    const [subtotal, setSubtotal] = useState();
    const [shipping, setShipping] = useState();
    const [total, setTotal] = useState();

    useEffect(() => {
        let computedSubtotal = 0;
        let computedShipping = 0;

        cartProducts.forEach(product => {
            computedSubtotal += +product.new_price;
            computedShipping += +product.shipping;
        });

        setSubtotal(computedSubtotal.toFixed(2));
        setShipping(computedShipping.toFixed(2));
        setTotal((computedSubtotal+computedShipping).toFixed(2));
    }, [cartProducts]);
    
    function removeProductFromCart(product) {
        CartService.removeCartProduct(product);
        setCartProducts(CartService.getCartProducts());
    }

  return cartProducts.length ? (
    <Container
      style={{
        textAlign: "left",
        backgroundColor: "#EDF2F4",
        overflow: "hidden",
        margin: "0",
        minWidth: "100%",
      }}
    >
      <Row lg="12" className="cart-container">
        <h2 className="cart-title">Shopping cart.</h2>
        <Col lg="9" md="12">
          {cartProducts.map((product) => (
            <React.Fragment key={product.id}>
              <ProductRow
                removeProductFromCart={removeProductFromCart}
                product={product}
              />
              <hr className="hr-cart-product"></hr>
            </React.Fragment>
          ))}
        </Col>
        <Col className="checkout-cart" lg="3" md="12" sm="12">
          <div>
            <h3 className="summary-title">ORDER SUMMARY</h3>
            <p>
              Subtotal:
              <strong className="cart-prices-summary">
                  {currency} {subtotal}
                </strong>
            </p>
            <p>
              Shipping:
              <strong className="cart-prices-summary">
                  {currency} {shipping}
            </strong>
            </p>
            <p style={{ fontWeight: "600" }}>
              ESTIMATED TOTAL:{" "}
              <strong className="cart-prices-summary">
                  {currency} {total}
                </strong>
            </p>
          </div>
          <Button className="btn-checkout" variant="dark" size="lg">
            <Link
              to="/checkout"
              style={{ color: "#EDF2F4", textDecoration: "none" }}
            >
              {" "}
              CHECKOUT NOW{" "}
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container
    style={{
      textAlign: "left",
      backgroundColor: "#EDF2F4",
      overflow: "hidden",
      margin: "0",
      minWidth: "100%",
    }}
  >
    <Row lg="12" className="cart-container">
      <h2 className="cart-title">Shopping cart.</h2>
        <h4 style={{marginBottom: '1rem', padding: '0'}}>There are no products in your cart</h4> <Link to='/products' style={{ paddingLeft: '0', marginTop: '2rem'}}><Button className="btn-shop" variant="dark" size="lg" >
                    GO SHOPPING
                </Button></Link>
      </Row>
      </Container>
  );
}

export default ShoppingCart;
