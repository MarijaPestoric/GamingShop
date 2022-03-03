import React from "react";
import { useState, useEffect } from "react";

import CartService from "../../services/cart.service";

import "./Products.css";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import Comment from "./Comment";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        title: "Keyboard 1",
        image: "../images/keyboard_1.jpg",
        old_price: "159.99",
        new_price: "129.99",
        shipping: "2",
        currency: "$",
        exp_date: "10-03-2022",
      },
      {
        id: 2,
        title: "Keyboard 2",
        image: "../images/keyboard_2.jpg",
        old_price: "79.99",
        new_price: "49.99",
        shipping: "4",
        currency: "$",
        exp_date: "10-03-2022",
      },
      {
        id: 3,
        title: "Mice 1",
        image: "../images/mice_1.jpg",
        old_price: "59.99",
        new_price: "39.99",
        shipping: "5.33",
        currency: "$",
        exp_date: "10-03-2022",
      },
      {
        id: 4,
        title: "Mice 2",
        image: "../images/mice_2.jpg",
        old_price: "59.99",
        new_price: "39.95559",
        shipping: "3.61",
        currency: "$",
        exp_date: "10-03-2022",
      },
    ];

    setProducts(products);
  }, []);

  function addProductToCart(product) {
    CartService.addCartProduct(product);
  }

  return (
    <div className="container_1">
      <Filter></Filter>
      <div className="row_1">
        {products.map((product) => (
          <ProductCard
            product={product}
            addProductToCart={addProductToCart}
            key={product.id}
          />
        ))}
      </div>
      <Comment></Comment>
    </div>
  );
}
