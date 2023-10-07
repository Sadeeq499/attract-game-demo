import { Carousel } from "flowbite-react";
import ImageOne from "../images/slider1.jpg";
import SliderTow from "../images/slider2.jpg";
import SliderThree from "../images/slider3.jpg";

function Carusal() {
  return (
    <div className=" w-full h-[100vh] bg-slate-100">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={ImageOne} alt="image1" className="object-cover h-[100vh]" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={SliderTow} alt="image2" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src={SliderThree}
            alt="image3"
            className="object-cover h-[100vh]"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Carusal;
