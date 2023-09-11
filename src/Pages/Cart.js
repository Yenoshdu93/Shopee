import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const navigation = useNavigate();
  const userDetails = useSelector((state) => state.cart.userDetails);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <div className="min-h-[100vh] w-full ">
      <h1 className="py-4 px-10 border-b text-4xl tracking-tighest">
        Shopping Cart
      </h1>
      {cart.length > 0 ? (
        <div className="lg:grid lg:grid-cols-4 gap-1">
          <div className="col-span-3">
            <div>
              {cart?.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    category={item.category}
                    price={item.price}
                    image={item.image}
                    quantity={item.quantity}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col space-y-10 p-4 bg-gray-100 rounded-md h-[50vh]">
            <div className="flex items-center ">
              <p className="text-xl tracking-wider font-semibold">
                Subtotal : ({getTotal().totalQuantity}) :
              </p>
              <p className="text-xl tracking-wider font-bold">
                Rs:{getTotal().totalPrice.toFixed(2)}
              </p>
            </div>
            <div className="hidden lg:flex self-center ">
              {userDetails ? (
                <button className="border px-10 py-2 bg-violet-400 text-white rounded-md">
                  Proceed to Pay
                </button>
              ) : (
                <button
                  disabled
                  className="border px-10 py-2 bg-violet-500 opacity-60 text-white rounded-md"
                >
                  Login to Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[80vh]">
          <div className="flex flex-col items-center justify-center h-[60vh] space-y-5">
            <p className="text-2xl">Your Cart is empty</p>
            <button
              onClick={() => navigation("/")}
              className="border px-8 py-2 bg-gray-300 rounded-md active:bg-white acitve:ring-1 active:ring-red-500"
            >
              Shop now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
