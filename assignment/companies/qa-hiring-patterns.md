# QA Hiring Patterns · 2026 QA 채용 트렌드

> **조사일**: 2026-05-24
> **출처**: 본 폴더의 회사별 조사 자료를 종합

## 1. 채용 절차 일반 흐름

```
서류 → [코딩테스트 / 사전과제 / 사전테스트] → 1차 면접 → 2차 면접 → [컬처핏] → 처우 → 최종
```

회사별 차이는 **2단계**의 형식에 집중되어 있다.

## 2. 과제 형식 분류

| 분류 | 회사 | 형식 | 기간 |
|---|---|---|---|
| **테이크홈 구현 과제** | 토스, 카카오, 당근, 보이저엑스 | 코드 / 문서 작성 후 제출 | 48시간 ~ 1주일 |
| **코딩테스트 + 라이브 코딩** | 쿠팡, 우아한형제들 | 알고리즘 + 실시간 면접 | 온라인 1~4시간 |
| **시간 제한 사전테스트** | 크림(추정), 일부 게임 QA | 필기 + TC + 단답형 | 1~2시간 (1차 면접과 같은 날) |
| **포트폴리오 + 인터뷰** | 카카오페이 (QA 자동화) | 별도 과제 없이 포트폴리오로 대체 | - |
| **인턴십 → 전환** | 넥슨네트웍스 | 6개월 채용연계형 | 6개월 |

### 과제 기간 매트릭스
- **48시간 (이틀)**: 토스 — 깊이 우선
- **5~7일**: 당근 — 시간 충분, 완성도 우선
- **1주일**: 카카오, 보이저엑스 — 발표 자료 / 메일 답변 작성
- **시간 제한 (1~2시간)**: 크림 — 시간 압박 환경 적응 필요

## 3. 과제 내용 일반 패턴 (brunch.co.kr/@swtestrecipe 종합)

### A. 사전과제 (Assignment) — "TC 작성 + α" 구조

| 유형 | 출제 형식 | 검증 |
|---|---|---|
| **기본형** | 로그인 / 결제 등 주요 기능 → 유저 시나리오 기반 TC | TC 설계 능력 |
| **고급형** | 상태전이·경계값 풍부한 기능 → 설계 기법 활용 TC | 기법 응용 |
| **실무형** | 실제 사례 → 테스트 계획 + Scope + TC 통합 | 실무 대응력 |

### B. 필기전형 — 이론 + 실무

#### B-1. QA 공통 전문 지식
- 소프트웨어 공학 기본 (프로젝트 제약 3요소: 품질·비용·일정 / SDLC 단계)
- 테스팅 원리 (살충제 패러독스, 7가지 테스팅 원칙)
- Severity vs Priority
- Black / White / Grey Box

#### B-2. 모바일앱 / 실무
- 테스트 설계 기법 (동등 분할 / 경계값 / 상태전이 / 결정 테이블 / 페어와이즈)
- 테스팅 전략 수립 (비즈니스 문제 → 어디에 초점?)
- 테스트 커버리지 (결정 / 조건 / MC/DC)

## 4. 2026 기술 트렌드

### 자동화 도구 표준화
- **Playwright 경험이 거의 모든 SDET / QA 자동화 채용공고에 명시**
- Selenium은 여전히 요구되지만, Playwright 추세 강함
- 모바일: Appium 표준
- API: Postman / Insomnia / SoapUI

### 자동화 직군 분리
- QA Engineer (기능 QA 중심)
- QA 자동화 / SDET (코드 작성 중심, 경력 3년+ 요구)
- QA 플랫폼 엔지니어 (QA 도구 자체를 만드는 직군) — 카카오페이 등

### 언어 / 프레임워크
- **Python / Java / JavaScript** 중 하나 + 백엔드 프레임워크(Flask / Django / FastAPI / SpringBoot) 경험

## 5. 평가 키워드 (블로그 후기 종합)

