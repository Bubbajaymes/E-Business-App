
import { createContext, useEffect, useState } from "react";
import { items } from "../assets/assets";
import { toast } from "react-toastify";
import Products from "../pages/Products";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = 'KSH';
    const delivery_fee = 20;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();


    const addToCart = async (itemId, type) => {
        if (!type) {
            toast.error('Please, Select Product Type');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][type]) {
                cartData[itemId][type] += 1;
            }
            else {
                cartData[itemId][type] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][type] = 1;
        }

        setCartItems(cartData);
    }
// Cart COunt 
    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]
                    }
                } catch (error) {
                    
                }
            }
            
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, type, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][type] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount =  () => {
        let totalAmount = 0;

        for(const itemKey in cartItems) {
            let itemInfo = items.find((product) => product._id === itemKey);
            for (const item in cartItems[itemKey]) {
                try {
                    if (cartItems[itemKey][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[itemKey][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }

    const value = {
        delivery_fee, currency, items, search, 
        setSearch, showSearch, setShowSearch, 
        cartItems, addToCart, getCartCount, 
        updateQuantity, getCartAmount, 
        navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
