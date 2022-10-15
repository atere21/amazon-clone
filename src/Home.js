import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
       <div className='home__container'>
          <img className='home__image'
           src='https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg' alt='home-img'></img>
       
        <div className='home__row'>
            <Product/>

            {/*product*/}
            {/*product*/}
            {/*product*/}
        </div>
        <div className='home__row'>
            {/*product*/}
            {/*product*/}
            {/*product*/}
            {/*product*/}
        
        </div>
        <div className='home__row'>
            {/*product*/}
        </div>
        <div className='home__row'>
            {/*product*/}
        </div>
        <div className='home__row'>
            {/*product*/}
            {/*product*/}
            {/*product*/}
            {/*product*/}
        
        </div>
        <div className='home__row'>
            {/*product*/}
        </div>
        </div>
    </div>
  );
}

export default Home