면접관이 자주 확인하는 포인트:

| 키워드 | 내용 |
|---|---|
| QA vs 테스터 | "QA는 테스트가 전부가 아님"을 인지하고 설명할 수 있는가 |
| 의사결정 기준 | 경험에 근거한 우선순위 / 트레이드오프 판단 기준이 있는가 |
| 프로세스 이해 | 배포 **전/후를 구분**해 QA / Test / Release 단계 설명 가능한가 |
| 리스크 기반 | 한정된 자원 내 무엇을 먼저 테스트할지 판단 가능한가 (게임 QA 특히) |
| 자동화 아키텍처 | 단순 작성이 아니라 **프레임워크 설계 / 트레이드오프** 설명 가능한가 (SDET) |
| 발화 능력 | 라이브 코딩 / 발표 시 사고 과정을 verbalize 할 수 있는가 |

## 6. 컬처핏 인터뷰 필수화

거의 모든 메이저 IT 기업이 **별도 컬처핏 단계** 운영:
- 토스 — 8가지 가치 (직접 질문은 안 함, 답변 톤이 가치에 부합해야)
- 당근 — "일 온도", 일하는 방식 적합도
- 크림 — 기업문화 적합도 검사 (별도 단계)
- 쿠팡 — 영문 컬처핏 1시간

준비 방법: 회사 블로그·미디엄·인터뷰 영상을 학습해 회사가 추구하는 가치 / 일하는 방식을 흡수.

## 7. 본 레포 `assignment/` 활용 매핑

| 회사 유형 | 본 레포 카테고리 |
|---|---|
| 테이크홈 (TC + 전략) | T (testcases), R (requirements) |
| 라이브 코딩 / SDET | A (automation) + 알고리즘 별도 |
| 시간 제한 사전테스트 | R + T + B 통합 풀이 연습 |
| 포트폴리오 (자동화) | A + 본 레포 packages/ 코드 자체가 포트폴리오 |
| 게임 QA | P (scenarios — 리스크 기반 우선순위) |

## 8. 회사별 참조

| 회사 | 문서 |
|---|---|
| 크림 | [kream.md](kream.md) |
| 토스 | [toss.md](toss.md) |
| 보이저엑스 | [voyagerx.md](voyagerx.md) |
| 카카오 | [kakao.md](kakao.md) |
| 카카오페이 | [kakaopay.md](kakaopay.md) |
| 우아한형제들 | [baemin.md](baemin.md) |
| 쿠팡 | [coupang.md](coupang.md) |
| 무신사 | [musinsa.md](musinsa.md) |
| 당근 | [daangn.md](daangn.md) |
| 넥슨네트웍스 | [nexon.md](nexon.md) |

## 9. 일반 QA 학습 자료 (외부)

- [\[관리자용\] QA 채용을 위한 과제와 필기전형 예시 (brunch)](https://brunch.co.kr/@swtestrecipe/43)
- [QA 면접 질문 프레임 (brunch)](https://brunch.co.kr/@swtestrecipe/18)
- [쏘카 QA는 무슨 일을 하고 어떻게 일하나요? (SOCAR Tech)](https://tech.socarcorp.kr/qa/2022/03/18/probationary-period_QA.html)
- [무신사 QA 엔지니어 업무 (Medium)](https://medium.com/musinsa-tech/qaengineer-roles-and-responsibilities-d1fc088c7a43)
- [면접 때 꼭 나오는 질문 — QA 편 (Medium 버즈니)](https://buzzni.medium.com/%EB%B2%84%EC%A6%88%EB%8B%88-%EB%A9%B4%EC%A0%91-%EC%B2%B4%ED%81%AC-%EB%A6%AC%EC%8A%A4%ED%8A%B8-8d167945221d)
- [40 QA Interview Questions and Answers (Guru99, 영문)](https://www.guru99.com/qa-interview-questions-answers.html)
- [QA - 나무위키](https://namu.wiki/w/QA)
