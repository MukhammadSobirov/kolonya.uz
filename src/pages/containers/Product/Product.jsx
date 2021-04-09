import React from "react";
import Button from "../../../components/Button/Button";

import bottleAndLemon from "../../../images/bootle and lemon.png";
import "./Product.css";

const Product = () => {
  return (
    <div className="container-product">
      <div className="content-box-product">
        <img src={bottleAndLemon} alt="bottle and a lemon" className='img-product'/>
        <div className="text-box-product">
          <h3 className="title-product">СВОЙСТВА</h3>
          <p className="paragraph-product">
            Каждый флакон пропитан ароматом и свежестью лимона. Благодаря своим
            антисептическим свойствам, Kolonya защищает вас и ваших близких от
            вирусов и микробов.
          </p>
          <Button text='Узнать больше'/>
        </div>
      </div>
    </div>
  );
};

export default Product;
