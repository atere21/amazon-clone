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
          <Product 
          id="123456"
          title='Computers & Accessories' 
          price={29.99} 
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
          rating={6}/>
          <Product
          id="123457"
          title='Dresses' 
          price={29.99} 
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
          rating={3}/>
          
          <Product
          id="123458"
          title='Easy Returns' 
          price={29.99} 
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg"
          rating={6}/>
           
          <Product 
          id="123459"
          title='Get fit at home' 
          price={29.99} 
          image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
          rating={2}/>
        </div>
        <div className="home__row">
          <Product
           id="123459"
           title='Shop Laptops & Tablets' 
           price={29.99} 
           image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
           rating={2}/>
          <Product 
          id="123459"
          title='Create with strip lights' 
          price={29.99} 
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
          rating={2}/>
          <Product 
          id="123459"
          title='For your Fitness Needs' 
          price={29.99} 
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
          rating={2}/>
          
          <Product 
          id="123459"
          title='New arrivals in Toys' 
          price={29.99} 
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"
          rating={2}/>

        </div>
        <div className="home__row"><Product 
        id="123459"
        title='Get fit at home' 
        price={29.99} 
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
        rating={2}/>
        </div>
        <div className="home__row"><Product 
        id="123459"
        title='Get fit at home' 
        price={29.99} 
        image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
        rating={2}/></div>
        <div className="home__row">
         <Product
         id="123459"
         title='Decorate for Halloween' 
         price={29.99} 
         image="https://images-na.ssl-images-amazon.com/images/G/01/home/kariep/Halloween21/Handmade-379x304._SY304_CB609394695_.jpg"
         rating={2} />
          <Product
          id="123459"
          title='Statement boots for you' 
          price={29.99} 
          image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/WIN_22/GW/PWPS/DCC_JAN_PS_W_01_1x._SY304_CB649620864_.jpg"
          rating={12} />
          <Product 
          id="123459"
          title='Fashion favorites for Fall' 
          price={29.99} 
          image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/WIN_22/GW/PWPS/DCC_FEB_PS_M_02_1x._SY304_CB647593327_.jpg"
          rating={5}/>
          <Product 
          id="123459"
          title='' 
          price={29.99} 
          image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
          rating={8}/>
        </div>
        <div className="home__row"><Product 
        id="123459"
        title='Get fit at home' 
        price={29.99} 
        image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SY200_.jpg"
        rating={4}/></div>
      </div>
    </div>
  );
}

export default Home;
