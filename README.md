# 모은심리상담센터 홈페이지

모은심리상담센터 소개 페이지입니다. 센터 소개, 상담진 소개, 상담 종류, 문의하기로 구성된 원페이지(One-page) 홈페이지이며, React + TypeScript + Vite로 제작되었습니다.

## 기술 스택

- **React 18** + **TypeScript**
- **Vite 7** - 빌드 도구
- **Tailwind CSS v4** - 스타일링
- **styled-components** - 일부 컴포넌트 스타일링
- **react-hook-form** + **zod** - 문의 폼 검증
- **hj-ds** - 사내 UI 컴포넌트 라이브러리 (Button, Input, Checkbox 등)
- **Web3Forms** - 문의 폼 제출 시 이메일 발송

## 시작하기

### 설치

```bash
yarn install
```

### 환경변수 설정

문의하기 폼에서 이메일을 발송하려면 [Web3Forms](https://web3forms.com)에서 발급받은 액세스 키가 필요합니다.

프로젝트 루트에 `.env` 파일을 만들고 아래 내용을 채워주세요 (`.env.example` 참고):

```
VITE_WEB3FORMS_ACCESS_KEY=발급받은_액세스_키
```

`.env`는 `.gitignore`에 등록되어 있어 저장소에는 올라가지 않습니다. 배포 환경(Netlify 등)에서는 별도로 환경변수를 등록해야 합니다.

### 개발 서버 실행

```bash
yarn dev
```

### 프로덕션 빌드

```bash
yarn build
```

빌드 결과물은 `dist` 폴더에 생성됩니다.

### 빌드 미리보기

```bash
yarn preview
```

### 린트

```bash
yarn lint
```

## 프로젝트 구조

```
src/
├── App.tsx                 # 전체 페이지 구성 및 섹션 스크롤 처리
├── layouts/
│   ├── Header.tsx           # 상단 네비게이션 (모바일: 햄버거 메뉴)
│   └── Footer.tsx           # 하단 푸터 (주소, 연락처)
├── pages/
│   ├── AboutPage/            # 센터 소개
│   ├── TeamPage/             # 상담진 소개
│   ├── ServicesPage/         # 상담 종류 (심리검사 링크 포함)
│   └── ContactPage/          # 문의하기 폼 (Web3Forms 연동)
└── assets/
    ├── icons/logo.tsx        # 로고 SVG
    └── font/                 # Geologica 폰트
```

## 배포

### Netlify

`netlify.toml`에 빌드 설정이 포함되어 있어 GitHub 저장소만 연결하면 자동으로 인식됩니다.

- Build command: `yarn build`
- Publish directory: `dist`

배포 전 Netlify 사이트 설정의 Environment variables에 `VITE_WEB3FORMS_ACCESS_KEY`를 반드시 등록해야 문의 이메일 발송이 정상 동작합니다.

### Docker

`Dockerfile`, `docker-compose.yml`, `nginx/default.conf`를 이용해 자체 서버(nginx)에도 배포할 수 있습니다.

```bash
docker-compose up -d --build
```

## 문의 폼 이메일 발송 구조

1. 방문자가 문의하기 폼을 제출하면 [Web3Forms](https://web3forms.com) API로 요청을 보냅니다.
2. Web3Forms가 등록된 이메일(`jhpark1029@hanmail.net`)로 문의 내용을 정리해서 발송합니다.
3. 액세스 키는 `VITE_WEB3FORMS_ACCESS_KEY` 환경변수로 관리하며, 빌드 시점에 번들에 포함됩니다.
