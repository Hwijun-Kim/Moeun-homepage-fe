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

const AIBoxContents = {
  0: ['MBTI', 'MMPI-2', 'PAI'],
  1: ['Holland', 'CTI', '에니어그램'],
  2: ['MLST', 'MST', '학습전략'],
  3: ['SCT', 'TAT', 'HTP'],
}

const IllustrationPanel = () => (
  <svg viewBox="0 0 752 736" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="counselBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#EDF4E1" />
        <stop offset="100%" stopColor="#F7F7FB" />
      </linearGradient>
    </defs>
    <rect width="752" height="736" fill="url(#counselBg)" />
    <circle cx="376" cy="360" r="220" fill="#FFFFFF" />
    <path d="M270 300 h140 a24 24 0 0 1 24 24 v70 a24 24 0 0 1 -24 24 h-70 l-40 36 v-36 h-30 a24 24 0 0 1 -24 -24 v-70 a24 24 0 0 1 24 -24 z" fill="#2F4B22" />
    <path d="M420 380 h110 a20 20 0 0 1 20 20 v56 a20 20 0 0 1 -20 20 h-24 l-30 28 v-28 h-56 a20 20 0 0 1 -20 -20 v-56 a20 20 0 0 1 20 -20 z" fill="#8CBE2C" />
    <circle cx="376" cy="500" r="12" fill="#8CBE2C" />
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
    <div className='pt-[256px] pb-[260px] flex flex-col items-center w-full' style={{ background: 'linear-gradient(to top, #FFFFFF, #F7F7FB)' }}>
      <div className='flex flex-col gap-16 items-center'>
        <span className='font-semibold text-[44px]'>상담 종류</span>
        <div className='flex gap-3'>
          <div className='w-[752px] h-[736px] rounded-2xl overflow-hidden'>
            <IllustrationPanel />
          </div>
          <div className='w-[516px] h-[736px] rounded-2xl flex flex-col' style={{ boxShadow: '2px 2px 20px 0px #2F4B2214' }}>
            {[0, 1, 2, 3].map((_, index) => (
              <ShadowBox key={index}
                onMouseEnter={() => setIsHover({idx: index, hover: true})}
                $active={isHover.idx === index && isHover.hover}
                className={`${index === 3 ? 'rounded-b-2xl!' : ''}`}
              >
                <span className={`font-semibold text-[26px] ${isHover.idx === index && isHover.hover ? 'text-white' : 'text-[#B7D98C]'}`}>
                  0{index+1}
                </span>
                <div className='flex flex-col'>
                  <span className={`font-semibold text-[34px] ${isHover.idx === index && isHover.hover ? 'text-white' : ''}`}>
                    {shadowBoxTitles[index]}
                  </span>
                  <span className={`text-[18px] ${isHover.idx === index && isHover.hover ? 'text-white' : ''}`}>
                    {shadowBoxDescriptions[index]}
                  </span>
                </div>
              </ShadowBox>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center w-full gap-[58px] mt-[312px]'>
        <div className='flex flex-col items-center gap-1'>
          <span className='text-[28px]'>표준화된 13종 심리검사</span>
          <span className='text-[44px] font-semibold text-center'>
            다양한 검사로
            <br />
            나를 더 깊이 이해합니다.
          </span>
        </div>
        <div className='flex w-full h-[324px] gap-8 justify-center'>
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
              <div className='flex flex-col gap-1 mt-auto'>
                {[0, 1, 2].map((_, idx) => (
                  <AIBoxBadge key={idx}>
                    {AIBoxContents[index as keyof typeof AIBoxContents][idx]}
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
  height: 160px;
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
  box-shadow: 0 -4px 20px 0 #2F4B2214;
  background-color: ${({ $active }) => ($active ? '#2F4B22' : '#FFFFFF')};
  flex-grow: ${({ $active }) => ($active ? 1 : 0)};
  transition: background-color 0.5s, flex-grow 0.5s;
  padding: 32px 0 0 40px;
`;

const AIBox = styled.div`
  width: 260px;
  height: 100%;
  border-radius: 16px;
  padding: 40px 20px 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 10px 10px 30px 0 #2F4B2214;
`;

const AIBoxBadge = styled.div`
  width: fit-content;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 36px;
  background-color: #8CBE2C;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  color: white;
`;

export default ServicesPage;
