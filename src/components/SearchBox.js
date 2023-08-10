const SearchBox = () => {
  return (
    <div className="absolute top-[650px] left-[177px] w-[1086px] h-[140px] text-left text-base text-white font-dm-sans">
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-200 shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] w-[1086px] h-[140px]" />
      <div className="absolute top-[30px] left-[48px] w-[990px] h-[65px]">
        <div className="absolute top-[0px] left-[0px] w-[290px] h-[65px]">
          <div className="absolute top-[0px] left-[0px]">Search Event</div>
          <b className="absolute top-[32px] left-[0px] text-3xl">Konser Jazz</b>
          <div className="absolute top-[64.5px] left-[-0.5px] box-border w-[291px] h-px border-t-[1px] border-solid border-steelblue" />
        </div>
        <div className="absolute top-[0px] left-[350px] w-[290px] h-[65px]">
          <div className="absolute top-[0px] left-[0px]">Place</div>
          <b className="absolute top-[32px] left-[0px] text-3xl">Indonesia</b>
          <div className="absolute top-[64.5px] left-[-0.5px] box-border w-[291px] h-px border-t-[1px] border-solid border-steelblue" />
        </div>
        <div className="absolute top-[0px] left-[700px] w-[290px] h-[65px]">
          <div className="absolute top-[0px] left-[0px]">Time</div>
          <b className="absolute top-[32px] left-[0px] text-3xl">Any date</b>
          <div className="absolute top-[64.5px] left-[-0.5px] box-border w-[291px] h-px border-t-[1px] border-solid border-steelblue" />
          <img
            className="absolute top-[48px] left-[278px] w-3 h-[7px]"
            alt=""
            src="/vector2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
