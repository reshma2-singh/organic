import React from 'react'
import {useSelector} from "react-redux"
import {selectBasket} from './features/basketSlice'

import {saveTodo} from './features/basketSlice'


import CheckoutProduct from "./CheckoutProduct"
import Home from "./Home"


function Checkout({image}) {
    const basket = useSelector(selectBasket)
    return (
        <>
        <div className="parent">
        <div className="left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket.length===0?(<h1 className="bkt">Your Amazon Basket is empty</h1>
):(<h3>{basket.map(item =>(<CheckoutProduct
            id= {item.id}
            title = {item.title}
            image = {item.image}
            price = {item.price}
            
            
            />


        ))}</h3>)  }
         </div>
        <div className="right">
        
        </div>
    
    
       
        </div>
        </>
    )
}

export default Checkout