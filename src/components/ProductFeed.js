import { useEffect, useState } from "react";
import { data } from "../assets/data";
import { Product } from "./Product";
import Items from "./Items";

const ProductFeed = ({ items }) => {
  const [item, setData] = useState(null);

  useEffect(() => {
    setData(data);
  }, []);
  return (
    <div className="h-full w-full">
      <div className="my-2">
        <h1 className="sm:text-2xl lg:text-5xl text-[#e14e4f] text-center p-4 uppercase">
          Cupouns Corner
        </h1>
        <div className="w-full sm:flex sm:flex-col lg:flex  px-10 gap-2">
          <div
            className="sm:text- flex flex-col items-start bg-[#e14e4f] w-full px-10  py-2 cursor-pointer rounded-md text-white
          "
          >
            <p className="text-xl">Flat</p>
            <p className="sm:2xl lg:text-3xl">100 OFF </p>
            <p className="text-3xl">ON ALL PRODUCTS</p>
          </div>
          <div className="flex flex-col items-start bg-[#e14e4f] w-full  px-10  py-2 cursor-pointer rounded-md text-white">
            <p className="text-xl">Flat</p>
            <p className="sm:text-2xl lg:text-3xl">100 OFF </p>
            <p className="text-3xl">ON ALL PRODUCTS</p>
          </div>
        </div>
        <div className="bg-[#c74715] w-full mt-1 font-libre">
          <h1 className="text-white text-2xl text-center py-4"> OMG DEALS</h1>
        </div>
      </div>
      {/* ProductsFeed */}
      <div className="grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {item?.map((item) => {
          return (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
            />
          );
        })}
      </div>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mt-1">
        {items?.map((item) => (
          <Items
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductFeed;
