import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
          alt="home-img"
        ></img>

        <div className="home__row">
          <Product title='Get fit at home' 
          price={29.99} 
          image='https://images-na.ssl-images-amazon.com/
          images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg'
          rating={5}/>
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row"><Product /></div>
        <div className="home__row"><Product /></div>
        <div className="home__row">
         <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row"><Product /></div>
      </div>
    </div>
  );
}

export default Home;
