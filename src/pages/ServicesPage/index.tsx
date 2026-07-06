import styled from "styled-components";
import {Fragment, useState} from "react";

const shadowBoxTitles = [
  '개인상담',
  '집단상담',
  '특화 프로그램',
  '심리검사',
];

const shadowBoxDescriptions = [
  '아동청소년·성인 대상 전문상담사와 1:1 대면상담',
  '새일센터·청년일자리센터 등 기관 연계 집단 프로그램',
  '보호관찰소·교도소 수강명령프로그램, 미술치료, 진로프로그램',
  'MBTI, MMPI-2 등 13종 표준화 심리검사 및 해석상담',
];

const AIBoxTitles = [
  '성격 · 인성검사',
  '진로 · 적성검사',
  '학습검사',
  '정서 · 투사검사',
];

const AIBoxDescriptions = [
  '나의 성격과 심리적 특성을 \n이해하는 검사',
  '적성에 맞는 진로를 \n탐색하는 검사',
  '학습스타일과 학습동기를 \n진단하는 검사',
  '내면의 정서 상태를 \n탐색하는 검사',
];

const INPSYT_URL = 'https://inpsyt.co.kr/main';
const ASSESTA_URL = 'https://www.assesta.com/main/main.asp#';
const MTEST_URL = "https://mtest.kr/";

const AIBoxContents: { name: string; href?: string }[][] = [
  [
    { name: "MBTI", href: ASSESTA_URL },
    { name: "MMPI-2", href: MTEST_URL },
    { name: "PAI", href: INPSYT_URL },
    { name: "TCI", href: MTEST_URL },
  ],
  [
    { name: "Holland", href: INPSYT_URL },
    { name: "STRONG", href: ASSESTA_URL },
    { name: "에니어그램", href: INPSYT_URL },
  ],
  [{ name: "MLST-2", href: INPSYT_URL }, { name: "MST" }, { name: "학습전략" }],
  [{ name: "SCT", href: INPSYT_URL }, { name: "TAT" }, { name: "HTP" }],
];

