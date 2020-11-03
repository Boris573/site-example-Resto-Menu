import React from 'react';
import { Link } from 'react-router-dom';

import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCard}) => {
    
    const {title, category, url, price} = menuItem;

    return (

        <li className="menu__item">
                <div className="menu__title">{title}</div>
                <Link className="link" to = {`/${menuItem.id}`}>
                <img className="menu__img" src={url} alt={title}></img>
                </Link>

                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button onClick={() => onAddToCard()} className="menu__btn">Add to cart</button>
        </li>
            
    )
}

export default MenuListItem;