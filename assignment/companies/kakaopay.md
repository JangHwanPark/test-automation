# 카카오페이 (KakaoPay) · QA 채용 조사

> **조사일**: 2026-05-24
> **참고**: 카카오 자회사 중 **QA 자동화 채용이 가장 활발**한 회사. SDET 성격이 강함.

## 1. 회사 / 도메인 개요
- **도메인**: 핀테크 (간편결제, 송금, 자산관리, 대출, 보험, 증권)
- **계열**: 카카오 자회사
- **QA 조직**: **QA팀 PQA 파트** (Product QA 추정)

## 2. 채용 전형 절차

```
서류 → 1차 인터뷰 → 2차 인터뷰 → 처우 협의 → 최종 합격
```

> **별도 사전과제 없음**. 대신 포트폴리오 제출 + 인터뷰 중심.

## 3. 모집 조건 (QA 자동화 엔지니어 기준)

### 필수
- **경력 3년 이상**
- Python / Java / JavaScript 중 하나로 모바일·웹·API 자동화 테스트 **코드 설계·구현** 가능

### 기술 스택 (요구사항)
| 카테고리 | 도구 |
|---|---|
| 백엔드 프레임워크 | Flask / Django / FastAPI / SpringBoot |
| 모바일 자동화 | Appium, Playwright |
| 웹 자동화 | Selenium, Playwright |
| API 자동화 | Postman / Insomnia / SoapUI |

### 주요 업무
- 모바일 / API 자동화 테스트 **설계·개발·운영**
- **QA 플랫폼 개발**을 통한 생산성 향상

## 4. 과제 / 포트폴리오 요구사항

별도 사전과제는 없지만 **포트폴리오 제출 시**:
- FastAPI / Flask / Django **중 하나 선택**
- 프로젝트 소개 + 본인 담당 역할 + 스킬셋 + 수행 과정 + 성과를 **상세히** 작성
- 사실상 자동화 프레임워크 / QA 플랫폼 구축 경험이 핵심 평가 포인트

## 5. 준비 포인트

- **자동화 코드 설계 능력**: SDET 성격. 단순 테스트 작성이 아니라 **프레임워크 구축** 경험이 변별점
- **QA 플랫폼 개발 경험**: 자체 테스트 관리·실행 플랫폼을 만들어 본 경험이 있으면 강점
- **백엔드 프레임워크 1개 + 자동화 도구 다수**: 풀스택 SDET 역량 요구
- **포트폴리오 = 사실상 사전과제**: 구체적 수치·아키텍처 다이어그램·트레이드오프 정리

## 6. 본 레포 `assignment/` 매핑

| 카카오페이 특화 | 본 레포 |
|---|---|
| 결제 / 송금 / 환불 도메인 | [E-03](../requirements/exam03/README.md), [E-04](../requirements/exam04/README.md) |
| API 자동화 | [packages/api-suite/](../../packages/api-suite/) (Playwright `request` 기반) |
| 웹 자동화 | [packages/playwright-suite/](../../packages/playwright-suite/) |
| 자동화 실기 답안 양식 | [A-01](../automation/au01/README.md) |

## 7. 출처
- [QA 자동화 엔지니어 - QA팀 PQA파트 (카카오페이 공식)](https://kakaopay.career.greetinghr.com/o/143261)
- [QA 자동화 엔지니어 PQA파트 (비즈니스피플)](https://www.bzpp.co.kr/biz/businessDetailView/BR250116A00277)
- [공동체 카카오페이 QA 자동화 엔지니어 (네카라쿠배)](https://www.nklcb.net/jobList/post/682b658ea48b1530e08aa48b)
- [카카오페이 QA 엔지니어 채용 (원티드)](https://www.wanted.co.kr/wd/109505)
- [카카오페이 채용 (그리팅)](https://kakaopay.career.greetinghr.com/ko/main)
