import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, useCallback } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoStarSharp } from "react-icons/io5";
import NotFound from "./NotFound";
import RelatedProducts from "../components/RelatedProducts";
import { SiTicktick } from "react-icons/si";
import useTitle from "../customHooks/useTitle";

const Product = () => {
  useTitle("Product | Xumia");

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [mainProductImage, setMainProductImage] = useState("");
  const [productSize, setProductSize] = useState("");

  // Get the product data from the products array
  const fetchProductData = useCallback(() => {
    const product = products.find((item) => item._id === productId);
    // console.log(product);
    // Check if product exists
    if (product) {
      setProductData(product);
      setMainProductImage(product.image[0]);
    }
  }, [productId, products]);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  return (
    <section>
      {productData ? (
        <article className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
          {/* Product Data */}
          <div className='flex flex-col sm:flex-row gap-12 sm:gap-12'>
            {/* Product Image */}
            <div className='flex flex-col-reverse sm:flex-row flex-1 gap-3'>
              <div className='flex sm:flex-col overflow-x-auto justify-between sm:justify-normal w-full sm:w-[10%]'>
                {productData.image.map((item, index) => (
                  <img
                    onClick={() => setMainProductImage(item)}
                    src={item}
                    key={index}
                    alt='Product Image'
                    className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                  />
                ))}
              </div>
              <div className='w-full sm:w-[45%]'>
                <img
                  src={mainProductImage}
                  alt='Product Image'
                  className='w-full h-auto'
                />
              </div>
            </div>

            {/* Product Details */}
            <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>
                {productData.name}
              </h1>
              <div className='flex items-center gap-1 mt-2'>
                <IoStarSharp className='text-yellow-700' />
                <IoStarSharp className='text-yellow-700' />
                <IoStarSharp className='text-yellow-700' />
                <IoStarSharp className='text-yellow-700' />
                <IoStarSharp className='text-gray-400' />
                <p className='pl-2'>(120)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>
                {currency}
                {productData.price}
              </p>
              <p className='mt-5 text-gray-500'>
                <a className='hover:underline block' href='#full-Description'>
                  {productData.description.slice(0, 200)}.... See More
                </a>
              </p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {productData.sizes.map((item, index) => (
                    <button
                      onClick={() => setProductSize(item)}
                      className={`border py-2 px-4 bg-gray-300 rounded-md ${
                        productSize === item ? "border-red-900" : ""
                      }`}
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>{" "}
                <button
                  onClick={() => addToCart(productData._id, productSize)}
                  className='bg-red-900 text-white px-8 py-3 text-sm active:bg-red-700'
                >
                  ADD TO CART
                </button>
                <hr className='mt-5' />
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                  <p>
                    <SiTicktick className='inline-block mr-2' />
                    <span className='inline-block'>
                      100% original Product
                    </span>
                  </p>
                  <p>
                    <SiTicktick className='inline-block mr-2' />
                    <span className='inline-block'>
                      Free Delivery on order above $50
                    </span>
                  </p>
                  <p>
                    <SiTicktick className='inline-block mr-2' />
                    <span className='inline-block'>
                      Pay on delivery is available on this product
                    </span>
                  </p>
                  <p>
                    <SiTicktick className='inline-block mr-2' />
                    <span className='inline-block'>
                      Easy return and exchange policy within 7 days
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Production Description and Review Section */}
          <div className='mt-12'>
            <div className='flex'>
              <p className='font-extrabold border px-5 py-3 text-sm'>
                Description
              </p>
              <p className='border px-5 py-3 text-sm'>Reviews (120)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p id='full-Description'>{productData.description}</p>
            </div>
          </div>

          {/* Display Related Products */}
          <RelatedProducts
            category={productData.category}
            subCategory={productData.subCategory}
          />
        </article>
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default Product;
