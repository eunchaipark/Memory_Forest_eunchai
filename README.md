# 🌳 **Memory Forest - AI 기반 치매 케어 인지 훈련 플랫폼**

> **AI 기술을 활용하여 치매 환자와 가족에게 실질적인 도움을 제공하는 혁신적인 서비스**  

<br><br>

## 📋 **프로젝트 개요**

### 🌟 **서비스 소개**

- "소중한 추억을 활용한 개인 맞춤형 인지 훈련으로 치매를 예방하는 디지털 헬스케어 서비스"

### 📈 **배경 및 필요성**

- 치매 환자 증가: 경도인지장애 환자 30만명 돌파
- 조기 발견의 중요성: 인지활동의 증가가 인지보존을 저극하거나 증가시킬 수 있으며, 인지활동의 낮은 수준에 비해 높은 수준인 사람에게 경도인지장애나 알츠하이머 치매진단의 위험성이 현저하게 감소
- 개인화된 케어: 노인성 질환의 치매에 대한 관심이 어느 때보다 상승

### 🎯 **서비스 목표**

- 기록자 연령대 고려한 맞춤형 UI/UX 페이지 설계
- 가족 간 추억을 활용한 개인 맞춤형 AI 인지 게임 구현
- 음성 일기 작성 및 OPEN AI 기반 감정 분석 차트 제공

<br><br>
## 📅 개발 일정

**총 개발 기간: 2025년 6월 16일 ~ 8월 21일 (약 9주, 2개월)**

| 기간 | 단계 | 주요 활동 |
|------|------|-----------|
| **06.16 - 06.30** | 🎯 프로젝트 기획 및 설계 | 요구사항 분석 및 기획<br>시스템 아키텍처 설계<br>DB 스키마 설계<br>UI/UX 프로토타입 |
| **07.01 - 08.14** | 🛠️ 핵심 기능 개발 및 AI 모델 구축 | React 프론트엔드 개발<br>Spring Boot 백엔드 API<br>AI 모델 학습 및 FastAPI<br>Docker 환경 구성 |
| **08.15 - 08.21** | 🧪 통합 테스트 및 배포 준비 | 전체 시스템 통합 테스트<br>AWS 배포 환경 구성<br>성능 최적화<br>최종 검수 및 문서화 |


### **🚀 핵심 기능**
- **AI 기반 콘텐츠 분석**: 이미지 및 텍스트 분석을 통한 개인화된 콘텐츠 생성
- **인지 훈련 게임**: 이미지-명사 매칭 게임을 통한 인지 능력 향상
- **진행도 추적**: 다차원 성과 분석 및 트렌드 모니터링
- **가족 공유 시스템**: 환자의 진행 상황을 가족과 공유하여 돌봄 지원

<br>

---

<br>

## ✨ 주요 기능

### 🎮 **게임 기능 (AI 연동)**
- **게임 만들기**: 개인 사진과 정보를 업로드하여 맞춤형 게임 생성
- **AI 오답 생성**: 동행자가 입력한 정답을 기반으로 Word2Vec + Skip-gram 모델이 자동으로 유사한 오답 생성
- **난이도별 점수**: AI가 오답의 유사도를 분석하여 차등 점수 자동 부여
- **회원가입**: 간편한 소셜 로그인 (네이버, 카카오) 지원
- **기록자 추가**: 가족 구성원 정보 등록 및 관리
- **게임 실행**: 실시간 게임 진행 및 AI 기반 결과 분석

### 🎙️ **기록 기능 (AI 연동)**
- **음성 일기**: 매일 음성으로 일기 작성 (1일 1회 제한)
- **음성 인식**: Web Speech API를 통한 정확한 음성-텍스트 변환
- **AI 감정 분석**: GPT-5-nano가 일기 내용을 분석하여 감정 상태 점수화
- **감정 추적**: 다차원 감정 점수 및 시간별 변화 패턴 분석

### 📊 **분석 및 관리**
- **AI 대시보드**: 게임 성과 및 감정 상태 AI 분석 결과 시각화
- **PDF 보고서**: AI가 분석한 상세 활동 내역 및 통계 보고서 생성
- **진행도 추적**: AI 기반 인지 훈련 성과 모니터링

