# UIUX Toolbox - README

이 프로젝트는 HTML, CSS, JavaScript로 분리되어 있으며, **로컬 서버 없이도 작동하는 자체 웹 프로그램**입니다.

원본 코드는 𝕏 사용자 ``@tozz_aaaa``의 ``Design 용어집``입니다.

**[UIUX-Toolbox 실행하기](<https://jtech-co.github.io/UIUX-Toolbox/index.html>)**

## 파일 구조

```
UIUX-Toolbox/
├── index.html          # HTML 구조
├── styles.css          # 모든 CSS 스타일
├── script.js           # JavaScript 로직 및 용어 데이터 (50개 용어)
└── README.md           # 이 파일
```

## 주요 특징

- ✅ **로컬 서버 불필요**: 다운로드 후 `file://` 프로토콜로 직접 열어도 작동합니다.
- ✅ **단일 파일 실행**: `index.html`만 열면 바로 사용 가능합니다.
- ✅ **용어 데이터 내장**: `script.js`에 50개 용어가 직접 포함되어 있습니다.

## 용어 추가 방법

새로운 용어를 추가하려면 `script.js` 파일을 수정하세요:

1. `script.js` 파일을 엽니다.
2. `const terms = [...]` 배열을 찾습니다.
3. 배열 끝에 새로운 용어 객체를 추가합니다:

```javascript
{
  "name": "New Term",
  "kor": "새 용어",
  "cat": "카테고리",
  "desc": "설명",
  "visualHTML": "<div>...</div>",
  "css": ".class { ... }"
}
```

4. 파일을 저장하고 `index.html`을 새로고침하면 바로 반영됩니다.

## 사용 방법

1. `index.html` 파일을 더블클릭하여 브라우저에서 엽니다.
2. 로컬 서버 없이도 정상적으로 작동합니다.
3. 검색 및 필터 기능을 사용하여 용어를 찾아보세요.

## 용어 데이터 형식

각 용어는 다음 형식을 따릅니다:

```javascript
{
  "name": "영문 용어명",
  "kor": "한글 용어명",
  "cat": "카테고리 (예: 아이콘, 레이아웃, UI요소 등)",
  "desc": "용어 설명",
  "visualHTML": "시각적 미리보기 HTML",
  "css": "CSS 코드"
}
```

## 참고사항


- 모든 용어 데이터는 `script.js`의 `terms` 배열에 포함되어 있습니다.
