import Image from "next/image";
import curve from '../../public/curve-image.svg';

export default function hero() {
  return (
    <div className="h-screen flex items-center">
      <div className="flex flex-col sm:flex-row h-auto w-11/12 max-w-7xl mx-auto">

        <div className="flex flex-col flex-1 gap-4 justify-center px-6 sm:order-1">
          <h1 className="font-bold text-[36px] sm:text-[44px] text-center sm:text-left">
            Welcome To Our Website
          </h1>
          <p className="font-normal text-[18px] sm:text-[32px] text-[#4C4C4C] text-center sm:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard
          </p>
          <button className="text-white w-[200px] sm:w-[237px] h-[50px] sm:h-[66px] p-4 bg-black mx-auto sm:mx-0">
            Contact Us
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center sm:justify-end items-center sm:order-2 mt-6 sm:mt-0">
          <Image 
            src={curve}
            alt="Banner Image" 
            className="object-contain sm:object-cover w-[250px] sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
}