import stores from "../assets/stores.png";

const Footer = () => {
  return (
    <div className="bg-[#f5f5f6] w-full h-full p-10 ">
      <div className="w-full h-full flex px-10">
        <div className="w-full h-full">
          <h1 className=" text-xs font-semibold pb-6 ">ONLINE SHOPPING</h1>
          <div className="space-y-4">
            <p className="text-xs text-gray-500">Men</p>
            <p className="text-xs text-gray-500">Women</p>
            <p className="text-xs text-gray-500">Kids</p>
            <p className="text-xs text-gray-500">Home & Living</p>
            <p className="text-xs text-gray-500">Style</p>
            <p className="text-xs text-gray-500">Fashion</p>
          </div>
        </div>
        <div className="w-full h-full">
          <h1 className=" text-xs font-semibold pb-6 ">CUSTOMER POLICIES</h1>
          <div className="space-y-4">
            <p className="text-xs text-gray-500">Contact Us</p>
            <p className="text-xs text-gray-500">FAQ</p>
            <p className="text-xs text-gray-500">T & C</p>
            <p className="text-xs text-gray-500">Terms Of Use</p>
            <p className="text-xs text-gray-500">Shipping</p>
            <p className="text-xs text-gray-500">Cancellation</p>
          </div>
        </div>
        <div className="w-full h-full">
          <h1 className=" text-xs font-semibold pb-6 ">
            EXPERICENCE SHOPEE APP
          </h1>
          <div className=" flex">
            <img className="cursor-pointer" src={stores} width={200} alt="" />
          </div>
        </div>
        <div className="w-full h-full">
          <h1
            className=" text-2xl font-bold pb-6 text-gray-500
           "
          >
            100% Gaurantee
          </h1>
          <p className="text-xs font-bold text-gray-500">
            Free shipping ,Prouduct will be delivered with in a 7 working days
          </p>
        </div>
      </div>
      <h1 className="text-xl text-gray-600 font-medium text-center mt-2">
        Get in Touch
      </h1>
    </div>
  );
};
export default Footer;