### 🤖 **AI 핵심 기술**

#### 🎯 **게임 생성 AI**
- **모델**: Word2Vec + Skip-gram
- **워크플로우**: `동행자 정답 입력` → `AI 유사어 분석` → `오답 자동 생성` → `난이도별 점수 부여`
- **기능**:
  - 정답과 유사도가 적절한 오답 3개 자동 생성
  - 난이도별 게임 자동 생성
  - 비슷한 오답 방지
  - 사용자 맞춤형 문제 제공
  - 유사도에 따른 차등 점수 시스템

**📈 AI 워크플로우**
**🔧 모델 및 데이터**
- **최적화**: Optuna를 활용한 하이퍼파라미터 튜닝
- **학습데이터**: 네이버 블로그 & 뉴스 크롤링 데이터 약 31,000건
- **형식**: JSON → 토큰화된 텍스트
- **실시간 처리**: FastAPI를 통한 빠른 AI 응답

#### 🔍 **감정 분석 AI**
- **모델**: OpenAI GPT-5-nano
- **성능**: GPQA 88.4%, MMMU 84.2%
- **워크플로우**: `음성 일기` → `텍스트 변환` → `GPT-5 감정 분석` → `점수 산출` → `차트 시각화`
- **출력**: 기쁨, 슬픔, 분노, 두려움 등 다차원 감정 점수

<br>

---

<br>

## **🔒 보안 및 인증**
### **보안 기능**
- **CSRF 보호**: 크로스 사이트 요청 위조 방지
- **암호화**: 패스워드 암호화 저장
- **권한 관리**: 사용자별 접근 권한 제어
- **보안 헤더**: XSS, 클릭재킹 등 웹 보안 위협 방지
### **인증 시스템**
- **JWT 토큰**: Access Token(15분) + Refresh Token(2주)
- **OAuth2 소셜 로그인**: 네이버, 카카오 연동
- **Redis 세션 관리**: 토큰 저장 및 관리
- **Spring Security**: 인증/인가 및 보안 필터 처리


<br>

---

<br>

## 🏗️ **시스템 아키텍처**

### **기술 스택**
<img width="2264" height="935" alt="image" src="https://github.com/user-attachments/assets/a6fe9668-a846-4957-8f9c-67538a8f1c7f" />


### **아키텍처 구조**
<img width="1901" height="1075" alt="image" src="https://github.com/user-attachments/assets/46d24a65-2cc8-48c3-a0b6-a424234b808e" />


<br>

---

<br>


## 📋 **명세서**
### **유스케이스 명세서**
<img width="2241" height="1109" alt="image" src="https://github.com/user-attachments/assets/5111b43b-fed5-4349-b7a0-5827dd251172" />

### **기능 명세서**
<img width="2391" height="1197" alt="image" src="https://github.com/user-attachments/assets/532eb12e-7a16-4b38-b5cf-3fd1c3f6f74b" />

### **ERD 명세서**
<img width="2296" height="954" alt="image" src="https://github.com/user-attachments/assets/b1443d7b-ff15-412a-bd7a-f7e0a0ec78f0" />

<br>

---

<br>

## 서비스 영상 및 화면 구성
### 📹 **화면 구성**

**회원가입**


| <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/898e5c7d-fbef-432a-9b4e-7ca0febe5d1c" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/421056ae-1aff-42e6-a980-591ba6bf89e8" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/a38003e5-b64b-4723-a62d-ffbe32185237" /> |
|------|------|------|



**로그인**


| <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/2a7c0f99-cee1-480d-b337-c8cef0fbe2f3" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/ee31dc36-fde0-45d9-b211-b61a5b837249" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/1c7cb20d-1588-4226-9847-38d12474719b" /> |
|------|------|------|


**기록자 추가**


| <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/5b965897-a4e8-45e3-a3a7-abb15f070db6" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/b1348b30-776d-4491-9f7d-916766c8de5a" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/91917ba1-258e-443d-a356-796caebc467c" /> |
|------|------|------|


**게임 추가**


| <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/0edf74dd-180e-4e57-a632-108ff61c3595" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/d0d7e638-3607-410a-89b1-7d7440fb6c41" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/8b7d7c6e-d646-4181-8b9d-ab446dc85158" /> |
|------|------|------|

