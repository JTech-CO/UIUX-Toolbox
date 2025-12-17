// ----------------------------------------------------
// 크레딧 링크
// ----------------------------------------------------
const creditLink = document.getElementById('credit-link');
const transitionOverlay = document.getElementById('page-transition');

if (creditLink && transitionOverlay) {
    creditLink.addEventListener('click', function(e) {
        e.preventDefault();
        const targetUrl = this.href;

        // Fade Out
        transitionOverlay.classList.add('active');
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 500);
    });
}

// ----------------------------------------------------
// 푸터 링크
// ----------------------------------------------------
const footerLink = document.getElementById('footer-link');

if (footerLink && transitionOverlay) {
    footerLink.addEventListener('click', function(e) {
        e.preventDefault();
        const targetUrl = this.href;

        // Fade Out (크레딧 링크와 동일한 효과)
        transitionOverlay.classList.add('active');
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 500);
    });
}

// ----------------------------------------------------
// 용어 데이터
// ----------------------------------------------------
const terms = [
  {
    "name": "Hamburger Menu",
    "kor": "햄버거 메뉴",
    "cat": "아이콘",
    "desc": "가로 선 3개가 층층이 쌓인 모양으로, 클릭하면 숨겨진 메뉴(드로어)가 펼쳐짐을 의미합니다.",
    "visualHTML": "<div class=\"art-hamburger\"><span></span><span></span><span></span></div>",
    "css": ".hamburger {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 24px;\n    height: 18px;\n    cursor: pointer;\n}\n\n.hamburger span {\n    width: 100%;\n    height: 2px;\n    background: #333;\n    transition: 0.3s;\n}"
  },
  {
    "name": "Kebab Menu",
    "kor": "케밥 메뉴",
    "cat": "아이콘",
    "desc": "세로 점 3개(⋮) 모양. 주로 설정, 수정, 삭제 등의 '더보기' 메뉴를 열 때 사용합니다.",
    "visualHTML": "<div class=\"art-kebab\"><span></span><span></span><span></span></div>",
    "css": ".kebab {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n    padding: 4px;\n    cursor: pointer;\n}\n\n.kebab span {\n    width: 4px;\n    height: 4px;\n    background: #333;\n    border-radius: 50%;\n}"
  },
  {
    "name": "Meatball Menu",
    "kor": "미트볼 메뉴",
    "cat": "아이콘",
    "desc": "가로 점 3개(⋯) 모양. 케밥 메뉴와 기능은 같지만 가로 공간이 넉넉할 때 주로 사용합니다.",
    "visualHTML": "<div class=\"art-meatball\"><span></span><span></span><span></span></div>",
    "css": ".meatball {\n    display: flex;\n    gap: 4px;\n    padding: 4px;\n    cursor: pointer;\n}\n\n.meatball span {\n    width: 4px;\n    height: 4px;\n    background: #333;\n    border-radius: 50%;\n}"
  },
  {
    "name": "Bento Menu",
    "kor": "벤또(도시락) 메뉴",
    "cat": "아이콘",
    "desc": "3x3 그리드 형태의 아이콘. 구글 앱 모음처럼 여러 기능이나 앱 목록을 펼칠 때 씁니다.",
    "visualHTML": "<div class=\"art-bento\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>",
    "css": ".bento {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 2px;\n    width: 20px;\n    cursor: pointer;\n}\n\n.bento span {\n    width: 4px;\n    height: 4px;\n    background: #333;\n}"
  },
  {
    "name": "Footer",
    "kor": "푸터 (바닥글)",
    "cat": "레이아웃",
    "desc": "웹사이트 맨 아래에 위치하며 저작권(Copyright), 패밀리 사이트, 이용약관 등을 표시합니다.",
    "visualHTML": "<div class=\"art-footer-layout\"><div class=\"body\"></div><div class=\"foot\">Copyright © 2024</div></div>",
    "css": "footer {\n    background: #f9fafb;\n    padding: 40px 0;\n    text-align: center;\n    border-top: 1px solid #e5e7eb;\n    font-size: 0.8rem;\n    color: #6b7280;\n}"
  },
  {
    "name": "GNB",
    "kor": "GNB (대메뉴)",
    "cat": "레이아웃",
    "desc": "Global Navigation Bar. 사이트 최상단에 고정되어 모든 페이지로 이동 가능한 메인 메뉴입니다.",
    "visualHTML": "<div class=\"art-gnb-layout\"><div class=\"nav\"><span></span><span></span><span></span></div></div>",
    "css": ".gnb {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 60px;\n    background: white;\n    border-bottom: 1px solid #eee;\n    display: flex;\n    align-items: center;\n    padding: 0 20px;\n    z-index: 100;\n}"
  },
  {
    "name": "Hero Section",
    "kor": "히어로 섹션",
    "cat": "레이아웃",
    "desc": "메인 페이지 최상단에 위치한 크고 화려한 배너 영역입니다. 첫인상을 결정짓습니다.",
    "visualHTML": "<div class=\"art-hero\">Hero Title</div>",
    "css": ".hero {\n    width: 100%;\n    height: 400px;\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    font-size: 2rem;\n    font-weight: bold;\n}"
  },
  {
    "name": "Masonry",
    "kor": "메이슨리 레이아웃",
    "cat": "레이아웃",
    "desc": "핀터레스트처럼 높이가 제각각인 카드들을 벽돌 쌓듯이 빈틈없이 배치하는 방식입니다.",
    "visualHTML": "<div class=\"art-masonry\"><div class=\"col\"><div style=\"height:20px\"></div><div style=\"height:30px\"></div></div><div class=\"col\"><div style=\"height:35px\"></div><div style=\"height:15px\"></div></div><div class=\"col\"><div style=\"height:25px\"></div><div style=\"height:25px\"></div></div></div>",
    "css": ".masonry-container {\n    column-count: 3;\n    column-gap: 16px;\n}\n\n.masonry-item {\n    break-inside: avoid;\n    margin-bottom: 16px;\n    border-radius: 8px;\n}"
  },
  {
    "name": "LNB",
    "kor": "LNB (소메뉴)",
    "cat": "레이아웃",
    "desc": "Local Navigation Bar. 현재 메뉴의 하위 메뉴를 왼쪽이나 측면에 보여주는 영역입니다.",
    "visualHTML": "<div class=\"art-lnb\"><div class=\"art-lnb-side\"></div><div class=\"art-lnb-main\"></div></div>",
    "css": ".lnb-container {\n    display: flex;\n    min-height: 100vh;\n}\n\n.lnb-sidebar {\n    width: 250px;\n    background: #f3f4f6;\n    border-right: 1px solid #e5e7eb;\n}\n\n.lnb-content {\n    flex: 1;\n    padding: 20px;\n}"
  },
  {
    "name": "Card UI",
    "kor": "카드 UI",
    "cat": "UI요소",
    "desc": "이미지, 제목, 내용을 하나의 박스에 담아 독립적으로 보여주는 컨테이너입니다.",
    "visualHTML": "<div class=\"art-card\"><div class=\"img\"></div><div class=\"txt\"></div><div class=\"txt\" style=\"width:60%\"></div></div>",
    "css": ".card {\n    background: white;\n    border-radius: 12px;\n    overflow: hidden;\n    box-shadow: 0 4px 6px rgba(0,0,0,0.05);\n    border: 1px solid #eee;\n    transition: 0.2s;\n}\n\n.card:hover {\n    transform: translateY(-5px);\n}"
  },
  {
    "name": "Accordion",
    "kor": "아코디언",
    "cat": "UI요소",
    "desc": "제목을 클릭하면 숨겨진 내용이 아래로 펼쳐지는 UI. FAQ(자주 묻는 질문)에 주로 쓰입니다.",
    "visualHTML": "<div class=\"art-accordion\"><div class=\"art-acc-head\"></div><div class=\"art-acc-body\"></div></div>",
    "css": ".accordion-item {\n    border-bottom: 1px solid #eee;\n}\n\n.accordion-header {\n    padding: 16px;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n.accordion-content {\n    max-height: 0;\n    overflow: hidden;\n    transition: 0.3s;\n    padding: 0 16px;\n}\n\n.accordion-item.active .accordion-content {\n    max-height: 200px;\n    padding-bottom: 16px;\n}"
  },
  {
    "name": "Badge",
    "kor": "배지 (Badge)",
    "cat": "UI요소",
    "desc": "아이콘이나 텍스트 옆에 숫자(읽지 않음 수)나 상태(N)를 표시하는 작은 점이나 라벨입니다.",
    "visualHTML": "<div class=\"art-badge-icon\"><div class=\"art-badge-dot\"></div></div>",
    "css": ".badge {\n    position: absolute;\n    top: -5px;\n    right: -5px;\n    background: #ef4444;\n    color: white;\n    border-radius: 99px;\n    padding: 2px 6px;\n    font-size: 10px;\n    font-weight: bold;\n    border: 2px solid white;\n}"
  },
  {
    "name": "Avatar",
    "kor": "아바타",
    "cat": "UI요소",
    "desc": "사용자의 프로필 사진을 원형으로 보여주는 UI입니다.",
    "visualHTML": "<div class=\"art-avatar\"></div>",
    "css": ".avatar {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    object-fit: cover;\n    border: 1px solid #e5e7eb;\n}"
  },
  {
    "name": "Divider",
    "kor": "디바이더 (구분선)",
    "cat": "UI요소",
    "desc": "콘텐츠 간의 구획을 나누기 위해 긋는 선입니다. 시각적 호흡을 줍니다.",
    "visualHTML": "<div class=\"art-divider-wrap\"><div class=\"art-card\" style=\"height:20px; width:100%\"></div><div class=\"art-divider-line\"></div><div class=\"art-card\" style=\"height:20px; width:100%\"></div></div>",
    "css": ".divider {\n    width: 100%;\n    height: 1px;\n    background-color: #e5e7eb;\n    margin: 24px 0;\n}"
  },
  {
    "name": "Chip",
    "kor": "칩 (Chip)",
    "cat": "UI요소",
    "desc": "태그, 카테고리, 필터 등을 표시하는 알약 모양의 작은 컴포넌트입니다.",
    "visualHTML": "<div class=\"art-chip\">#Design</div>",
    "css": ".chip {\n    display: inline-block;\n    padding: 6px 14px;\n    border-radius: 99px;\n    background: #eef2ff;\n    color: #5457ff;\n    font-size: 0.9rem;\n    font-weight: 600;\n    border: 1px solid #c7d2fe;\n}"
  },
  {
    "name": "Toggle Switch",
    "kor": "토글 스위치",
    "cat": "컨트롤",
    "desc": "ON/OFF 상태를 직관적으로 전환하는 스위치 버튼입니다.",
    "visualHTML": "<div class=\"art-toggle\"><div class=\"knob\"></div></div>",
    "css": ".toggle {\n    width: 48px;\n    height: 26px;\n    background: #d1d5db;\n    border-radius: 26px;\n    position: relative;\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n.toggle::after {\n    content: '';\n    width: 20px;\n    height: 20px;\n    background: white;\n    border-radius: 50%;\n    position: absolute;\n    top: 3px;\n    left: 3px;\n    transition: 0.3s;\n}\n\n.toggle.active {\n    background: #5457FF;\n}\n\n.toggle.active::after {\n    left: 25px;\n}"
  },
  {
    "name": "Checkbox",
    "kor": "체크박스",
    "cat": "컨트롤",
    "desc": "여러 옵션을 중복 선택할 때 사용하는 네모난 박스입니다.",
    "visualHTML": "<div class=\"art-check\"></div>",
    "css": ".checkbox {\n    width: 18px;\n    height: 18px;\n    border: 2px solid #d1d5db;\n    border-radius: 4px;\n    cursor: pointer;\n    position: relative;\n}\n\n.checkbox:checked {\n    background: #5457FF;\n    border-color: #5457FF;\n}\n\n.checkbox:checked::after {\n    content: '✔';\n    color: white;\n    font-size: 12px;\n    position: absolute;\n    top: 0;\n    left: 2px;\n}"
  },
  {
    "name": "Radio Button",
    "kor": "라디오 버튼",
    "cat": "컨트롤",
    "desc": "여러 옵션 중 반드시 하나만 선택해야 할 때 쓰는 동그란 버튼입니다.",
    "visualHTML": "<div class=\"art-radio\"><div class=\"art-radio-in\"></div></div>",
    "css": ".radio {\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border: 2px solid #d1d5db;\n    border-radius: 50%;\n    cursor: pointer;\n    position: relative;\n}\n\n.radio:checked {\n    border-color: #5457FF;\n}\n\n.radio:checked::after {\n    content: '';\n    width: 10px;\n    height: 10px;\n    background: #5457FF;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}"
  },
  {
    "name": "Floating Label",
    "kor": "플로팅 라벨",
    "cat": "입력",
    "desc": "입력창을 클릭하면 라벨 이름이 위로 작아지며 올라가는 UI 패턴입니다.",
    "visualHTML": "<div class=\"art-input\"></div>",
    "css": ".input-group {\n    position: relative;\n    padding-top: 10px;\n}\n\n.input-field:focus + label {\n    transform: translateY(-20px);\n    font-size: 12px;\n    color: #5457FF;\n}"
  },
  {
    "name": "CTA Button",
    "kor": "CTA 버튼",
    "cat": "컨트롤",
    "desc": "Call To Action. '구매하기', '가입하기' 등 사용자의 핵심 행동을 유도하는 메인 버튼입니다.",
    "visualHTML": "<div class=\"art-cta\">Get Started</div>",
    "css": ".btn-cta {\n    background: #5457FF;\n    color: white;\n    padding: 12px 24px;\n    border-radius: 8px;\n    font-weight: bold;\n    border: none;\n    cursor: pointer;\n    transition: 0.2s;\n}\n\n.btn-cta:hover {\n    background: #4043cc;\n    transform: translateY(-2px);\n}"
  },
  {
    "name": "FAB",
    "kor": "FAB (플로팅 버튼)",
    "cat": "컨트롤",
    "desc": "화면 위에 둥둥 떠 있는 원형 버튼. '글쓰기' 같은 주요 액션을 위해 사용됩니다.",
    "visualHTML": "<div class=\"art-fab\">+</div>",
    "css": ".fab {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    width: 56px;\n    height: 56px;\n    background: #5457FF;\n    color: white;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 24px;\n    box-shadow: 0 4px 12px rgba(0,0,0,0.3);\n    cursor: pointer;\n}"
  },
  {
    "name": "Slider",
    "kor": "슬라이더",
    "cat": "컨트롤",
    "desc": "막대를 좌우로 움직여 수치(음량, 밝기 등)를 조절하는 컨트롤입니다.",
    "visualHTML": "<div class=\"art-slider\"><div class=\"art-slider-thumb\"></div></div>",
    "css": ".slider-track {\n    width: 100%;\n    height: 4px;\n    background: #e5e7eb;\n    border-radius: 2px;\n    position: relative;\n}\n\n.slider-thumb {\n    width: 16px;\n    height: 16px;\n    background: #5457FF;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    cursor: pointer;\n}"
  },
  {
    "name": "Stepper",
    "kor": "스테퍼",
    "cat": "컨트롤",
    "desc": "수량을 조절할 때 사용하는 -, + 버튼이 있는 UI입니다.",
    "visualHTML": "<div class=\"art-stepper\"><div class=\"art-step-btn\">-</div><div class=\"art-step-val\">1</div><div class=\"art-step-btn\">+</div></div>",
    "css": ".stepper {\n    display: flex;\n    border: 1px solid #e5e7eb;\n    border-radius: 4px;\n    overflow: hidden;\n    width: fit-content;\n}\n\n.step-btn {\n    padding: 8px 12px;\n    background: #f9fafb;\n    cursor: pointer;\n}\n\n.step-value {\n    padding: 8px 16px;\n    border-left: 1px solid #e5e7eb;\n    border-right: 1px solid #e5e7eb;\n}"
  },
  {
    "name": "Search Bar",
    "kor": "검색바",
    "cat": "입력",
    "desc": "사용자가 원하는 정보를 찾기 위해 키워드를 입력하는 필드입니다.",
    "visualHTML": "<div class=\"art-search\">Search</div>",
    "css": ".search-bar {\n    display: flex;\n    align-items: center;\n    border: 1px solid #e5e7eb;\n    border-radius: 24px;\n    padding: 10px 16px;\n    background: white;\n}\n\n.search-icon {\n    margin-right: 8px;\n    color: #9ca3af;\n}"
  },
  {
    "name": "File Upload",
    "kor": "파일 업로드",
    "cat": "입력",
    "desc": "파일을 드래그하거나 클릭하여 첨부할 수 있는 영역입니다.",
    "visualHTML": "<div class=\"art-upload\">↑</div>",
    "css": ".file-upload {\n    border: 2px dashed #d1d5db;\n    border-radius: 8px;\n    padding: 40px;\n    text-align: center;\n    color: #6b7280;\n    cursor: pointer;\n    background: #f9fafb;\n}\n\n.file-upload:hover {\n    border-color: #5457FF;\n    background: #eef2ff;\n}"
  },
  {
    "name": "Password Input",
    "kor": "비밀번호 입력",
    "cat": "입력",
    "desc": "비밀번호를 입력하는 필드로, 보안을 위해 문자가 가려져 보입니다.",
    "visualHTML": "<div class=\"art-pwd\"><div class=\"art-dots\"><div class=\"art-dot\"></div><div class=\"art-dot\"></div><div class=\"art-dot\"></div></div></div>",
    "css": ".password-input-group {\n    position: relative;\n    display: flex;\n    align-items: center;\n}\n\n.password-input {\n    padding-right: 40px;\n    width: 100%;\n}\n\n.toggle-visibility {\n    position: absolute;\n    right: 10px;\n    cursor: pointer;\n    color: #9ca3af;\n}"
  },
  {
    "name": "Text Area",
    "kor": "텍스트 영역",
    "cat": "입력",
    "desc": "여러 줄의 긴 텍스트를 입력받을 때 사용하는 큰 입력창입니다.",
    "visualHTML": "<div class=\"art-textarea\"></div>",
    "css": ".textarea {\n    width: 100%;\n    min-height: 120px;\n    padding: 12px;\n    border: 1px solid #d1d5db;\n    border-radius: 8px;\n    resize: vertical;\n}"
  },
  {
    "name": "Modal",
    "kor": "모달 (Modal)",
    "cat": "오버레이",
    "desc": "기존 화면 위에 뜨는 팝업창으로, 배경을 어둡게 처리(Dimmed)하여 집중도를 높입니다.",
    "visualHTML": "<div class=\"art-modal-bg\"><div class=\"art-modal-box\"></div></div>",
    "css": ".modal-overlay {\n    position: fixed;\n    inset: 0;\n    background: rgba(0,0,0,0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n}\n\n.modal-content {\n    background: white;\n    padding: 24px;\n    border-radius: 12px;\n    min-width: 300px;\n    box-shadow: 0 10px 25px rgba(0,0,0,0.1);\n}"
  },
  {
    "name": "Toast",
    "kor": "토스트 메시지",
    "cat": "오버레이",
    "desc": "화면 하단에 잠시 나타났다가 자동으로 사라지는 가벼운 알림 메시지입니다.",
    "visualHTML": "<div class=\"art-toast-wrap\"><div class=\"art-toast-msg\">저장 완료!</div></div>",
    "css": ".toast {\n    position: fixed;\n    bottom: 30px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #333;\n    color: white;\n    padding: 10px 20px;\n    border-radius: 30px;\n    opacity: 0;\n    animation: toastUp 3s forwards;\n}\n\n@keyframes toastUp {\n    10% { opacity: 1; bottom: 50px; }\n    90% { opacity: 1; bottom: 50px; }\n    100% { opacity: 0; bottom: 30px; }\n}"
  },
  {
    "name": "Tooltip",
    "kor": "툴팁",
    "cat": "오버레이",
    "desc": "마우스를 올리면 요소의 설명이 말풍선 형태로 나타나는 도움말 UI입니다.",
    "visualHTML": "<div class=\"art-tooltip-target\">?<div class=\"art-tooltip-box\">Help Text</div></div>",
    "css": ".tooltip-wrapper {\n    position: relative;\n    display: inline-block;\n}\n\n.tooltip-text {\n    visibility: hidden;\n    background: #333;\n    color: white;\n    padding: 6px 10px;\n    border-radius: 6px;\n    position: absolute;\n    bottom: 120%;\n    left: 50%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    opacity: 0;\n    transition: 0.2s;\n}\n\n.tooltip-wrapper:hover .tooltip-text {\n    visibility: visible;\n    opacity: 1;\n}"
  },
  {
    "name": "Bottom Sheet",
    "kor": "바텀 시트",
    "cat": "오버레이",
    "desc": "화면 아래에서 위로 올라오는 패널. 모바일에서 메뉴나 옵션을 띄울 때 표준처럼 사용됩니다.",
    "visualHTML": "<div class=\"art-btm-sheet-bg\"><div class=\"art-btm-sheet\"><span></span></div></div>",
    "css": ".bottom-sheet {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background: white;\n    border-radius: 20px 20px 0 0;\n    padding: 20px;\n    box-shadow: 0 -5px 15px rgba(0,0,0,0.1);\n    transform: translateY(100%);\n    transition: 0.3s;\n}\n\n.bottom-sheet.show {\n    transform: translateY(0);\n}"
  },
  {
    "name": "Drawer",
    "kor": "드로어 / 사이드바",
    "cat": "오버레이",
    "desc": "화면 측면에서 서랍처럼 슬라이딩되어 나오는 네비게이션 메뉴 영역입니다.",
    "visualHTML": "<div class=\"art-drawer-layout\"><div class=\"art-drawer-panel\"></div></div>",
    "css": ".drawer {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 280px;\n    background: white;\n    transform: translateX(-100%);\n    transition: 0.3s;\n    z-index: 200;\n    box-shadow: 2px 0 10px rgba(0,0,0,0.1);\n}\n\n.drawer.open {\n    transform: translateX(0);\n}"
  },
  {
    "name": "Breadcrumbs",
    "kor": "브레드크럼",
    "cat": "네비",
    "desc": "현재 위치 경로를 '홈 > 상의 > 티셔츠' 순으로 보여주는 네비게이션입니다.",
    "visualHTML": "<div class=\"art-bread\"><span>Home</span><span>Page</span></div>",
    "css": ".breadcrumb {\n    display: flex;\n    gap: 8px;\n    color: #6b7280;\n    font-size: 14px;\n}\n\n.breadcrumb span::after {\n    content: '>';\n    margin-left: 8px;\n}\n\n.breadcrumb span:last-child {\n    color: #5457FF;\n    font-weight: bold;\n}\n\n.breadcrumb span:last-child::after {\n    content: '';\n}"
  },
  {
    "name": "Pagination",
    "kor": "페이지네이션",
    "cat": "네비",
    "desc": "콘텐츠를 여러 페이지로 나눌 때 하단에 표시되는 [1] [2] [3] 숫자 버튼입니다.",
    "visualHTML": "<div class=\"art-pagination\"><div>1</div><div>2</div><div>3</div></div>",
    "css": ".pagination {\n    display: flex;\n    gap: 6px;\n}\n\n.page-link {\n    width: 32px;\n    height: 32px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid #e5e7eb;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n.page-link.active {\n    background: #5457FF;\n    color: white;\n    border-color: #5457FF;\n}"
  },
  {
    "name": "Tabs",
    "kor": "탭 (Tabs)",
    "cat": "네비",
    "desc": "한 영역 안에서 상단 버튼을 눌러 여러 콘텐츠를 번갈아 보여주는 방식입니다.",
    "visualHTML": "<div class=\"art-tabs\"><div class=\"art-tab-item\"></div><div class=\"art-tab-item\"></div></div>",
    "css": ".tab-header {\n    display: flex;\n    border-bottom: 2px solid #eee;\n}\n\n.tab-btn {\n    padding: 12px 20px;\n    cursor: pointer;\n    color: #666;\n}\n\n.tab-btn.active {\n    color: #5457FF;\n    border-bottom: 2px solid #5457FF;\n    margin-bottom: -2px;\n    font-weight: bold;\n}"
  },
  {
    "name": "Carousel",
    "kor": "캐러셀 / 슬라이더",
    "cat": "뷰",
    "desc": "이미지나 카드를 회전목마처럼 좌우로 넘겨서 볼 수 있는 UI입니다.",
    "visualHTML": "<div class=\"art-carousel\"><div></div><div></div><div></div></div>",
    "css": ".carousel {\n    display: flex;\n    overflow-x: auto;\n    scroll-snap-type: x mandatory;\n    gap: 16px;\n    padding: 20px 0;\n}\n\n.carousel-item {\n    flex: 0 0 80%;\n    scroll-snap-align: center;\n    background: #eee;\n    border-radius: 12px;\n    height: 200px;\n}"
  },
  {
    "name": "Tree View",
    "kor": "트리 뷰",
    "cat": "네비",
    "desc": "폴더 구조처럼 계층적인 데이터를 펼치고 접을 수 있는 목록 UI입니다.",
    "visualHTML": "<div class=\"art-tree\"><div class=\"art-branch\">Root</div><div class=\"art-branch\" style=\"margin-left:12px\">Child</div></div>",
    "css": ".tree-item {\n    padding: 4px 8px;\n    cursor: pointer;\n}\n\n.tree-children {\n    padding-left: 20px;\n    border-left: 1px solid #e5e7eb;\n}"
  },
  {
    "name": "Skeleton UI",
    "kor": "스켈레톤 UI",
    "cat": "기능",
    "desc": "로딩 중에 콘텐츠의 뼈대 형태를 미리 보여주어 체감 대기 시간을 줄여줍니다.",
    "visualHTML": "<div class=\"art-skeleton\"><div></div><div class=\"img\"></div><div></div></div>",
    "css": ".skeleton {\n    background: #eee;\n    height: 100px;\n    border-radius: 8px;\n    position: relative;\n    overflow: hidden;\n}\n\n.skeleton::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);\n    transform: translateX(-100%);\n    animation: shimmer 1.5s infinite;\n}\n\n@keyframes shimmer {\n    100% { transform: translateX(100%); }\n}"
  },
  {
    "name": "Sticky",
    "kor": "스티키 (Sticky)",
    "cat": "기능",
    "desc": "스크롤을 내려도 특정 위치에 도달하면 화면 상단에 '착' 달라붙는 요소입니다.",
    "visualHTML": "<div class=\"art-sticky-wrap\"><div class=\"art-sticky-bar\"></div></div>",
    "css": ".sticky-header {\n    position: sticky;\n    top: 0;\n    background: white;\n    z-index: 100;\n    padding: 10px 0;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.05);\n}"
  },
  {
    "name": "Spinner",
    "kor": "스피너 (로더)",
    "cat": "기능",
    "desc": "데이터를 불러오는 중임을 알리는 뱅글뱅글 돌아가는 애니메이션 아이콘입니다.",
    "visualHTML": "<div class=\"art-spinner\"></div>",
    "css": ".spinner {\n    width: 30px;\n    height: 30px;\n    border: 3px solid #f3f3f3;\n    border-top: 3px solid #5457FF;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}"
  },
  {
    "name": "Breakpoint",
    "kor": "브레이크 포인트",
    "cat": "개념",
    "desc": "반응형 웹에서 디자인 레이아웃이 변경되는 화면 너비 기준점입니다. (PC ↔ 모바일)",
    "visualHTML": "<div class=\"art-breakpoint\"><div class=\"pc\"></div><div class=\"tab\"></div><div class=\"mob\"></div></div>",
    "css": "/* Mobile */\n.container {\n    padding: 10px;\n}\n\n/* Tablet */\n@media (min-width: 768px) {\n    .container {\n        padding: 20px;\n    }\n}\n\n/* PC */\n@media (min-width: 1024px) {\n    .container {\n        padding: 40px;\n    }\n}"
  },
  {
    "name": "Z-Index",
    "kor": "Z-인덱스",
    "cat": "개념",
    "desc": "요소들이 겹쳐 있을 때 무엇이 더 위에 보일지 결정하는 순서(층) 값입니다.",
    "visualHTML": "<div class=\"art-zindex\"><div class=\"art-z-card art-z1\">1</div><div class=\"art-z-card art-z2\">2</div></div>",
    "css": ".layer-back {\n    position: absolute;\n    z-index: 1;\n    background: gray;\n}\n\n.layer-front {\n    position: absolute;\n    z-index: 10;\n    background: blue;\n}\n/* 숫자가 클수록 위에 뜹니다 */"
  },
  {
    "name": "Donut Chart",
    "kor": "도넛 차트",
    "cat": "데이터",
    "desc": "가운데가 빈 원형 차트로, 전체 중 부분의 비율을 보여줄 때 유용합니다.",
    "visualHTML": "<div class=\"art-donut\"></div>",
    "css": ".donut-chart {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    background: conic-gradient(#5457FF 70%, #eee 0);\n    -webkit-mask: radial-gradient(transparent 55%, black 56%);\n}"
  },
  {
    "name": "Progress Bar",
    "kor": "프로그레스 바",
    "cat": "데이터",
    "desc": "작업의 진행 상태나 완료율을 가로 막대 형태로 시각화한 UI입니다.",
    "visualHTML": "<div class=\"art-progress\"><div class=\"art-progress-fill\"></div></div>",
    "css": ".progress-bar {\n    width: 100%;\n    height: 8px;\n    background: #e5e7eb;\n    border-radius: 4px;\n    overflow: hidden;\n}\n\n.progress-fill {\n    width: 70%;\n    height: 100%;\n    background: #5457FF;\n}"
  },
  {
    "name": "Empty State",
    "kor": "엠티 스테이트",
    "cat": "상태",
    "desc": "데이터가 없을 때(예: 장바구니 0개) 사용자에게 안내를 제공하는 화면입니다.",
    "visualHTML": "<div class=\"art-empty\"><div class=\"art-empty-icon\">📂</div></div>",
    "css": ".empty-state {\n    text-align: center;\n    padding: 40px;\n    color: #6b7280;\n}\n\n.empty-icon {\n    font-size: 48px;\n    margin-bottom: 16px;\n}"
  },
  {
    "name": "404 Page",
    "kor": "404 페이지",
    "cat": "상태",
    "desc": "존재하지 않는 페이지에 접근했을 때 보여주는 에러 페이지입니다.",
    "visualHTML": "<div class=\"art-404\">404</div>",
    "css": ".error-page {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n    text-align: center;\n}"
  },
  {
    "name": "Drop Shadow",
    "kor": "드롭 섀도우",
    "cat": "스타일",
    "desc": "요소에 그림자를 주어 깊이감(Depth)과 입체감을 표현하는 기법입니다.",
    "visualHTML": "<div class=\"art-shadow\"></div>",
    "css": ".shadow-box {\n    background: white;\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), \n                0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}"
  },
  {
    "name": "Gradient",
    "kor": "그라데이션",
    "cat": "스타일",
    "desc": "두 가지 이상의 색상이 부드럽게 섞이는 효과입니다.",
    "visualHTML": "<div class=\"art-gradient\"></div>",
    "css": ".gradient-bg {\n    background: linear-gradient(135deg, #5457FF 0%, #a29bfe 100%);\n}"
  },
  {
    "name": "A/B Test",
    "kor": "A/B 테스트",
    "cat": "개념",
    "desc": "두 가지 디자인 시안(A안, B안)을 비교하여 어떤 것이 더 효과적인지 실험하는 방법입니다.",
    "visualHTML": "<div class=\"art-ab\"><div class=\"art-ver-a\">A</div><div class=\"art-ver-b\">B</div></div>",
    "css": "/* CSS로는 구현할 수 없는 마케팅/기획 개념입니다 */"
  },
  {
    "name": "Dark Mode",
    "kor": "다크 모드",
    "cat": "스타일",
    "desc": "어두운 배경에 밝은 텍스트를 사용하여 눈의 피로를 줄이는 테마입니다.",
    "visualHTML": "<div class=\"art-dark\"></div>",
    "css": "@media (prefers-color-scheme: dark) {\n    body {\n        background-color: #111;\n        color: #fff;\n    }\n}"
  }
];

