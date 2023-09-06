import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
const Banner = () => {
  return (
    <div className="w-full h-full flex items-center">
      <img className="w-[50vw] object-cover cursor-pointer" src={img2} alt="" />
      <img
        className="w-[50vw]  object-cover cursor-pointer"
        src={img1}
        alt=""
      />
    </div>
  );
};
export default Banner;