**게임 실행**



| <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/aa698abd-f88f-48f6-bbe8-871560404ddb" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/4fd6a975-6280-4b84-a5e9-4a8a681ced20" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/a68e4813-459a-4de3-8159-7f2079959186" /> |
|---|---|---|

| <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/a846fec1-e4ac-4a26-9570-58b224341d0d" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/40d81613-46d5-454e-ada6-0668a3177cfb" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/f6516c0c-c990-4f17-bbe1-7a2e685afa3c" /> |
|---|---|---|



**기록자 일기(음성 일기)**

| <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/c47e346a-5a5d-469f-a7de-346b3fc99cf1" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/e8e59d9a-33f6-4dda-a9ff-2595c9f8069f" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/60a38f0b-29f4-419a-806f-f3de191966cf" /> |
|------|------|------|


**알림/차트 확인**
| <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/901265ae-922b-4744-9d81-1724f89a326e" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/604e6519-9ef7-49f6-97f6-17eb7c89f4fa" /> | <img width="451" height="928" alt="image" src="https://github.com/user-attachments/assets/1863c566-0f9e-40f5-8c74-00fcd5341010" /> |
|------|------|------|



**게임/기록 결과 PDF 저장**
|<img width="589" height="755" alt="image" src="https://github.com/user-attachments/assets/f68f158f-66e0-4058-bd85-5ff71ea00d3b" />| <img width="588" height="753" alt="image" src="https://github.com/user-attachments/assets/3dc54d8a-41cd-4f09-9830-6411256841f1" /> | <img width="582" height="754" alt="image" src="https://github.com/user-attachments/assets/c1e30462-cadb-4b93-a978-db4b3ca73459" /> |
|------|------|------|

<br>

---

<br>



## 🚀 **빠른 시작**

### **사전 요구사항**
- Java 17+
- Node.js 18+
- Python 3.10+
- Docker & Docker Compose

### **개발 환경 구축**
```bash
# 1. 저장소 클론
git clone https://github.com/Potatoeunbi/memory-forest.git
cd memory-forest

# 2. Docker 환경 실행
cd ./docker
docker-compose build
dockeer-compose up -d
```
<br><br>




## 📈 **프로젝트 성과**
### ✅ **완성도**

- **인프라 구축**: 100%
- **AI 서비스**: 100%
- **백엔드 시스템**: 100%
- **프론트엔드**: 100%
- **최종 검증**: 100%

### ✅ **완료된 핵심 기능들**
- 사용자 대시보드, 게임 플레이 UI
- 음성 녹음 시스템, 실시간 차트
- 방문형 디자인, PDF 보고서 생성
- 소셜 로그인 UI, 모바일 최적화
- 음성 텍스트 변환

<br><br>


## 🤝 **기여하기**

### **개발 가이드**
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 📞 **연락처 및 지원**

### **팀 구성**
- **이은비**
- **박은채**
- **김건호**
- **김이슬**


### **연락처**
- **이메일**: leb6336@gmail.com
- **GitHub**: [https://github.com/Potatoeunbi/memory-forest](https://github.com/Potatoeunbi/memory-forest)

---

## 🙏 **감사의 말**

2025년 성과공유회 컨퍼런스 프로젝트로 개발된 기억숲은 치매 예방을 통한 사회적 가치 창출을 목표로 합니다.
WHO 권고안에 따른 인지능감소 및 치매의 위험도를 낮추기 위한 연구결과에 따르면, 인지활동의 증가가 인지보존을 저극하거나 증가시킬 수 있으며, 인지활동의 낮은 수준에 비해 높은 수준인 사람에게 경도인지장애나 알츠하이머 치매진단의 위험성이 현저하게 감소한다고 보고되었습니다.
저희 기억숲은 가족과 함께하는 AI 기반 치매 예방 및 관리 플랫폼을 개발하여, 인지저하 예방 및 개선 대상자 & 보호자의 행복한 삶을 보호하는 것을 목표로 합니다.

---

**© 2025 Memory Forest. All rights reserved.**

> **"🌳 함께 만들어가는 소중한 기억들, 기억숲과 함께하세요 🌳"**