let currentCategory = '전체보기';

const contentArea = document.getElementById('content-area');
const searchInput = document.getElementById('searchInput');
const filterContainer = document.getElementById('filterContainer');
const toast = document.getElementById('toast');

// 용어 데이터 초기화
function loadTerms() {
    initFilters();
    renderCards();
}

// 카테고리 칩 생성
function initFilters() {
    // 중복 제거한 카테고리 목록 추출
    const categories = ['전체보기', ...new Set(terms.map(t => t.cat))];
    
    filterContainer.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-chip';
        if (cat === '전체보기') btn.classList.add('active');
        btn.textContent = cat;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = cat;
            renderCards();
        });
        
        filterContainer.appendChild(btn);
    });
}

// 카드 렌더링
function renderCards() {
    const searchText = searchInput.value.toLowerCase();
    contentArea.innerHTML = '';

    const filtered = terms.filter(term => {
        const catMatch = currentCategory === '전체보기' || term.cat === currentCategory; // 카테고리 필터링
        const searchMatch = // 검색어 필터링
            term.name.toLowerCase().includes(searchText) || 
            term.kor.includes(searchText) || 
            term.desc.includes(searchText);
        
        return catMatch && searchMatch;
    });

    if (filtered.length === 0) {
        contentArea.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color:#999;">검색 결과가 없습니다 😢</div>`;
        return;
    }

    filtered.forEach(term => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="card-header">
                <div class="term-kor">${term.kor}</div>
                <span style="font-size:0.8rem; background:#f3f4f6; padding:2px 8px; border-radius:4px; color:#666;">${term.cat}</span>
            </div>
            <span class="term-eng">${term.name}</span>
            <div class="term-desc">${term.desc}</div>
            
            <div class="visual-preview" title="Hover to interact!">
                ${term.visualHTML}
            </div>

            <button class="copy-btn" onclick="copyCSS(this, \`${encodeURIComponent(term.css)}\`)">
                <span>&lt; / &gt;</span> CSS 복사
            </button>
        `;
        contentArea.appendChild(card);
    });
}

// 검색 이벤트
if (searchInput) {
    searchInput.addEventListener('input', renderCards);
}

// CSS 코드 복사
window.copyCSS = function(btn, encodedCss) {
    const css = decodeURIComponent(encodedCss);
    navigator.clipboard.writeText(css).then(() => {
        const originalText = btn.innerHTML;
        
        // 버튼 피드백
        btn.innerHTML = `<span style="color:var(--primary)">✔</span> 복사 완료!`;
        btn.style.borderColor = 'var(--primary)';
        btn.style.color = 'var(--primary)';
        
        // 토스트 노출
        if (toast) {
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
        }

        // 버튼 원복
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.borderColor = '';
            btn.style.color = '';
        }, 1500);
    });
}
loadTerms();