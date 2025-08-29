# 🌳 Memory Forest - AI 기반 치매 케어 인지 훈련 플랫폼

> AI 기술을 활용하여 치매 환자와 가족에게 실질적인 도움을 제공하는 혁신적인 서비스

---

## 📋 프로젝트 개요

<table>
<tr>
<td width="40%">

<div align="center">
<img width="300" height="260" alt="Memory Forest Logo" src="https://github.com/user-attachments/assets/b5b1177a-1a31-42bb-8168-12ea94fe5aa8" />
</div>

</td>
<td width="60%">

### 서비스 소개
**"소중한 추억을 활용한 개인 맞춤형 인지 훈련으로 치매를 예방하는 디지털 헬스케어 서비스"**

### 핵심 기능
- **AI 기반 콘텐츠 분석**: 개인화된 콘텐츠 생성
- **인지 훈련 게임**: 이미지-명사 매칭 게임
- **음성 일기 & 감정 분석**: GPT 기반 감정 상태 분석
- **진행도 추적**: 다차원 성과 분석 및 모니터링

### 기술 스택
- **Frontend**: React, JavaScript
- **Backend**: Spring Boot, Java 17
- **AI**: Python, FastAPI, Word2Vec, OpenAI GPT
- **Database**: MySQL, Redis
- **Infra**: Docker, AWS

</td>
</tr>
</table>

---

## 👥 팀 멤버 & 개발 일정

<table>
<tr>
<td width="35%">

<div align="center">
<img src="https://github.com/user-attachments/assets/24be5165-d2d8-4b54-b6da-14b41abdd4a4" width="320px" alt="팀 사진">
</div>

<br>

<table>
<tr>
<td align="center" width="50%">
<a href="https://github.com/eunchaipark">
<img src="https://avatars.githubusercontent.com/eunchaipark" width="80px;" alt=""><br>
<b>👑 박은채</b>
</a>
</td>
<td align="center" width="50%">
<a href="https://github.com/Potatoeunbi">
<img src="https://avatars.githubusercontent.com/Potatoeunbi" width="80px;" alt=""><br>
<b>이은비</b>
</a>
</td>
</tr>
<tr>
<td align="center" width="50%">
<a href="https://github.com/seulinate">
<img src="https://avatars.githubusercontent.com/seulinate" width="80px;" alt=""><br>
<b>김이슬</b>
</a>
</td>
<td align="center" width="50%">
<a href="https://github.com/gho94">
<img src="https://avatars.githubusercontent.com/gho94" width="80px;" alt=""><br>
<b>김건호</b>
</a>
</td>
</tr>
</table>

</td>
<td width="65%">

### 📅 개발 일정
**총 개발 기간: 2025년 6월 16일 ~ 8월 21일 (9주)**

| 기간 | 단계 | 주요 활동 |
|------|------|-----------|
| **06.16-06.30** | 기획 & 설계 | 요구사항 분석, 아키텍처 설계, DB 스키마, UI/UX 프로토타입 |
| **07.01-08.14** | 개발 & 구축 | React 프론트엔드, Spring Boot 백엔드, AI 모델 학습, Docker 환경 |
| **08.15-08.21** | 테스트 & 배포 | 통합 테스트, AWS 배포, 성능 최적화, 문서화 |

<br>

### 📈 완성도
| 항목 | 완성률 |
|------|--------|
| 인프라 구축 | ✅ 100% |
| AI 서비스 | ✅ 100% |
| 백엔드 시스템 | ✅ 100% |
| 프론트엔드 | ✅ 100% |

</td>
</tr>
</table>

---

## ✨ 주요 기능

<details>
<summary><strong>🎮 AI 게임 기능</strong></summary>

<table>
<tr>
<td width="50%">

### 게임 기능
| 기능 | 설명 |
|------|------|
| 게임 만들기 | 개인 사진 업로드로 맞춤형 게임 생성 |
| AI 오답 생성 | Word2Vec 모델 자동 유사 오답 생성 |
| 난이도별 점수 | 유사도 분석 기반 차등 점수 부여 |
| 실시간 분석 | AI 기반 게임 결과 분석 |

</td>
<td width="50%">

### AI 모델 정보
| 항목 | 내용 |
|------|------|
| 모델 | Word2Vec + Skip-gram |
| 학습 데이터 | 31,000건 (네이버 블로그 & 뉴스) |
| 최적화 | Optuna 하이퍼파라미터 튜닝 |
| 처리 속도 | FastAPI 실시간 응답 |

</td>
</tr>
</table>

</details>

<details>
<summary><strong>🎙️ 음성 일기 & 감정 분석</strong></summary>

<table>
<tr>
<td width="50%">

