import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useSelector} from "react-redux"
import {selectBasket} from './features/basketSlice'
import {Link} from "react-router-dom"


function Header() {
    const basket = useSelector(selectBasket)
    return (
        <div className="header">
            <img className="img1" src="2.png" alt="im"/>
            
            <img className="img2" src="3.png" alt="img"/>
            <h2 className="txt">india</h2>
            <div  className="header__search">
            <input type="text" className="header__searchInput"/>
            < SearchIcon className="header__searchIcon"/>
            </div>
            <Link to ="/" className="header__link">
            <div className="header__option">
            <span className="header__optionLineOne">HOME</span>
            </div>
            </Link>
            <Link to ="/home" className="header__link">
            <div className="header__option">  
            <span className="header__optionLineOne">PRODUCTS</span> 
            </div>
            </Link>
            <Link to ="/checkout" className="header__link">
            <div className="header__optionBasket">
           <ShoppingCartIcon/>
           < span className="header__optionLineTwo header__basketCount">{basket.length}</span> 
           </div>
           </Link>
    
        </div>
    )
}

export default Header
