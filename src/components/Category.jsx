import React from "react";
import { category } from "../Data";

const Category = () => {
  return (
    <>
      <section className="category" id="category">
        <h1 className="heading">
          our <span>category</span>
        </h1>
        <div className="box-container">
          {category.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" width="100" height="250" />
              <h3>Loream Lipsum</h3>
              <div className="price">
                $15.99 <span>20.99</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;
