import React from 'react'

import Product from "./Product"

function Home() {
    return (
        <div className="home">
             <div className="home__row">
          <Product
            id="12321341"
            title="Organic India:chilli Powder"
            price={11.96}
            rating={5}
            image="p1.jpg"
          />
          <Product
            id="49538094"
            title="Organic India :moong sabut"
            price={40.0}
            rating={4}
            image="p2.jpg"
          />
        </div>
        <div className="home__row">
          <Product
          id="4903850"
          title="Organic India:Jaggery Powder"
          price={19.99}
          rating={3}
          image="p3.jpg"
        />
        <Product
            id="23445930"
            title="Organic India:methi seeds"
            price={30.99}
            rating={5}
            image="p4.jpg"
          />
          

        </div>
        </div>
    )
}

export default Home
