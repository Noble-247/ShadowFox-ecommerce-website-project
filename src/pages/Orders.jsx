import useTitle from "../customHooks/useTitle";
import { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const Orders = () => {
  useTitle("Orders | Xumia");

  const { products, currency } = useContext(ShopContext);

  function handleClick() {
    toast.info("This feature will be enabled soon. stay tuned 😊!");
  }

  return (
    <section className='border-t pt-10'>
      <div className='text-2xl'>
        <Title titleOne='MY' titleTwo='ORDERS' />
      </div>

      <div>
        {products.slice(1, 4).map((item) => (
          <div
            key={uuidv4()}
            className='py-4 border-t text-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4'
          >
            <div className='flex items-start gap-6 text-sm'>
              <img
                src={item.image[0]}
                alt='Product Image'
                className='w-16 sm:w-20'
              />
              <div>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                  <p className='text-lg'>
                    {currency} {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className='mt-2'>
                  Date <span className='text-gray-400'>26, January, 2025</span>
                </p>
              </div>
            </div>
            <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className='text-sm md:text-base'>Ready to ship</p>
              </div>
              <button
                onClick={handleClick}
                className='border px-4 py-2 text-sm font-medium rounded-sm'
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Orders;
