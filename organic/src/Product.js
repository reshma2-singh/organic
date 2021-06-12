import React from 'react'
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux"
import {saveTodo} from './features/basketSlice'
import "./Product.css"
function Product({title,price,image,id,index}) {
    const dispatch = useDispatch()
    return (
        <div className="product">
            
        
            <h3>{title}</h3>
          
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            
            <img src = {image}  alt=""/>
            <button onClick={() =>dispatch(saveTodo({
                id:id,
                title:title,
                price : price,
                image:image,
                index:index
            }))}>add to basket</button>
            
            
            
            
        </div>
    )
}

export default Product
