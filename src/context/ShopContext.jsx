import { createContext, /* useEffect, */ useState } from "react";
import PropTypes from "prop-types";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;

  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchField, setShowSearchField] = useState(false);
  const [cartItems, setCartItems] = useState({});

  async function addToCart(itemID, size) {
    if (!size) {
      toast.error("Please select a size!");
      return;
    }

    // Create a copy of cartItems
    let cartData = structuredClone(cartItems);
    // Check if the product is already in the cart
    if (cartData[itemID]) {
      // If product is in the cart, check if the size is already in the cart
      if (cartData[itemID][size]) {
        // If the size is already in the cart, increment the quantity
        cartData[itemID][size] += 1;
      } else {
        cartData[itemID][size] = 1;
      }
    } else {
      // If the product is not in the cart, add the product to the cart
      cartData[itemID] = {};
      cartData[itemID][size] = 1;
    }
    // Update the cartItems state
    setCartItems(cartData);
  }

  function getCartCount() {
    let totalItemCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalItemCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalItemCount;
  }

  async function updateCartQuantity(itemID, size, quantity) {
    // Update the quantity of the product in the cart
    let cartData = structuredClone(cartItems);
    cartData[itemID][size] = quantity;
    setCartItems(cartData);
  }

  function getTotalCartAmount() {
    let totalCartAmount = 0;

    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCartAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log("Error:", error);
        }
      }
    }

    return totalCartAmount;
  }

  const value = {
    products,
    currency,
    deliveryFee,
    searchQuery,
    setSearchQuery,
    showSearchField,
    setShowSearchField,
    cartItems,
    addToCart,
    getCartCount,
    updateCartQuantity,
    getTotalCartAmount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
