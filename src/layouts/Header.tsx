import {mainLogo} from "@/assets/icons/logo.tsx";
import {Button} from "hj-ds";
import {useState} from "react";

interface IHeaderProps {
  onAboutClick?: () => void;
  onTeamClick?: () => void;
  onServicesClick?: () => void;
  onContactClick?: () => void;
}

const Header = ({ onAboutClick, onTeamClick, onServicesClick, onContactClick }: IHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: '센터 소개', onClick: onAboutClick },
    { label: '상담진 소개', onClick: onTeamClick },
    { label: '상담 종류', onClick: onServicesClick },
    { label: '문의하기', onClick: onContactClick },
  ];

  const handleNavClick = (onClick?: () => void) => {
    onClick?.();
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-white shadow-[0px_2px_10px_0px_#00000014]">
      <div className="h-16 px-4 sm:px-8 lg:px-20 flex justify-between items-center">
        {mainLogo()}
        <div className="hidden lg:flex! gap-5">
          {navItems.map((item) => (
            <Button
              key={item.label}
              className="bg-[#8CBE2C] hover:bg-[#79A625] text-white font-semibold text-[16px] h-11 px-6"
              onClick={item.onClick}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <button
          type="button"
          className="lg:hidden! flex items-center justify-center w-10 h-10 shrink-0"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {isMenuOpen ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L18 18M18 6L6 18" stroke="#2F4B22" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7H20M4 12H20M4 17H20" stroke="#2F4B22" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden! flex flex-col gap-3 px-4 pb-6 pt-2 border-t border-[#0000000F]">
          {navItems.map((item) => (
            <Button
              key={item.label}
              className="bg-[#8CBE2C] hover:bg-[#79A625] text-white font-semibold text-[16px] h-11 w-full"
              onClick={() => handleNavClick(item.onClick)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
