# Test-Automation

QA 엔지니어 과제 대비 및 공부용 개인 학습 레포. 사용자와는 한국어로 대화한다.

## 프로젝트 목적

Playwright와 Selenium을 TypeScript로 나란히 비교 학습하는 monorepo. 프로덕션 테스트 하네스가 아니라 **동일 시나리오를 두 프레임워크로 구현해 차이를 학습**하는 것이 목표.

### 구조 (pnpm + turbo workspaces, all TypeScript)
- `apps/demo-web` — 로컬 Vite로 서빙하는 HTML, 안정적인 테스트 타깃
- `packages/playwright-suite` — `@playwright/test`
- `packages/selenium-suite` — `selenium-webdriver` + Mocha + Chai + ts-node
- `packages/shared-utils` (`@ta/shared-utils`) — 두 스위트가 공유하는 env/logger/faker
- `packages/test-data` (`@ta/test-data`) — 두 스위트가 공유하는 fixture JSON
- `tests/` — 단계별 학습용 번호 폴더 (`01-basics`, `02-...`)

로컬 데모 앱 + 공개 연습 사이트(saucedemo, the-internet.herokuapp.com) 둘 다 활용한다.

### 작업할 때 적용
- 시나리오를 추가할 때는 **양쪽 스위트에 페어로** 추가해서 비교 균형을 유지한다
- 인증/데이터는 `@ta/test-data`로 공유하고 스위트별 중복 금지
- 프레임워크 레벨 차이는 `docs/comparison.md`에 기록한다

## 멘토링 받은 학습 흐름

1. 먼저 **직접 코드를 작성**하면서 자동화 흐름의 감을 익힌다
2. 그 다음 GPT/Claude에게 특정 테스트 웹페이지를 잡고 자동화 코드를 짜달라고 요청한다
3. AI가 생성한 코드를 **역으로 분석**해서 본인이 떠올리지 못했던 자동화 방법/패턴을 학습한다

핵심은 "AI에게 시키기"가 아니라 **"직접 짠 뒤 비교 학습"**. 셀렉터 전략, 대기 방식, POM 패턴, 헬퍼 추상화 같은 본인 사고 범위 밖의 접근법을 발견하는 것이 목적.

### Claude가 코드 요청을 받았을 때
- 사용자가 새 시나리오를 짤 때는 본인 시도를 먼저 끝까지 마치도록 유도
- "코드 짜줘"라고 하면 그냥 짜주기 전에, 사용자가 작성한 버전이 있는지 먼저 확인하고 **비교/대조 관점**에서 설명
- 대안 코드를 제시할 때는 **"왜 이렇게 했는지"** (셀렉터 선택, 대기 전략, 추상화 수준)를 함께 설명해서 역분석 학습이 가능하도록 한다
