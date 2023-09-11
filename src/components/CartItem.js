import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { useDispatch } from "react-redux";

import {
  decreateQuantity,
  increaseQuantity,
  removeItem,
} from "../app/cartSlice";

const CartItem = ({
  id,
  title,
  description,
  category,
  price,
  image,
  quantity,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full ">
      <div className="w-full h-full sm:flex sm:flex-col lg:grid lg:grid-cols-5 items-center border px-10 py-4">
        <div className="w-[8rem] h-[11rem]">
          <img className="w-full h-full" src={image} alt="img" />
        </div>
        <div className=" col-span-2 space-y-4 ">
          <p className="text-sm font-semibold tracking-wide">{title}</p>
          <p className="text-xs text-gray-600 tracking-wider">{description}</p>
          <p className="font-bold">Rs. {(price * quantity).toFixed(2)}</p>
          <div
            className="border
          w-[10rem] h-10 flex items-center justify-evenly "
          >
            <button
              onClick={() => dispatch(increaseQuantity(id))}
              className="border p-2 rounded-md hover:bg-gray-50  active:ring-1 active:ring-red-500"
            >
              <AiOutlinePlus />
            </button>
            <p className="text-center">{quantity}</p>
            <button
              onClick={() => dispatch(decreateQuantity(id))}
              className="border p-2 rounded-md hover:bg-gray-50  active:ring-1 active:ring-red-500"
            >
              <AiOutlineMinus />
            </button>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <button onClick={() => dispatch(removeItem(id))} className="">
            <BsTrash3 className="text-red-500  h-10 w-10 " />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
