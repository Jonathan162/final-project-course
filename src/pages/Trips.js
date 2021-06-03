
import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";
import {useState} from "react";
import ScrollTop from "../components/ScrollTop";
import ShopHeader from "../components/ShopHeader";
import Basket from "../components/Basket";
import ShopBody from "../components/ShopBody";
import data from "../data"
import "../cart.css";

const Trips = () => {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
        setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
          setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
      }
  };
    return (
        <TripLayout exit="exit" variants={pageAnimation} initial="hidden" 
        animate="show">
            <ShopHeader countCartItems = {cartItems.length} />
            <div className="row">
                <ShopBody onAdd={onAdd} products={products} />
                <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
            </div>
        <ScrollTop />
        </TripLayout>
    );
}; 

export default Trips;

const TripLayout = styled(motion.div)`
    min-height: 90vh;
    color: gray;
    background: #e0e0e0;
    padding-top: 3rem;
`