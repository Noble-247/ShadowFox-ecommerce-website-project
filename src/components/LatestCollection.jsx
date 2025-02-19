import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { v4 as uuidv4 } from "uuid";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  //console.table(products);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='my-10'>
      <div className='text-center py-8 text-2xl md:text-3xl'>
        <Title titleOne='LATEST' titleTwo='COLLECTIONS' />
        <p className='w-3/4 m-auto text-sm md:text-base text-gray-600'>
          Discover the latest trends and styles in our newest collection. Shop
          now and elevate your wardrobe with our curated selection of
          contemporary pieces.
        </p>
      </div>

      {/* Render Product Items */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.map((item) => (
          <ProductItem
            key={uuidv4()}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      <div className='text-center mt-8'>
        <Link
          to='/collections'
          className='inline-block px-6 py-2 text-gray-100 bg-red-900 hover:bg-red-700 rounded-md transition-colors'
        >
          See More <FaArrowRight className="inline"/>
        </Link>
      </div>
    </section>
  );
};

export default LatestCollection;
