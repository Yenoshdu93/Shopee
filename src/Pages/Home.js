import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

const Home = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const product = await res.json();
      setItems(product);
      console.log(product);
    };
    fetchdata();
  });
  return (
    <main className="bg-[#f5f5f6] overflow-hidden">
      <div className="w-full h-full">
        <Banner />
        <ProductFeed items={items} />
      </div>
    </main>
  );
};
export default Home;
