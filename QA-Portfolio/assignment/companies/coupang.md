# 쿠팡 (Coupang) · QA 채용 조사

> **조사일**: 2026-05-24
> **특이사항**: **영문 진행** (글로벌 회사). SDET 직군 위주.

## 1. 회사 / 도메인 개요
- **도메인**: 이커머스, 로켓배송, 쿠팡플레이, 쿠팡이츠
- **특성**: 미국 상장 글로벌 회사. 영문 커뮤니케이션 비중 높음
- **QA 직군**: SDET (Software Development Engineer in Test) 중심

## 2. 채용 전형 절차

```
지원 → 온라인 코딩테스트 (HackerRank) → 라이브 코딩 3회 + 컬처핏 → 최종
```

| 단계 | 비고 |
|---|---|
| 온라인 코테 | HackerRank, 3문제, **1시간 이내 풀이 가능 수준** |
| 라이브 코딩 | **1시간 × 3회**, 각 1문제 (조기 풀이 시 추가 문제 가능) |
| 컬처핏 | 별도 1시간 |
| 결과 통보 | **다음날 점심쯤** — 매우 빠름 |

## 3. 과제 형식 특성

### 온라인 코딩테스트
- 플랫폼: **HackerRank**
- 문제 특징: **서술이 긴 편**, 엣지 케이스 주의 필요
- 난이도: 상대적 표준 (1시간 내 3문제 풀이 가능)

### 라이브 코딩
- **2시간에 2문제** (1시간 × 2 라운드) — 첫 라운드 빠르게 풀면 1문제 추가 출제 가능
- 면접관이 옆에서 보면서 진행 → **사고 과정 verbalize** 중요

## 4. 준비 포인트

- **영문 커뮤니케이션**: 면접관 외국인 가능성. 영문 자기소개 + 기술 설명 준비
- **알고리즘 기본기**: SDET이라도 코테 비중 큼. 자료구조 / 알고리즘 LeetCode Medium 수준
- **엣지 케이스 우선**: HackerRank 문제는 서술이 길어 요구사항 누락 쉬움 → 입력 제약 조건 꼼꼼히
- **사고 과정 발화**: 라이브 코딩에서는 정답보다 **접근 과정 설명**이 중요
- **속도**: 결과 다음날 나옴. 다음 단계 빠르게 진행되니 일정 비워두기

## 5. 본 레포 `assignment/` 매핑

쿠팡은 알고리즘 / 라이브 코딩 중심이라 본 레포의 직접 매핑은 적음.

| 쿠팡 특화 | 본 레포 |
|---|---|
| 자동화 코드 작성력 (SDET) | [A (Automation)](../automation/README.md), [packages/playwright-suite/](../../packages/playwright-suite/) |
| 이커머스 도메인 | [E-01 신청/결제/승인](../requirements/exam01/README.md), [W-02 장바구니/결제](../requirements/warmup02/README.md) |

> 알고리즘 / 자료구조 준비는 별도 (LeetCode, 프로그래머스)로 진행 권장.

## 6. 출처
- [쿠팡 수시채용 합격 후기 (Yoon Sung)](https://unluckyjung.github.io/recruit_story/2022/03/18/Coupang/)
- [경력자 카카오모빌리티·쿠팡 코딩테스트 후기 (brunch)](https://brunch.co.kr/@@1ffm/4)
- [Coupang Tech feed (Programmers)](https://career.programmers.co.kr/posts/tag/Coupang(%EC%BF%A0%ED%8C%A1))
- [Interview tips (Coupang Careers)](https://www.coupang.jobs/en/interview-tips/)
- [쿠팡 신입 개발자들 인터뷰 (잡플래닛)](https://www.jobplanet.co.kr/contents/news-1150)
