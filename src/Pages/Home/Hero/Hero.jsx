import { FaStar } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="w-1/2 mx-auto text-center mt-14">
        <h1 className="uppercase text-4xl font-extrabold ">
          Helping ecom to get consistent <br /> sales and scale 5x
        </h1>
        <p className="my-5">
          Over The Past 5 Years, I’ve Invested{" "}
          <span className="font-bold">Over $4.5 million In Ads</span> And
          Condensed All My Knowledge Into this solution.{" "}
          <span className="font-bold">
            Get Consistent Results And Scale With Confidence
          </span>
        </p>
        <button className="btn uppercase bg-black text-white px-10 text-sm p-3 font-semibold">
          Yes! Start Scaling now
        </button>
        <div className="flex justify-center items-center my-5">
          <FaStar className="text-amber-300" />
          <FaStar className="text-amber-300" />
          <FaStar className="text-amber-300" />
          <FaStar className="text-amber-300" />
          <FaStar className="text-amber-300" />
          <p className="ps-1">Trusted by 390 business owners</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
