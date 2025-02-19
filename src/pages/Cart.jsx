import useTitle from "../customHooks/useTitle";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { IoTrashBinSharp } from "react-icons/io5";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  useTitle("Cart | Xumia");

  const { products, currency, cartItems, updateCartQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const temporaryData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          temporaryData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    console.table(temporaryData);
    setCartData(temporaryData);
  }, [cartItems]);

  if (cartData.length === 0) {
    return (
      <section className='border-t pt-14'>
        <div className='text-2xl mb-3'>
          <Title titleOne='YOUR' titleTwo='CART' />
        </div>
        <p className='text-center text-gray-700 text-[24px]'>
          Your cart is empty
        </p>
      </section>
    );
  }

  return (
    <section className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title titleOne='YOUR' titleTwo='CART' />
      </div>

      <div className=''>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className='py-4 border-t text-gray-700 grid grid-cols-1 sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
            >
              <div className='flex items-start gap-6'>
                <img
                  src={productData.image[0]}
                  alt='Product image'
                  className='w-16 sm:w-20'
                />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>
                    {productData.name}
                  </p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p className='text-xs sm:text-lg font-medium'>
                      {currency}
                      {productData.price}
                    </p>
                    <p className='text-xs sm:text-lg font-medium'>
                      Size: {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(event) =>
                  event.target.value === "" || event.target.value === "0"
                    ? null
                    : updateCartQuantity(
                        item._id,
                        item.size,
                        Number(event.target.value)
                      )
                }
                type='number'
                name='itemQuantity'
                min={1}
                defaultValue={item.quantity}
                className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
              />
              <IoTrashBinSharp
                onClick={() => updateCartQuantity(item._id, item.size, 0)}
                className='cursor-pointer text-[20px]'
              />
            </div>
          );
        })}
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button
              onClick={() => navigate("/place-order")}
              className='bg-red-900 hover:bg-red-700 rounded-md text-white text-sm my-8 px-8 py-3'
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
