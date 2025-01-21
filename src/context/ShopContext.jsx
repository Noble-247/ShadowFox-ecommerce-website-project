import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;

  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchField, setShowSearchField] = useState(false);

  const value = {
    products,
    currency,
    deliveryFee,
    searchQuery,
    setSearchQuery,
    showSearchField,
    setShowSearchField,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