### 기록 기능
| 기능 | 설명 |
|------|------|
| 음성 일기 | 매일 음성 일기 작성 (1일 1회) |
| 음성 인식 | Web Speech API 음성-텍스트 변환 |
| 감정 추적 | 시간별 감정 변화 패턴 분석 |
| 차트 시각화 | 실시간 감정 상태 차트 |

</td>
<td width="50%">

### AI 분석 정보
| 항목 | 내용 |
|------|------|
| 모델 | OpenAI GPT-5-nano |
| 성능 | GPQA 88.4%, MMMU 84.2% |
| 분석 항목 | 기쁨, 슬픔, 분노, 두려움 등 |
| 출력 형태 | 다차원 감정 점수 |

</td>
</tr>
</table>

</details>

<details>
<summary><strong>🔒 보안 & 인증</strong></summary>

| 보안 기능 | 인증 시스템 |
|-----------|------------|
| CSRF 보호 | JWT 토큰 (Access 15분 + Refresh 2주) |
| 패스워드 암호화 | OAuth2 소셜 로그인 (네이버, 카카오) |
| 권한 관리 | Redis 세션 관리 |
| 보안 헤더 (XSS, 클릭재킹 방지) | Spring Security |

</details>

---

## 🏗️ 시스템 아키텍처

<details>
<summary><strong>기술 스택 & 구조도</strong></summary>

### 기술 스택
<img width="100%" alt="기술 스택" src="https://github.com/user-attachments/assets/a6fe9668-a846-4957-8f9c-67538a8f1c7f" />

### 아키텍처 구조
<img width="100%" alt="시스템 아키텍처" src="https://github.com/user-attachments/assets/46d24a65-2cc8-48c3-a0b6-a424234b808e" />

</details>

---

## 📱 서비스 화면

<details>
<summary><strong>주요 화면 구성</strong></summary>

### 회원가입 & 로그인
| 초기화면 | 소셜 로그인 | 정보 입력 |
|----------|------------|-----------|
| <img width="200" src="https://github.com/user-attachments/assets/898e5c7d-fbef-432a-9b4e-7ca0febe5d1c" /> | <img width="200" src="https://github.com/user-attachments/assets/421056ae-1aff-42e6-a980-591ba6bf89e8" /> | <img width="200" src="https://github.com/user-attachments/assets/a38003e5-b64b-4723-a62d-ffbe32185237" /> |

### 게임 & 음성 일기
| 게임 실행 | 음성 녹음 | 감정 분석 |
|-----------|-----------|-----------|
| <img width="200" src="https://github.com/user-attachments/assets/aa698abd-f88f-48f6-bbe8-871560404ddb" /> | <img width="200" src="https://github.com/user-attachments/assets/c47e346a-5a5d-469f-a7de-346b3fc99cf1" /> | <img width="200" src="https://github.com/user-attachments/assets/901265ae-922b-4744-9d81-1724f89a326e" /> |

### PDF 보고서
| 게임 결과 | 감정 분석 | 종합 리포트 |
|-----------|-----------|-------------|
| <img width="200" src="https://github.com/user-attachments/assets/f68f158f-66e0-4058-bd85-5ff71ea00d3b" /> | <img width="200" src="https://github.com/user-attachments/assets/3dc54d8a-41cd-4f09-9830-6411256841f1" /> | <img width="200" src="https://github.com/user-attachments/assets/c1e30462-cadb-4b93-a978-db4b3ca73459" /> |

</details>

---

## 🚀 빠른 시작

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/eunchaipark/Memory_Forest_eunchai.git
cd Memory_Forest_eunchai

# Docker 환경 실행
cd docker
docker-compose build
docker-compose up -d
```

### 사전 요구사항
| 구성요소 | 버전 |
|----------|------|
| Java | 17+ |
| Node.js | 18+ |
| Python | 3.10+ |
| Docker | Latest |

---

## 📋 상세 명세서

<details>
<summary><strong>설계 문서</strong></summary>

| 문서 종류 | 링크 |
|-----------|------|
| 유스케이스 명세서 | [📋 상세보기](https://github.com/user-attachments/assets/5111b43b-fed5-4349-b7a0-5827dd251172) |
| 기능 명세서 | [📋 상세보기](https://github.com/user-attachments/assets/532eb12e-7a16-4b38-b5cf-3fd1c3f6f74b) |
| ERD 명세서 | [📋 상세보기](https://github.com/user-attachments/assets/b1443d7b-ff15-412a-bd7a-f7e0a0ec78f0) |

</details>

---

**© 2025 Memory Forest. All rights reserved.**

> **"함께 만들어가는 소중한 기억들, 기억숲과 함께하세요"**
