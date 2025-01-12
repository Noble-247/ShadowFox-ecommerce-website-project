import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const bestSellerProducts = products.filter((item) => {
        return item.bestseller === true;
      });

      setBestSeller(bestSellerProducts.slice(0, 5));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title titleOne='BEST' titleTwo='SELLERS' />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Discover the best selling products in our store. From chic apparel to
          must-have accessories, our best sellers are designed to keep you ahead
          of the fashion curve. Shop now and elevate your wardrobe with our
          curated selection of contemporary pieces.
        </p>
      </div>
      {/* Render the bestSeller products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSeller.length > 0 ? (
          bestSeller.map((item) => (
            <ProductItem
              key={uuidv4()}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            No best seller products available.
          </p>
        )}
      </div>
    </section>
  );
};

export default BestSeller;
