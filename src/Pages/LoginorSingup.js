const LoginorSingup = () => {
  return (
    <div className="w-full h-[100vh] bg-red-200">
      <div className="w-full h-full flex flex-col  items-center justify-center">
        <div className="">
          <h1 className="text-xl">Flat 100% OFF</h1>
          <p className="text-2xl">First order </p>
          <p>Sign up now</p>
        </div>
        <div className="w-[40vw] h-[50vh] bg-white rounded-md mt-[2rem] p-8 flex flex-col">
          <div className="flex flex-col">
            <h1 className="text-2xl  py-2">Login or Sign Up</h1>
            <div>
              <input
                type="text"
                className="outline-none border mt-4 w-full h-10 px-4 text-sm focus:ring  focus:ring-red-500 rounded-sm"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <input
                type="password"
                className="outline-none border mt-4 w-full h-10 px-4 text-sm focus:ring  focus:ring-red-500 rounded-sm"
                placeholder="Enter your password"
              />
            </div>
            <button className="self-center text-red-500 font-semibold text-sm mt-10 border h-10 w-[20rem] active:border-red-500">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginorSingup;