const IllustrationIcons = [
  // 0. 개인상담 - 1:1 대화 말풍선
  () => (
    <>
      <rect x="216" y="250" width="200" height="120" rx="26" fill="#2F4B22" />
      <path d="M270 370 L255 410 L320 370 Z" fill="#2F4B22" />
      <rect x="376" y="360" width="160" height="100" rx="22" fill="#8CBE2C" />
      <path d="M400 460 L390 498 L440 460 Z" fill="#8CBE2C" />
    </>
  ),
  // 1. 집단상담 - 함께 모인 사람들
  () => (
    <>
      <circle cx="290" cy="310" r="36" fill="#B7D98C" />
      <path d="M232 458 L232 368 A30 30 0 0 1 262 338 L318 338 A30 30 0 0 1 348 368 L348 458 Z" fill="#B7D98C" />
      <circle cx="462" cy="310" r="36" fill="#8CBE2C" />
      <path d="M404 458 L404 368 A30 30 0 0 1 434 338 L490 338 A30 30 0 0 1 520 368 L520 458 Z" fill="#8CBE2C" />
      <circle cx="376" cy="290" r="44" fill="#2F4B22" />
      <path d="M304 474 L304 360 A36 36 0 0 1 340 324 L412 324 A36 36 0 0 1 448 360 L448 474 Z" fill="#2F4B22" />
    </>
  ),
  // 2. 특화 프로그램 - 미술 팔레트와 붓
  () => (
    <>
      <ellipse cx="350" cy="350" rx="100" ry="80" fill="#2F4B22" />
      <circle cx="400" cy="370" r="18" fill="#FFFFFF" />
      <circle cx="310" cy="310" r="12" fill="#F7F869" />
      <circle cx="285" cy="350" r="12" fill="#8CBE2C" />
      <circle cx="300" cy="395" r="12" fill="#B7D98C" />
      <circle cx="355" cy="300" r="12" fill="#8CBE2C" />
      <path d="M435 405 L425 415 L481 471 L491 461 Z" fill="#8CBE2C" />
      <path d="M491 461 L481 471 L500 480 Z" fill="#F7F869" />
    </>
  ),
  // 3. 심리검사 - 체크리스트 클립보드
  () => (
    <>
      <rect x="278" y="256" width="220" height="240" rx="22" fill="#2F4B22" />
      <rect x="333" y="239" width="110" height="33" rx="11" fill="#B7D98C" />
      <rect x="307" y="313" width="131" height="15" rx="7" fill="#FFFFFF" />
      <rect x="307" y="352" width="161" height="15" rx="7" fill="#FFFFFF" />
      <rect x="307" y="391" width="98" height="15" rx="7" fill="#FFFFFF" />
      <circle cx="454" cy="448" r="41" fill="#8CBE2C" />
      <path d="M436 448 l13 13 26 -28" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
];

const IllustrationPanel = ({ index }: { index: number }) => (
  <svg viewBox="0 0 752 736" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="counselBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#EDF4E1" />
        <stop offset="100%" stopColor="#F7F7FB" />
      </linearGradient>
    </defs>
    <rect width="752" height="736" fill="url(#counselBg)" />
    <circle cx="376" cy="360" r="220" fill="#FFFFFF" />
    {IllustrationIcons[index]()}
    <circle cx="230" cy="220" r="8" fill="#B7D98C" />
    <circle cx="540" cy="230" r="10" fill="#B7D98C" />
    <circle cx="560" cy="520" r="7" fill="#B7D98C" />
  </svg>
);

const ServicesPage = () => {
  const [isHover, setIsHover] = useState<{idx: number, hover: boolean}>({
    idx: 0, hover: true,
  });

  return(
    <div className='pt-24 sm:pt-32 lg:pt-[256px] pb-16 sm:pb-24 lg:pb-[260px] flex flex-col items-center w-full px-4' style={{ background: 'linear-gradient(to top, #FFFFFF, #F7F7FB)' }}>
      <div className='flex flex-col gap-10 sm:gap-16 items-center w-full'>
        <span className='font-semibold text-[28px] sm:text-[36px] lg:text-[44px]'>상담 종류</span>
        <div className='flex flex-col lg:flex-row! gap-3 w-full max-w-[1300px] items-center'>
          <div className='w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[752px] lg:w-[752px]! aspect-[752/736] lg:h-[736px] rounded-2xl overflow-hidden shrink-0'>
            <IllustrationPanel index={isHover.idx} />
          </div>
          <div className='w-full max-w-[500px] sm:max-w-[600px] lg:w-[516px]! lg:h-[736px] rounded-2xl flex flex-col shrink-0' style={{ boxShadow: '2px 2px 20px 0px #2F4B2214' }}>
            {[0, 1, 2, 3].map((_, index) => (
              <ShadowBox key={index}
                onMouseEnter={() => setIsHover({idx: index, hover: true})}
                $active={isHover.idx === index && isHover.hover}
                className={`${index === 3 ? 'rounded-b-2xl!' : ''}`}
              >
                <span className={`font-semibold text-[22px] sm:text-[26px] ${isHover.idx === index && isHover.hover ? 'text-white' : 'text-[#B7D98C]'}`}>
                  0{index+1}
                </span>
                <div className='flex flex-col'>
                  <span className={`font-semibold text-[26px] sm:text-[34px] ${isHover.idx === index && isHover.hover ? 'text-white' : ''}`}>
                    {shadowBoxTitles[index]}
                  </span>
                  <span className={`text-[15px] sm:text-[18px] ${isHover.idx === index && isHover.hover ? 'text-white' : ''}`}>
                    {shadowBoxDescriptions[index]}
                  </span>
                </div>
              </ShadowBox>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center w-full gap-10 sm:gap-[58px] mt-20 sm:mt-32 lg:mt-[312px]'>
        <div className='flex flex-col items-center gap-1 px-4'>
          <span className='text-[18px] sm:text-[22px] lg:text-[28px]'>표준화된 13종 심리검사</span>
          <span className='text-[26px] sm:text-[34px] lg:text-[44px] font-semibold text-center'>
            다양한 검사로
            <br />
            나를 더 깊이 이해합니다.
          </span>
          <span className='text-[13px] sm:text-[14px] text-[#97999B] mt-2 text-center'>
            검사명을 클릭하면 해당 검사 사이트로 이동합니다.
          </span>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full max-w-[1300px]'>
          {[0, 1, 2, 3].map((_, index) => (
            <AIBox key={index}>
              <div className='flex flex-col gap-2'>
                <span className='font-semibold text-[22px]'>
                  {AIBoxTitles[index]}
                </span>
                <span className='text-[16px]'>
                  {AIBoxDescriptions[index].split('\n').map((line, i, arr) => (
                    <Fragment key={i}>{line}{i < arr.length - 1 && <br />}</Fragment>
                  ))}
                </span>
              </div>
              <div className='flex flex-wrap gap-2 mt-8'>
                {AIBoxContents[index].map((item, idx) => (
                  <AIBoxBadge
                    key={idx}
                    as={item.href ? 'a' : 'div'}
                    href={item.href}
                    target={item.href ? '_blank' : undefined}
                    rel={item.href ? 'noopener noreferrer' : undefined}
                  >
                    {item.name}
                  </AIBoxBadge>
                ))}
              </div>
            </AIBox>
          ))}
        </div>
      </div>
    </div>
  );
}

const ShadowBox = styled.div<{ $active: boolean }>`
  width: 100%;
  min-height: 130px;
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
  box-shadow: 0 -4px 20px 0 #2F4B2214;
  background-color: ${({ $active }) => ($active ? '#2F4B22' : '#FFFFFF')};
  flex-grow: ${({ $active }) => ($active ? 1 : 0)};
  transition: background-color 0.5s, flex-grow 0.5s;
  padding: 24px 16px 0 24px;

  @media (min-width: 1024px) {
    min-height: 160px;
    padding: 32px 0 0 40px;
  }
`;

const AIBox = styled.div`
  width: 100%;
  min-height: 260px;
  border-radius: 16px;
  padding: 32px 20px 32px 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 10px 10px 30px 0 #2F4B2214;
`;

const AIBoxBadge = styled.div`
  width: fit-content;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background-color: #8CBE2C;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  text-decoration: none;

  &[href]:hover {
    background-color: #79A625;
    cursor: pointer;
  }
`;

export default ServicesPage;
