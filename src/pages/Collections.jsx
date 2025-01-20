/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { BiChevronsUp } from "react-icons/bi";
import Title from "../components/Title";
import { v4 as uuidv4 } from "uuid";
import ProductItem from "../components/ProductItem";

const Collections = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFiter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  function toggleCategory(event) {
    if (category.includes(event.target.value)) {
      setCategory((previous) =>
        previous.filter((item) => item !== event.target.value)
      );
    } else {
      setCategory((previous) => [...previous, event.target.value]);
    }
  }

  function toggleSubCategory(event) {
    if (subCategory.includes(event.target.value)) {
      setSubCategory((previous) =>
        previous.filter((item) => item !== event.target.value)
      );
    } else {
      setSubCategory((previous) => [...previous, event.target.value]);
    }
  }

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    console.log(category, subCategory);
  }, [category, subCategory]);

  return (
    <main className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options - (Left Side) */}
      <section className='min-w-60'>
        <p
          onClick={() => setShowFiter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS{" "}
          <BiChevronsUp
            className={`sm:hidden animate-pulse ${
              showFilter === false ? "rotate-180" : ""
            }`}
          />
        </p>
        {/* Category Filters */}
        <div
          className={`border border-gray-300 rounded-sm pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input
                onChange={toggleCategory}
                type='checkbox'
                value={"Men"}
                className='w-3 checked:accent-red-900'
              />{" "}
              Men
            </label>
            <label className='flex gap-2'>
              <input
                onChange={toggleCategory}
                type='checkbox'
                value={"Women"}
                className='w-3 checked:accent-red-900'
              />{" "}
              Women
            </label>
            <label className='flex gap-2'>
              <input
                onChange={toggleCategory}
                type='checkbox'
                value={"Kids"}
                className='w-3 checked:accent-red-900'
              />{" "}
              Kids
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 rounded-sm pl-5 py-3 my-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input
                onChange={toggleSubCategory}
                type='checkbox'
                value={"Topwear"}
                className='w-3 checked:accent-red-900'
              />{" "}
              Topwear
            </label>
            <label className='flex gap-2'>
              <input
                onChange={toggleSubCategory}
                type='checkbox'
                value={"Bottomwear"}
                className='w-3 checked:accent-red-900'
              />{" "}
              Bottomwear
            </label>
            <label className='flex gap-2'>
              <input
                onChange={toggleSubCategory}
                type='checkbox'
                value={"Winterwear"}
                className='w-3 checked:accent-red-900'
              />{" "}
              Winterwear
            </label>
          </div>
        </div>
      </section>

      {/* Collections - (Right Side) */}
      <section className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title titleOne='ALL' titleTwo='COLLECTIONS' />
          {/* Sort Products */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option className='hover:bg-red-900' value='relevance'>
              Sort by: Relevance
            </option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by High Low</option>
          </select>
        </div>

        {/* Render Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6'>
          {filterProducts.map((item) => (
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
    </main>
  );
};

export default Collections;
