import styled from "styled-components";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "hj-ds";

const counselors = [
  {
    name: '박지현',
    role: '센터장',
    detail: '상담심리학 박사 · 경력 10년',
    quote: '"영암군청·보호관찰소 상담 및 프로그램 운영, 세한대학교 등 다수 대학 겸임교수로 활동하고 있습니다."',
  },
  {
    name: '박수근',
    role: '사무국장',
    detail: '사회복지학 준학사 · 경력 5년',
    quote: '"센터 사무관리를 총괄하며 상담 서비스가 원활히 운영되도록 돕고 있습니다."',
  },
  {
    name: '최수정',
    role: '비상근상담사',
    detail: '상담심리학 석사 · 경력 7년',
    quote: '"세한대학교, 영암군청 연계 상담사로 다양한 현장 경험을 쌓아왔습니다."',
  },
  {
    name: '정형화',
    role: '비상근상담사',
    detail: '미술치료학 석사 · 경력 3년',
    quote: '"기관연계 미술치료 프로그램을 운영하며 정서적 표현과 치유를 돕습니다."',
  },
  {
    name: '이소라',
    role: '시간제상담사',
    detail: '아동청소년 및 성인 상담',
    quote: '"내담자의 눈높이에 맞춘 세심한 상담을 지향합니다."',
  },
  {
    name: '문수이',
    role: '비상근상담사',
    detail: '개인상담 및 집단상담',
    quote: '"안전하고 편안한 상담 환경을 만들기 위해 노력합니다."',
  },
];

const TeamPage = () => {
  return (
    <div className='bg-white w-full h-[632px] pt-[98px] pb-[122px] flex flex-col gap-8 items-center' style={{ boxShadow: '0px 4px 30px 12px #00000014' }}>
      <div className='flex flex-col items-center w-full gap-16'>
        <div className='flex flex-col items-center w-full gap-1'>
          <span className='font-semibold text-[28px]'>풍부한 경험과 전문성을 갖춘</span>
          <span className='font-semibold text-[44px]'><span className='text-[#8CBE2C]'>상담진</span>을 소개합니다</span>
        </div>
        <div className='flex w-full gap-10 justify-center'>
          <CardBox>
            <div className='flex flex-col gap-1 w-[320px]'>
              <span className='font-semibold text-[26px]'>센터장 박지현</span>
              <span className='text-[16px]'>상담심리학 박사 · 경력 10년</span>
            </div>
            <Avatar>박</Avatar>
          </CardBox>
          <CardBox>
            <div className='flex flex-col gap-1 w-[320px]'>
              <span className='font-semibold text-[26px]'>사무국장 박수근</span>
              <span className='text-[16px]'>센터 운영 총괄 · 경력 5년</span>
            </div>
            <Avatar>박</Avatar>
          </CardBox>
          <CardBox>
            <div className='flex flex-col gap-1 w-[320px]'>
              <span className='font-semibold text-[26px]'>전문상담사팀</span>
              <span className='text-[16px]'>최수정 · 정형화 · 이소라 · 문수이</span>
            </div>
            <Avatar>4+</Avatar>
          </CardBox>
        </div>
      </div>
      <TooltipProvider delayDuration={10}>
        <div className='flex gap-6 w-full justify-center'>
          {counselors.map((counselor, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <TooltipBox className='hover:border hover:border-[#8CBE2C] hover:text-[#8CBE2C]'>
                  {counselor.name} {counselor.role}
                </TooltipBox>
              </TooltipTrigger>
              <TooltipContent side='bottom' className='w-[380px] py-4 flex justify-center items-center border-0 bg-[#FFFFFF]/90' style={{ boxShadow: '10px 10px 30px 0px #2F4B2214' }}>
                <div className='flex gap-4 items-center px-4'>
                  <TooltipAvatar>{counselor.name[0]}</TooltipAvatar>
                  <div className='flex flex-col gap-1 text-[14px]'>
                    <span className='text-[#2F4B22] font-semibold'>{counselor.detail}</span>
                    <span className='text-[#767676]'>{counselor.quote}</span>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
}

const CardBox = styled.div`
  width: 400px;
  height: 182px;
  border-radius: 16px;
  background-color: #F8F9FA;
  box-shadow: 0 4px 20px 0 #00000014;
  padding-top: 94px;
  padding-left: 43px;
  position: relative;

  &:hover {
    background-color: #2F4B22;
    color: white;
    transition: background-color 0.5s, color 0.5s;
  }
`;

const Avatar = styled.div`
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background-color: #8CBE2C;
  color: white;
  font-weight: 700;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TooltipAvatar = styled.div`
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 50%;
  background-color: #2F4B22;
  color: white;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TooltipBox = styled.div`
  width: fit-content;
  height: 44px;
  border-radius: 24px;
  padding: 15px 36px;
  background-color: #F8F9FA;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TeamPage;
