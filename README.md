# 🍕 배달 습관 MBTI 테스트

배달 음식 주문 습관과 음식 취향을 바탕으로 한 MBTI 성격 유형 테스트 웹 애플리케이션입니다.

## 🛠️ 기술 스택

### Frontend
- **React 18** - 사용자 인터페이스 구축
- **TypeScript** - 타입 안정성
- **Vite** - 빠른 개발 환경 및 빌드 도구
- **React Router DOM** - 페이지 라우팅
- **Styled Components** - CSS-in-JS 스타일링
- **Bootstrap** - UI 컴포넌트 프레임워크

### 주요 라이브러리
- **FontAwesome** - 아이콘
- **React Responsive** - 반응형 디자인
- **HTML2Canvas** - 결과 이미지 캡처

## 📁 프로젝트 구조

```
src/
├── assets/
│   ├── questiondata.ts    # 질문 데이터
│   └── resultData.ts      # 결과 데이터
├── components/
│   ├── Layout.tsx         # 레이아웃 컴포넌트
│   └── KakaoShareButton.tsx # 카카오 공유 버튼
├── pages/
│   ├── Home.tsx           # 메인 페이지
│   ├── Question.tsx       # 질문 페이지
│   ├── Result.tsx         # 결과 페이지
│   ├── Loading.tsx        # 로딩 페이지
│   └── LoadingResult.tsx  # 결과 로딩 페이지
├── image/                 # 질문 관련 이미지들
└── App.tsx               # 메인 앱 컴포넌트
```

## 🚀 시작하기

### 설치

```bash
# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
# 개발 모드로 실행
npm run dev
```

### 빌드

```bash
# 프로덕션 빌드
npm run build
```

### 미리보기

```bash
# 빌드된 결과물 미리보기
npm run preview
```

## 📱 배포

이 프로젝트는 Vite를 사용하여 빌드되며, 정적 사이트로 배포할 수 있습니다.

```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.