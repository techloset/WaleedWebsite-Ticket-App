import { memo } from "react";
import RectangleComponent from "./RectangleComponent";

const FirstFold = memo(() => {
  return (
    <div className="">
      <img
        className="absolute top-0 left-0 w-auto h-full object-cover "
        alt=""
        src="/rectangle-12@2x.png"
      />
      <RectangleComponent />
      <img
        className="absolute top-[253.83px] left-[1262.83px] w-[22.33px] h-[42.33px]"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute top-[253.83px] left-[155.83px] w-[22.33px] h-[42.33px]"
        alt=""
        src="/vector1.svg"
      />
      <div className="absolute top-0 left-0 shadow-[0px_8px_20px_rgba(209,_209,_209,_0.19)] w-[1440px] h-[70px]" />
      <div className="absolute top-[24px] left-[748px] w-[515px] h-[41px] text-base">
        <div className="absolute top-[10px] left-0 font-medium">
          Schedule
        </div>
        <div className="absolute top-[10px] left-[109px] font-medium">
          Speakers
        </div>
        <div className="absolute top-[10px] left-[217px] font-medium">
          Ticket
        </div>
        <div className="absolute top-[10px] left-[302px] font-medium">
          Contact
        </div>
        <div className="absolute top-0 left-[414px] rounded-31xl box-border w-[101px] flex flex-row py-2.5 px-5 items-center justify-center border-[1.5px] border-solid border-white">
          <div className="relative font-medium">Login</div>
        </div>
      </div>
      <div className="absolute top-[25px] left-[177px] w-[152.75px] h-[38.56px] text-9xl-5 font-proxima-nova">
        <div className="absolute top-[3.56px] left-[42.75px]">
          <span className="font-extrabold">Event</span>
          <span>ick</span>
        </div>
        <img
          className="absolute top-0 left-0 w-[34.44px] h-[34.44px] overflow-hidden"
          alt=""
          src="/ticket2-1.svg"
        />
      </div>
      <b className="absolute top-[218px] left-[820px] text-21xl inline-block font-proxima-nova w-[443px]">
        SBS MTV The Kpop Show Ticket Package
      </b>
      <div className="absolute top-[342px] left-[820px] leading-[130%] font-proxima-nova inline-block w-[443px]">
        Look no further! Our SBS The Show tickets are the simplest way for you
        to experience a live Kpop recording.
      </div>
      <div className="absolute top-[441px] left-[812px] w-[182px] h-[60px] text-center">
        <div className="absolute top-0 left-0 rounded-31xl bg-deeppink shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] w-[182px] h-[60px]" />
        <b className="absolute top-[18px] left-[46px]">Get Ticket</b>
      </div>
      <div className="absolute top-[441px] left-[1014px] w-[182px] h-[60px] text-center">
        <div className="absolute top-0 left-0 rounded-31xl shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] box-border w-[182px] h-[60px] border-[1.5px] border-solid border-white" />
        <b className="absolute top-[18px] left-[42px]">Learn More</b>
      </div>
      <div className="absolute top-[161px] left-[76px] w-[776px] h-[488px]">
        <div className="absolute top-[397px] left-0 rounded-[50%] bg-midnightblue-100 filter blur-[100px] w-[776px] h-[91px]" />
        <img
          className="absolute top-0 left-[65px] w-[636.84px] h-[476px] object-cover"
          alt=""
          src="/pngguru-2@2x.png"
        />
      </div>
    </div>
  );
});

export default FirstFold;
