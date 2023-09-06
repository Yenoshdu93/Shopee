import { useDispatch } from "react-redux";
import { addToCart } from "../app/cartSlice";

const Items = ({ id, title, description, category, price, image }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full ">
      <div className=" relative w-full flex flex-col justify-evenly bg-white p-10 rounded-md">
        <div className="self-center w-[8rem] h-[10rem]">
          <img className="w-full h-full" src={image} alt="" />
        </div>
        <p className=" absolute top-4 right-4 text-xs italic text-gray-800 ">
          {category}
        </p>
        <div className="mt-8 flex flex-col space-y-2">
          <p className="text-sm text-gray-700 font-semibold">
            {title.substring(0, 15)}...
          </p>
          <p className="text-xs text-gray-700 ">
            {description.substring(0, 150)}...
          </p>
          <p className="font-medium">
            &#8377; {price}
            <span className="text-xs text-red-500">sign up offer applies</span>
          </p>
        </div>
        <button
          onClick={() =>
            dispatch(
              addToCart({ id, title, description, category, price, image })
            )
          }
          className="text-white font-meidum bg-red-500 mt-4 py-2 rounded-md active:bg-red-600 active:ring active:ring-red-700"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
export default Items;
