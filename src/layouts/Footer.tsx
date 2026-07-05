import {footerLogo} from "@/assets/icons/logo.tsx";

const Footer = () => {
  return (
    <div className="bg-black w-full h-[480px] pt-[128px] pb-[150px] px-[320px] flex gap-[110px] mt-auto">
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <span className='font-bold text-[18px] text-white'>모은심리상담센터</span>
            <span className='text-[18px] text-white'>
              목포센터 : 목포시 선현로 46, 목포벤처문화산업지원센터 문화동 206-1호
            </span>
            <span className='text-[18px] text-white'>
              영암센터 : 전남 영암군 영암읍 남문로 14, 2층
            </span>
          </div>
          <span className='text-white text-[18px] mt-auto'>
            TEL : 061-947-9940
            <br />
            운영시간 : 평일 09:00 ~ 18:00 (사전 예약제)
            <br />
            CONTACT : jhpark1029@hanmail.net
          </span>
        </div>
      </div>
      <div className='mt-auto ml-auto'>{footerLogo()}</div>
    </div>
  )
}

export default Footer
