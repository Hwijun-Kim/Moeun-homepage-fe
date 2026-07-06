import {Button, Checkbox, Input, Label, Textarea} from "hj-ds";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import {useState} from "react";

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactPage = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const formSchema = z.object({
    name: z.string().min(1),
    company: z.string().optional(),
    tel: z.string().min(1),
    email: z.email().min(1),
    category: z.string().optional(),
    message: z.string().min(1),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      tel: '',
      email: '',
      category: '',
      message: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `[모은심리상담센터 홈페이지 문의] ${data.name}님`,
          from_name: data.name,
          replyto: data.email,
          이름: data.name,
          '소속(기관)': data.company || '-',
          연락처: data.tel,
          이메일: data.email,
          상담분야: data.category || '-',
          문의내용: data.message,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitStatus('success');
        form.reset();
        setIsChecked(false);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="flex justify-center pt-16 sm:pt-20 lg:pt-24 px-4 sm:px-6 bg-[#F7F7FB]">
      <div
        className="w-full max-w-[848px] rounded-t-[24px] sm:rounded-t-[40px] bg-white px-6 sm:px-12 lg:px-[144px] pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20"
        style={{ boxShadow: "10px 10px 30px 0px #2F4B2214" }}
      >
        <div className="flex flex-col gap-8 sm:gap-14">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-[30px] sm:text-[36px] lg:text-[42px]">
              모은심리상담센터에
              <br />
              문의사항이 있으신가요?
            </span>
            <span className="text-[14px] sm:text-[20px] text-[#97999B]">
              어떤 내용이든 문의해주세요. 빠른 시일 내에 답변드리겠습니다.
            </span>
          </div>
          {submitStatus === 'success' ? (
            <div className="flex flex-col items-center gap-3 py-20">
              <span className="text-[26px] font-semibold text-[#2F4B22]">
                문의가 정상적으로 접수되었습니다.
              </span>
              <span className="text-[16px] text-[#97999B]">
                빠른 시일 내에 답변드리겠습니다. 감사합니다.
              </span>
              <Button
                className="mt-6 bg-[#8CBE2C] hover:bg-[#79A625] text-white font-semibold text-[16px] h-12 px-6"
                onClick={() => setSubmitStatus('idle')}
              >
                새 문의 작성하기
              </Button>
            </div>
          ) : (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-6"
            >
              <div className="flex flex-col w-full gap-8">
                <div className="flex flex-col gap-1 w-full">
                  <span className="text-[18px]">이름 *</span>
                  <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Input
                        {...field}
                        type="text"
                        placeholder="이름을 입력해주세요"
                        className={`w-full h-12 text-[16px] ${
                          fieldState.error ? "border-red-500" : ""
                        }`}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <span className="text-[18px]">소속(기관)</span>
                  <Controller
                    name="company"
                    control={form.control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        placeholder="학교 / 기관명 등 (선택)"
                        className={`w-full h-12 text-[16px]`}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <span className="text-[18px]">연락처 *</span>
                  <Controller
                    name="tel"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Input
                        {...field}
                        type="text"
                        placeholder="숫자만 입력해주세요"
                        className={`w-full h-12 text-[16px] ${
                          fieldState.error ? "border-red-500" : ""
                        }`}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9]/g, "");
                          field.onChange(value);
                        }}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <span className="text-[18px]">이메일 *</span>
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Input
                        {...field}
                        type="email"
                        placeholder="이메일을 입력해주세요"
                        className={`w-full h-12 text-[16px] ${
                          fieldState.error ? "border-red-500" : ""
                        }`}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <span className="text-[18px]">상담분야</span>
                  <Controller
                    name="category"
                    control={form.control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        placeholder="예: 개인상담, 심리검사, 진로상담 등"
                        className={`w-full h-12 text-[16px]`}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <span className="text-[18px]">상세내용 *</span>
                  <Controller
                    name="message"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Textarea
                        {...field}
                        placeholder="상세 내용을 입력해주세요"
                        className={`w-full h-[240px] text-[16px] ${
                          fieldState.error ? "border-red-500" : ""
                        } resize-none`}
                      />
                    )}
                  />
                </div>
              </div>
              {Object.keys(form.formState.errors).length > 0 && (
                <span className="text-[16px] text-red-500">
                  입력 내용을 확인하세요.
                </span>
              )}
              {submitStatus === 'error' && (
                <span className="text-[16px] text-red-500">
                  전송에 실패했습니다. 잠시 후 다시 시도해주세요.
                </span>
              )}
              <div className="flex gap-2 items-center">
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={(checked: boolean) => setIsChecked(checked)}
                  id="agreement"
                />
                <Label htmlFor="agreement" className="text-[16px]">
                  * 서비스 이용 약관과 개인정보 보호정책에 동의합니다.
                </Label>
              </div>
              <Button
                size="lg"
                className="w-full font-semibold mt-8 text-[18px] h-14"
                disabled={!form.formState.isValid || !isChecked || submitStatus === 'submitting'}
                type="submit"
              >
                {submitStatus === 'submitting' ? '전송 중...' : '문의하기'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
