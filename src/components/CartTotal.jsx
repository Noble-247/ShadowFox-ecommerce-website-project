import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, deliveryFee, getTotalCartAmount } = useContext(ShopContext);

  return (
    <section className='w-full'>
      <div className='text-2xl'>
        <Title titleOne='CART' titleTwo='TOTALS' />
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>
            {currency} {getTotalCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>
            {currency} {deliveryFee}.00
          </p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>
            <strong>Total</strong>
          </p>
          <p>
            <strong>
              {currency}
              {getTotalCartAmount() === 0
                ? 0
                : getTotalCartAmount() + deliveryFee}
              .00
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CartTotal;
