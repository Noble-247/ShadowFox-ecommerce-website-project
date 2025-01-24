import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { v4 as uuidv4 } from "uuid";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let copyOfProducts = products.slice();

      copyOfProducts = copyOfProducts.filter(
        (item) => category === item.category && subCategory === item.subCategory
      );

      setRelatedProducts(copyOfProducts.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <section className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title titleOne='RELATED' titleTwo='PRODUCTS' />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {relatedProducts.map((item) => (
          <ProductItem
            key={uuidv4()}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};
RelatedProducts.propTypes = {
  category: PropTypes.string.isRequired,
  subCategory: PropTypes.string.isRequired,
};
export default RelatedProducts;
