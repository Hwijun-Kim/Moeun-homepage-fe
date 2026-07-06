import styled from "styled-components";

const values = [
  '고객 최우선 만족 서비스',
  '인재와 기술의 조화',
  '신뢰할 수 있는 전문성',
  '삶의 풍요와 만족에 기여',
  '지역사회 공헌',
];

const history = [
  '2019년 상담센터 운영 시작',
  '아동청소년 심리지원 서비스 바우처',
  '성인 마음건강 서비스 바우처',
  '영암군청 공무원 상담센터 운영',
];

const partners = [
  '영암군청',
  '보호관찰소 · 교도소',
  '새로일하기센터',
  '청년일자리지원사업',
  '희망리턴패키지',
  '사회복지관',
  '세한대학교',
  '동아보건대학교',
];

const AboutPage = () => {
  return (
    <div className='relative overflow-hidden pt-28 sm:pt-36 lg:pt-[240px] pb-16 sm:pb-24 lg:pb-[162px] flex flex-col items-center justify-center gap-16 sm:gap-20 lg:gap-[114px] bg-[#F7F7FB] px-4'>
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div
          className='absolute -top-[120px] -left-[120px] w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[560px] lg:h-[560px] lg:-top-[180px] lg:-left-[160px] rounded-full bg-[#F7F869]'
          style={{ filter: 'blur(90px)', opacity: 0.45 }}
        />
        <div
          className='absolute -top-[140px] -right-[140px] w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] lg:w-[640px] lg:h-[640px] lg:-top-[220px] lg:-right-[200px] rounded-full bg-[#8CBE2C]'
          style={{ filter: 'blur(100px)', opacity: 0.3 }}
        />
        <div
          className='absolute top-[300px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] sm:w-[700px] sm:h-[400px] lg:w-[900px] lg:h-[500px] lg:top-[420px] rounded-full bg-[#B7D98C]'
          style={{ filter: 'blur(110px)', opacity: 0.35 }}
        />
        <svg className='hidden sm:block! absolute top-[110px] left-[120px]' width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="7" stroke="#8CBE2C" strokeWidth="2" opacity="0.4" />
        </svg>
        <svg className='hidden sm:block! absolute top-[260px] right-[160px]' width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="7" fill="#F7F869" opacity="0.6" />
        </svg>
        <svg className='hidden sm:block! absolute bottom-[120px] right-[280px]' width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="9" stroke="#B7D98C" strokeWidth="2" opacity="0.5" />
        </svg>
      </div>
      <div className='relative z-10 flex flex-col items-center justify-center gap-4 sm:gap-6'>
        <div className='flex flex-col items-center justify-center'>
          <span className='font-semibold text-[22px] sm:text-[32px] lg:text-[44px] text-center'>
            사람의 마음을 치유하는
          </span>
          <span className='font-extrabold text-[36px] sm:text-[56px] lg:text-[88px] text-center'>
            모은심리상담센터
          </span>
        </div>
        <span className='text-[14px] sm:text-[17px] lg:text-[20px] text-[#767676] text-center'>
          아동청소년부터 성인까지, 개인상담·심리검사·집단상담을 통해
          더 성숙하고 건강한 나를 만들어가는 과정을 함께합니다.
        </span>
      </div>
      <div className='relative z-10 flex flex-col lg:flex-row! gap-12 sm:gap-14 lg:gap-[120px] w-full max-w-[1600px] lg:items-start justify-center sm:items-center'>
        <div className='flex flex-col items-center w-full max-w-[300px] gap-4'>
          <Numbering>1</Numbering>
          <div className='flex flex-col w-full items-center mb-2'>
            <span className='font-semibold text-[22px]'>핵심가치</span>
            <span className='text-[18px] text-[#97999B]'>Our Values</span>
          </div>
          <div className='flex flex-col gap-1 w-full items-center'>
            {values.map((value, index) => (
              <TextBox key={index}>{value}</TextBox>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center w-full max-w-[300px] gap-4'>
          <Numbering>2</Numbering>
          <div className='flex flex-col w-full items-center mb-2'>
            <span className='font-semibold text-[22px]'>운영현황</span>
            <span className='text-[18px] text-[#97999B]'>Since 2019</span>
          </div>
          <div className='flex flex-col gap-1 w-full items-center'>
            {history.map((item, index) => (
              <TextBox key={index}>{item}</TextBox>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center w-full max-w-[300px] gap-4'>
          <Numbering style={{ boxShadow: '0px 0px 30px 0px #8CBE2C80'}}>3</Numbering>
          <div className='flex flex-col w-full items-center mb-2'>
            <span className='font-semibold text-[22px]'>연계 협력기관</span>
            <span className='text-[18px] text-[#97999B]'>Partners</span>
          </div>
          <div className='flex flex-col gap-1 w-full items-center'>
            {partners.map((partner, index) => (
              <TextBox key={index}>{partner}</TextBox>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Numbering = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8CBE2C;
  color: white;
  font-weight: 600;
  font-size: 18px;
`;

const TextBox = styled.div`
  width: 100%;
  max-width: 300px;
  min-height: 60px;
  border-radius: 12px;
  padding: 16px 24px;
  background-color: white;
  box-shadow: 0 4px 20px 0 #8CBE2C14;
  font-size: 18px;
  color: #2F4B22;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    background-color: #8CBE2C;
    color: white;
    transition: background-color 0.5s, color 0.5s;
  }
`;

export default AboutPage;
