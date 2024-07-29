import Trend1 from '../assets/Trend11.png'
import Trend2 from '../assets/Trend22.png'
import Trend3 from '../assets/Trend33.png'
import Trend4 from '../assets/Trend44.png'

export const Trending = () => {
  return (
    <div className="flex h-[390px] flex-col items-center gap-[10px] flex-shrink-0 mt-96">
      <div className="flex w-[1230px] h-[390px] flex-col items-center flex-shrink-0">
        <div className="flex w-[1231px] flex-col items-start gap-[30px]">
          <div className="flex items-start gap-[32px]">
            <p className="w-[184px] font-bold">Trending</p>
          </div>
          <div className="flex items-start gap-[20px]">
            <div className="flex w-[293px] h-[320px] flex-col items-start rounded-xl relative">
              <img
                className="w-[289px] h-[320px] flex-shrink-0 rounded-xl"
                src={Trend1}
              ></img>
              <div className="flex w-[230px] h-[120px] flex-col items-start gap-[16px] absolute left-[28.5px] bottom-[28px]">
                <div className="flex py-1 px-2.5 justify-center items-center gap-1 rounded-md  bg-[#4B6BFB]">
                  <p className="text-xs text-white not-italic font-medium leading-5">
                    Technology
                  </p>
                </div>
                <p className="text-white">
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </p>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
