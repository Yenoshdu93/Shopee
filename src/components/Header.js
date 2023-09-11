import { Link } from "react-router-dom";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { addUser, removeUser } from "../app/cartSlice";

const Header = () => {
  const [show, setShow] = useState(false);
  const userDetails = useSelector((state) => state.cart.userDetails);
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleAuth = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
      })

      .catch((error) => {
        console.log(error);
      });
  };
  const hadleSignOUt = () => {
    signOut(auth)
      .then(() => {
        console.log("success");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigation = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className=" h-[5.5rem] w-full bg-[#ffffff] border-b z-50">
      <div className="h-full w-full px-6 flex items-center justify-between">
        {/* left */}
        <div className="h-full flex items-center gap-[1rem]">
          <button className="cursor-pointer focus:ring-2 rounded-sm">
            <AiOutlineMenu className="text-2xl md:hidden " />
          </button>
          <Link className="text-2xl font-medium text-gray-500" to="/">
            Shopee
          </Link>
          <div className="hidden xl:flex items-center   h-full">
            <button className="link relative hover:border-b-red-500 group">
              <p>MEN</p>
              <div className=" absolute hidden group-hover:block  bg-white h-[60vh] w-[80vw]  top-[5.5rem] shadow-sm ">
                <div className="w-full h-full  flex justify-between ">
                  <div className="w-full flex  flex-col gap-2 items-start bg-white shadow-md px-10 py-2">
                    <p className="text-sm font-bold text-red-500">Topwear</p>
                    <p className="text-xs hover:font-bold">Casual</p>
                    <p className="text-xs hover:font-bold">Formal</p>
                    <p className="text-xs hover:font-bold">Shirts</p>
                    <p className="text-xs hover:font-bold">Jackets</p>
                    <p className="text-xs hover:font-bold">Sweaters</p>
                    <p className="text-xs hover:font-bold">Jackets</p>
                    <p className="text-xs hover:font-bold">Blazers & Coats</p>
                    <p className="text-xs hover:font-bold">Suits</p>
                    <p className="text-xs hover:font-bold"> Rain Jackets</p>
                    <span className="border px-2"></span>
                  </div>
                  <div className="w-full flex  flex-col gap-2 items-start bg-gray-100 shadow-md px-10 py-2">
                    <p className="text-sm font-bold text-red-500">Bottomwear</p>
                    <p className="text-xs hover:font-bold">Jeans</p>
                    <p className="text-xs hover:font-bold">Casual</p>
                    <p className="text-xs hover:font-bold">Trousers</p>
                    <p className="text-xs hover:font-bold">Trousers</p>
                    <p className="text-xs hover:font-bold">Sweaters</p>
                    <p className="text-xs hover:font-bold">Shorts</p>
                    <p className="text-xs hover:font-bold">Pants & Joggers </p>
                    <p className="text-xs hover:font-bold">
                      Thermals Plus Size
                    </p>
                    <p className="text-xs hover:font-bold"> Rain Jackets</p>
                    <span className="border px-2"></span>
                  </div>
                  <div className="w-full flex  flex-col gap-2 items-start bg-white shadow-md px-10 py-2">
                    <p className="text-sm font-bold text-red-500">Footwear</p>{" "}
                    <p className="text-xs hover:font-bold">Casual</p>
                    <p className="text-xs hover:font-bold">Shoes</p>
                    <p className="text-xs hover:font-bold">Sports Shoes</p>
                    <p className="text-xs hover:font-bold">Formal Shoes</p>
                    <p className="text-xs hover:font-bold">Sneakers</p>
                    <p className="text-xs hover:font-bold">Flip Flops</p>
                    <p className="text-xs hover:font-bold">Socks</p>
                    <span className="border px-2"></span>
                    <p className="text-sm font-bold text-red-500">
                      Personal Care
                    </p>
                    <p className="text-sm font-bold text-red-500">Grooming </p>{" "}
                    <p className="text-sm font-bold text-red-500">
                      Sunglasses & Frames Watches
                    </p>
                  </div>
                  <div className=" w-full flex  flex-col gap-2 items-start bg-white shadow-md px-10 py-2">
                    <p className="text-sm font-bold text-red-500">Topwear</p>{" "}
                    <p className="text-xs hover:font-bold">Casual</p>
                    <p className="text-xs hover:font-bold">Formal</p>
                    <p className="text-xs hover:font-bold">Shirts</p>
                    <p className="text-xs hover:font-bold">Jackets</p>
                    <p className="text-xs hover:font-bold">Sweaters</p>
                    <p className="text-xs hover:font-bold">Jackets</p>
                    <p className="text-xs hover:font-bold">Blazers & Coats</p>
                    <p className="text-xs hover:font-bold">Suits</p>
                    <p className="text-xs hover:font-bold"> Rain Jackets</p>
                    <span className="border px-2"></span>
                  </div>
                  <div className="w-full flex  flex-col gap-2 items-start  bg-white shadow-md px-10 py-2">
                    <p className="text-sm font-bold text-red-500">Topwear</p>{" "}
                    <p className="text-xs hover:font-bold">Casual</p>
                    <p className="text-xs hover:font-bold">Formal</p>
                    <p className="text-xs hover:font-bold">Shirts</p>
                    <p className="text-xs hover:font-bold">Jackets</p>
                    <p className="text-xs hover:font-bold">Sweaters</p>
                    <p className="text-xs hover:font-bold">Jackets</p>
                    <p className="text-xs hover:font-bold">Blazers & Coats</p>
                    <p className="text-xs hover:font-bold">Suits</p>
                    <p className="text-xs hover:font-bold"> Rain Jackets</p>
                    <span className="border px-2"></span>
                  </div>
                </div>
              </div>
            </button>
            <div className="link hover:border-b-pink-500">
              <p>WOMEN</p>
              <div className=" hidden absolute bg-white h-[60vh] w-[80vw]  top-[5.5rem] shadow-sm"></div>
            </div>
            <div className="link hover:border-b-green-500">
              <p>KIDS</p>
            </div>
            <div className="link hover:border-b-yellow-500">
              <p>HOME & LIVING</p>
            </div>
            <div className="link hover:border-b-violet-500">
              <p>BEAUTY</p>
            </div>
            <div className="link hover:border-gray-500 relative">
              <p>STUDIO</p>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center gap-10 h-full">
          <div className=" h-10 w-[23rem] rounded-md md:flex items-center gap-2 border border-1 relative hidden ">
            <BsSearch className="absolute mx-2" />
            <input
              type="text"
              className="h-full w-full  bg-[#f5f5f6] text-xs focus:bg-transparent outline-none focus:ring focus:ring-violet-50 rounded-md pl-10"
              placeholder="Search here for products and everything..."
            />
          </div>
          <div className="flex items-center gap-6 ">
            {userDetails ? (
              <div className="relative cursor-pointer  mt-[-1rem]">
                <div
                  onClick={() => setShow(!show)}
                  className="h-[2rem] w-[2rem] rounded-full"
                >
                  <img
                    className="w-full h-full rounded-full"
                    src={userDetails.image}
                    alt=""
                  />
                  <p className="text-xs font-bold ml-[-0.5rem]">
                    {userDetails.name.substring(0, 6)}
                  </p>
                </div>
                {show ? (
                  <div className="absolute bg-white w-[10rem] h-[5rem] right-10 top-[2rem] rounded-md flex items-center justify-center p-2">
                    <button
                      onClick={hadleSignOUt}
                      className="cursor-pointer border px-4 py-2 rounded-md text-white  bg-black"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="relative cursor-pointer flex flex-col items-center justify-center border-b-transparent border-b-4 px-2 rounded-sm hover:border-b-red-500 py-5 group">
                <AiOutlineUser className="text-2xl " />
                <p className="text-xs font-medium">Profile</p>
                <div className="hidden group-hover:block group-transition-all absolute h-[60vh] w-[20vw] bg-white rounded-md top-[5.5rem] px-4 py-2">
                  <div className="flex flex-col space-y-4">
                    <p className="text-sm font-semibold">Welcome</p>
                    <span className="block  text-xs text-gray-400">
                      Access your account and manage your orders
                    </span>
                    <button
                      onClick={() => navigation("/login")}
                      className=" text-pink-500 py-2 border border-pink-500  active:ring-2 active:ring-pink-500"
                    >
                      Login / Sign Up
                    </button>
                    <button
                      onClick={handleGoogleAuth}
                      className="flex items-center border px-2 py-1 gap-4 active:ring-1 active:ring-blue-500"
                    >
                      <img
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                        width={40}
                        alt=""
                      />
                      <p className="text-sm text-gray-600">
                        Continue With Google
                      </p>
                    </button>
                    <span className="border-b"></span>
                  </div>
                </div>
              </div>
            )}
            <div className="cursor-pointer flex flex-col items-center justify-center">
              <AiOutlineHeart className="text-2xl" />
              <p className="text-xs font-medium">Whishlist</p>
            </div>
            <div
              onClick={() => navigation("/cart")}
              className="relative cursor-pointer flex flex-col items-center justify-center"
            >
              <BsHandbag className="text-2xl" />
              <p className="text-xs font-medium">Bag</p>
              <span className="absolute top-[-1rem] left-4 text-xl text-red-500 bg-white rounded-full px-1">
                {cart.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
