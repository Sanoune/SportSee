import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

export default function SideMenu() {
  return (
    <>
      <div className="flex flex-col bg-black items-center justify-center gap-10 relative">
        <div className="flex flex-col gap-8 px-4">
          <div className="w-14 ">
            <img alt="icon-meditation" src={icon1}></img>
          </div>
          <div className="w-14">
            <img alt="icon-swimming" src={icon2}></img>
          </div>
          <div className="w-14">
            <img alt="icon-bike" src={icon3}></img>
          </div>
          <div className="w-14">
            <img alt="icon-weight" src={icon4}></img>
          </div>
        </div>

        <p className="text-white text-xs -rotate-90 text-nowrap absolute bottom-20">
          Copiryght SportSee 2020
        </p>
      </div>
    </>
  );
}
