
import React from "react";


export default function ShopHeader (props) {
    const {countCartItems} = props;
    return (
        <div>
            <header className="row block-header center">
                <div>
                    <h1 className="header-shop">Our Trips</h1>
                </div>
                <div>
                    <a className="cart-title" href="#/cart">
                    Cart {' '}
                    {countCartItems ? (
                    <button className="badge">{countCartItems}</button>
                        ) : (
                        ''
                        )}
                    </a>
                </div>
            </header>
        </div>

    )
}; 