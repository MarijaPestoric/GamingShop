import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  render() {
    return (
      <section className="products_section">
        <div className="filter-control">
          <label for="search">Search products</label>
          <input type="text" name="search" id="search"></input>
        </div>
        <div className="filter-control">
          <label for="company">Category</label>
          <select className="filter-item" name="company" id="company">
            <option value="all">All</option>
            <option value="razer">RAZER</option>
            <option value="roccat">ROCCAT</option>
            <option value="redragon">REDRAGON</option>
            <option value="hyper">HYPER</option>
          </select>
          {/* <div className="filter-control">
            <label for="price">
              "product price: "<span>"$" </span>
            </label>
            <input
              className="filter-price"
              type="range"
              name="price"
              id="price"
              min="0"
              max="120"
            ></input>
          </div> */}
          <div class="filter-shipping">
            <label for="shipping">Free Shipping</label>
            <input
              className="shipping"
              type="checkbox"
              id="shipping"
              name="shipping"
            ></input>
          </div>
          <div class="filter-discount">
            <label for="discount">Discount</label>
            <input
              className="discount"
              type="checkbox"
              id="discount"
              name="discount"
            ></input>
          </div>
        </div>
      </section>
    );
  }
}

export default Filter;
