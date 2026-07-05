import {mainLogo} from "@/assets/icons/logo.tsx";
import {Button} from "hj-ds";

interface IHeaderProps {
  onAboutClick?: () => void;
  onTeamClick?: () => void;
  onServicesClick?: () => void;
  onContactClick?: () => void;
}

const Header = ({ onAboutClick, onTeamClick, onServicesClick, onContactClick }: IHeaderProps) => {
  return (
    <div className="fixed z-50 top-0 left-0 w-full h-16 px-20 flex justify-between items-center bg-white shadow-[0px_2px_10px_0px_#00000014]">
      {mainLogo()}
      <div className="flex gap-5">
        <Button
          className="bg-[#8CBE2C] hover:bg-[#79A625] text-white font-semibold text-[16px] h-11 px-6"
          onClick={onAboutClick}
        >
          센터 소개
        </Button>
        <Button
          className="bg-[#8CBE2C] hover:bg-[#79A625] text-white font-semibold text-[16px] h-11 px-6"
          onClick={onTeamClick}
        >
          상담진 소개
        </Button>
        <Button
          className="bg-[#8CBE2C] hover:bg-[#79A625] text-white font-semibold text-[16px] h-11 px-6"
          onClick={onServicesClick}
        >
          상담 종류
        </Button>
        <Button
          className="bg-[#8CBE2C] hover:bg-[#79A625] text-white font-semibold text-[16px] h-11 px-6"
          onClick={onContactClick}
        >
          문의하기
        </Button>
      </div>
    </div>
  );
}

export default Header;
