import { useState } from "react";
import React from "react";
const LanguageContextApi = React.createContext({
  language: "",
  /////navBar
  navLoginButton: "",
  ////landing2
  landing2H1Content: "",
  landing2H2Content: "",
  landing2H3Content: "",
  landing2ButtonContent: "",
  landing2EmailInputIsNotValidcontent: "",
  /////landing3
  landing3H1Content: "",
  landing3H2Content: "",
  ////landing4
  landing4H3ContentMovieTitle: "",
  landing4H3ContentDownloading: "",
  landing4H1Content: "",
  landing4H2Content: "",
  ////landing5
  landing5H1Content: "",
  landing5H2Content: "",
  ////landing6
  landing6H1Content: "",
  landing6H2Content: "",
  ////landing7
  landing7TitleContent: "",
  landing7TotalContent: [],
  landing7H3Content: "",
  landing7ButtonContent: "",
  landing7EmailInputIsNotValidcontent: "",
  ///landing8
  landing8H3Content: "",
  landing8TotalServicesContent: {},
  changeLanguageHandler: () => {},
});
export const LanguageContextApiProvider = (props) => {
  const [languageType, setLanguageType] = useState("中文");
  const changeLanguage = (value) => {
    setLanguageType(value);
  };

  let navLoginButton,
    ////landing2
    landing2H1Content,
    landing2H2Content,
    landing2H3Content,
    landing2ButtonContent,
    landing2EmailInputIsNotValidcontent,
    /////landing3
    landing3H1Content,
    landing3H2Content,
    ////landing4
    landing4H3ContentMovieTitle,
    landing4H3ContentDownloading,
    landing4H1Content,
    landing4H2Content,
    ////landing5
    landing5H1Content,
    landing5H2Content,
    ////landing6
    landing6H1Content,
    landing6H2Content,
    ////landing7
    landing7TitleContent,
    landing7TotalContent,
    landing7H3Content,
    landing7ButtonContent,
    landing7EmailInputIsNotValidcontent,
    ///landing8
    landing8H3Content,
    landing8TotalServicesContent;
  /////中文/////
  const chineseVersion = {
    //////nav
    navLoginButton: "登入",
    ////landing2
    landing2H1: "不限時數的電影與節目，還有更多精彩內容",
    landing2H2: "隨處都能觀賞，可隨時取消。",
    landing2H3:
      "準備開心觀賞了嗎？請輸入您的電子郵件，以建立或重新啟用您的帳戶。",
    landing2Button: "開始使用",
    landing2InputNotValid: "請輸入有效的電子郵件地址",
    ////landing3
    landing3H1: "在電視上觀賞。",
    landing3H2:
      "在智慧型電視、PlayStation、Xbox、Chromecast、Apple TV、藍光播放器等多種裝置上觀賞。",
    ///landing4
    landing4H3MovieTitle: "怪奇物語",
    landing4H3Downloading: "下載中......",
    landing4H1: "下載您的節目以便離線觀賞。",
    landing4H2: "輕鬆儲存您最喜歡的影片，讓您時時都能盡情觀賞。",
    ////landing5
    landing5H1: "隨處都能觀賞。",
    landing5H2:
      "隨您在手機、平板電腦、筆記型電腦和電視上串流不限時數的電影與節目，無額外費用。",
    ////landing6
    landing6H1: "建立兒童專用的使用者。",
    landing6H2:
      "讓孩子們和心愛的角色在他們專屬的小天地一同冒險，擁有會員資格即可免費使用。",
    ////landing7
    landing7Title: "常見問題解答",
    landing7TotalContentArray: [
      {
        id: "1",
        questionTitle: "KoreaDramaix是什麼?",
        questionAnswer:
          "KoreaDramaix是串流服務,透過數千種可連結網路的行動裝置,提供各種獲獎肯定的節目、電影、動畫、紀錄片等精彩內容。只要支付一筆經濟實惠的月費，就能隨時隨地，盡情觀賞，毫無廣告。時時都有新的內容供您探索，而且每星期都會加入新的節目與電影！",
      },
      {
        id: "2",
        questionTitle: "如何計費",
        questionAnswer:
          "只要支付一筆固定月費，就能用您的智慧型手機、平板電腦、智慧型電視、筆記型電腦或串流裝置觀賞影片。各種方案介於每月 $270 至 $390。無額外費用，不須綁約。",
      },
      {
        id: "3",
        questionTitle: "在哪裡觀賞",
        questionAnswer:
          "隨時隨地盡情觀賞。登入您的帳戶，就能使用您的個人電腦，或是提供 KoreaDramaix App 的任何可上網行動裝置，在koreaDramaix.com 網站上即時觀賞，包括智慧型電視、智慧型手機、平板電腦、串流媒體播放器和遊戲機。您也能使用 iOS、Android 或 Windows 10 App 下載最喜歡的節目。使用下載功能，就能在外出且沒有網路連線時觀賞。",
      },
      {
        id: "4",
        questionTitle: "如何取消",
        questionAnswer:
          "KoreaDramaix 彈性十足。沒有難懂的合約，也不須綁約。點個兩下，就能線上輕鬆取消您的帳戶。無取消費用，可隨時開始或停用您的帳戶。",
      },
      {
        id: "5",
        questionTitle: "可以在KoreaDramaix觀賞什麼內容",
        questionAnswer:
          "KoreaDramaix 擁有豐富的影片內容庫，包括長片、紀錄片、節目、動畫、獲獎肯定的 Netflix 原創作品與更多內容。隨時隨地，盡情觀賞。",
      },
      {
        id: "6",
        questionTitle: "適合兒童觀賞嗎",
        questionAnswer:
          "兒童體驗包含在您的會員資格裡，可讓家長控制觀賞內容，確保孩子能在自己的小天地盡情享受老少咸宜的節目與電影。兒童使用者具備受 PIN 碼保護的家長控制選項，可讓您為家中兒童設定最適合的年齡分級內容，並封鎖您不想讓孩子們觀看的特定影片。",
      },
    ],
    landing7Button: "開始使用",
    landing7H3:
      "準備開心觀賞了嗎？請輸入您的電子郵件，以建立或重新啟用您的帳戶。",
    landing7EmailInputIsNotValid: "請輸入有效的電子郵件地址",
    ////landing8
    landing8H3: "有疑問嗎？請聯絡我們。",
    landing8TotalServices: {
      title1: "常見問題",
      title2: "說明中心",
      title3: "帳戶",
      title4: "媒體中心",
      title5: "投資人關係",
      title6: "工作機會",
      title7: "觀賞方式",
      title8: "使用條款",
      title9: "隱私權",
      title10: "Cookie設定",
      title11: "企業資訊",
      title12: "聯絡我們",
      title13: "速度測試",
      title14: "法律聲明",
      title15: "獨家資訊",
      title16: "贊助我們",
    },
  };

  /////英文/////
  const englishVersion = {
    ////nav
    navLoginButton: "Login",
    ////landing2
    landing2H1: "Unlimited movies, TV shows, and more.",
    landing2H2: "Watch anywhere. Cancel anytime.",
    landing2H3:
      "Ready to watch? Enter your email to create or restart your membership.",
    landing2Button: "Started",
    landing2InputNotValid: "Please enter a valid email address",
    ////landing3
    landing3H1: "Enjoy on your TV.",
    landing3H2:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    ///landing4
    landing4H3MovieTitle: "Stranger Things",
    landing4H3Downloading: "Downloading...",
    landing4H1: "Download your shows to watch offline.",
    landing4H2:
      "Save your favorites easily and always have something to watch.",
    ////landing5
    landing5H1: "Watch everywhere.",
    landing5H2:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
    ////landing6
    landing6H1: "Create profiles for kids.",
    landing6H2:
      "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    ////landing7
    landing7Title: "Frequently Asked Questions",
    landing7TotalContentArray: [
      {
        id: "1",
        questionTitle: "What is KoreaDramaix?",
        questionAnswer:
          "KoreaDramaix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
      },
      {
        id: "2",
        questionTitle: "How much does KoreaDramix cost?",
        questionAnswer:
          "Watch KoreaDramaix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from TWD270 to TWD390 a month. No extra costs, no contracts.",
      },
      {
        id: "3",
        questionTitle: "Where can I watch?",
        questionAnswer:
          "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at koreaDramaix.com from your personal computer or on any internet-connected device that offers the KoreaDramaix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take KoreaDramaix with you anywhere.",
      },
      {
        id: "4",
        questionTitle: "How do I cancel?",
        questionAnswer:
          "KoreaDramaix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      },
      {
        id: "5",
        questionTitle: "What can I watch on KoreaDramaix",
        questionAnswer:
          "KoreaDramaix has an extensive library of feature films, documentaries, TV shows, anime, award-winning KoreaDramaix originals, and more. Watch as much as you want, anytime you want.",
      },
      {
        id: "6",
        questionTitle: "Is KoreaDramaix good for kid? ",
        questionAnswer:
          "Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
      },
    ],
    landing7Button: "Started",
    landing7H3:
      "Ready to watch? Enter your email to create or restart your membership.",
    landing7EmailInputIsNotValid: "Please enter a valid email address",
    ////landing8
    landing8H3: "Questions? Contact us.",
    landing8TotalServices: {
      title1: "FAQ",
      title2: "Help Center",
      title3: "Account",
      title4: "Media Center",
      title5: "Investor Relations",
      title6: "Jobs",
      title7: "Ways to Watch",
      title8: "Terms of Use",
      title9: "Privacy",
      title10: "Cookie Preferences",
      title11: "Corporate Information",
      title12: "Contact Us",
      title13: "Speed Test",
      title14: "Legal Notices",
      title15: "Only on KoreaDramaix",
      title16: "Donate us",
    },
  };
  /////韓文/////
  const koreaVersion = {
    ////nav
    navLoginButton: "로그인",
    ////landing2
    landing2H1: "무제한 영화, TV 프로그램 등.",
    landing2H2: "어디서나 시청하세요. 언제든지 취소.",
    landing2H3:
      "시청할 준비가 되셨나요? 이메일을 입력하여 멤버십을 생성하거나 다시 시작하세요.",
    landing2Button: "시작됨",
    landing2InputNotValid: "유효한 이메일 주소를 입력하세요",
    ////landing3
    landing3H1: "TV에서 즐기세요.",
    landing3H2:
      "스마트 TV, Playstation, Xbox, Chromecast, Apple TV, Blu-ray 플레이어 등에서 시청.",
    ///landing4
    landing4H3MovieTitle: "기묘한 것들",
    landing4H3Downloading: "다운로드 중...",
    landing4H1: "오프라인으로 시청하려면 프로그램을 다운로드하세요.",
    landing4H2: "즐겨찾기를 쉽게 저장하고 항상 볼 수 있습니다.",
    ////landing5
    landing5H1: "어디서나 시청",
    landing5H2:
      "추가 비용 없이 휴대전화, 태블릿, 노트북 및 TV에서 영화와 TV 프로그램을 무제한으로 스트리밍하세요",
    ////landing6
    landing6H1: "아이들을 위한 프로필을 만드세요.",
    landing6H2:
      "멤버십으로 무료로 아이들을 위해 만들어진 공간에서 좋아하는 캐릭터와 함께 모험을 떠나보세요.",
    ////landing7
    landing7Title: "자주 묻는 질문",
    landing7TotalContentArray: [
      {
        id: "1",
        questionTitle: "KoreaDramaix는 무엇입니까?",
        questionAnswer:
          "KoreaDramaix는 다양한 수상 경력에 빛나는 TV 프로그램, 영화, 애니메이션, 다큐멘터리 등을 수천 대의 인터넷 연결 장치에서 제공하는 스트리밍 서비스입니다. 광고 없이 원하는 시간에 원하는 만큼 시청할 수 있습니다. 하나의 저렴한 월간 가격으로 모든 것이 가능합니다. 항상 새로운 것을 발견할 수 있으며 매주 새로운 TV 프로그램과 영화가 추가됩니다!",
      },
      {
        id: "2",
        questionTitle: "KoreaDramix 비용은 얼마입니까?",
        questionAnswer:
          "스마트폰, 태블릿, 스마트 TV, 노트북 또는 스트리밍 장치에서 KoreaDramaix를 월 고정 요금으로 시청하세요. 요금제는 한 달에 TWD270에서 TWD390까지 다양합니다. 추가 비용, 계약이 없습니다.",
      },
      {
        id: "3",
        questionTitle: "어디서 볼 수 있나요?",
        questionAnswer:
          "언제 어디서나 시청하세요. KoreaDramaix 계정으로 로그인하면 개인용 컴퓨터에서 또는 스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔을 포함하여 KoreaDramaix 앱을 제공하는 인터넷 연결 장치에서 koreaDramaix.com의 웹에서 즉시 시청할 수 있습니다. iOS, Android 또는 Windows 10 앱으로 좋아하는 프로그램을 다운로드할 수도 있습니다. 이동 중에 인터넷 연결 없이 다운로드를 사용하여 시청하세요. 어디에서나 KoreaDramaix를 이용하세요.",
      },
      {
        id: "4",
        questionTitle: "취소하려면 어떻게 해야 하나요?",
        questionAnswer:
          "KoreaDramaix는 유연합니다. 성가신 계약과 약속이 없습니다. 두 번의 클릭으로 온라인에서 쉽게 계정을 취소할 수 있습니다. 취소 수수료가 없습니다. 언제든지 계정을 시작하거나 중지할 수 있습니다.",
      },
      {
        id: "5",
        questionTitle: "KoreaDramaix에서 무엇을 볼 수 있습니까?",
        questionAnswer:
          "KoreaDramaix는 장편 영화, 다큐멘터리, TV 쇼, 애니메이션, 수상 경력에 빛나는 KoreaDramaix 원본 등의 방대한 라이브러리를 보유하고 있습니다. 원하는 시간에 원하는 만큼 시청하세요.",
      },
      {
        id: "6",
        questionTitle: "KoreaDramaix는 어린이에게 좋은가요?",
        questionAnswer:
          "어린이 경험은 멤버십에 포함되어 있어 부모는 제어할 수 있으며 어린이는 자신의 공간에서 가족 친화적인 TV 프로그램과 영화를 즐길 수 있습니다. 어린이 프로필에는 어린이가 시청할 수 있는 콘텐츠의 수위 등급을 제한하고 특정 콘텐츠를 차단할 수 있는 PIN으로 보호되는 자녀 보호 기능이 포함되어 있습니다. 아이들에게 보여주고 싶지 않은 제목.",
      },
    ],
    landing7Button: "시작됨",
    landing7H3:
      "시청할 준비가 되셨나요? 이메일을 입력하여 멤버십을 생성하거나 다시 시작하세요.",
    landing7EmailInputIsNotValid: "유효한 이메일 주소를 입력하세",
     ////landing8
     landing8H3: "질문? 문의하기.",
     landing8TotalServices: {
       title1: "자주하는 질문",
       title2: "지원 센터",
       title3: "계정",
       title4: "미디어 센터",
       title5: "투자자 관계",
       title6: "채용정보",
       title7: "시청 방법",
       title8: "이용약관",
       title9: "은둔",
       title10: "쿠키 기본 설정",
       title11: "기업 정보",
       title12: "문의하기",
       title13: "속도 테스트",
       title14: "법적 고지",
       title15: "독점 정보",
       title16: "우리를 기부",
     },
  };

  if (languageType === "中文") {
    ////nav
    navLoginButton = chineseVersion.navLoginButton;
    ////landing2
    landing2H1Content = chineseVersion.landing2H1;
    landing2H2Content = chineseVersion.landing2H2;
    landing2H3Content = chineseVersion.landing2H3;
    landing2ButtonContent = chineseVersion.landing2Button;
    landing2EmailInputIsNotValidcontent = chineseVersion.landing2InputNotValid;
    ////landing3
    landing3H1Content = chineseVersion.landing3H1;
    landing3H2Content = chineseVersion.landing3H2;
    ////landing4
    landing4H3ContentMovieTitle = chineseVersion.landing4H3MovieTitle;
    landing4H3ContentDownloading = chineseVersion.landing4H3Downloading;
    landing4H1Content = chineseVersion.landing4H1;
    landing4H2Content = chineseVersion.landing4H2;
    ////landing5
    landing5H1Content = chineseVersion.landing5H1;
    landing5H2Content = chineseVersion.landing5H2;
    ////landing6
    landing6H1Content = chineseVersion.landing6H1;
    landing6H2Content = chineseVersion.landing6H2;
    ////landing7
    landing7TotalContent = chineseVersion.landing7TotalContentArray;
    landing7TitleContent = chineseVersion.landing7Title;
    landing7ButtonContent = chineseVersion.landing7Button;
    landing7H3Content = chineseVersion.landing7H3;
    landing7EmailInputIsNotValidcontent =
      chineseVersion.landing7EmailInputIsNotValid;
    ///landing8
    landing8H3Content = chineseVersion.landing8H3;
    landing8TotalServicesContent = chineseVersion.landing8TotalServices;
  } else if (languageType === "English") {
    /////nave
    navLoginButton = englishVersion.navLoginButton;
    ////landing2
    landing2H1Content = englishVersion.landing2H1;
    landing2H2Content = englishVersion.landing2H2;
    landing2H3Content = englishVersion.landing2H3;
    landing2ButtonContent = englishVersion.landing2Button;
    landing2EmailInputIsNotValidcontent = englishVersion.landing2InputNotValid;
    ////landing3
    landing3H1Content = englishVersion.landing3H1;
    landing3H2Content = englishVersion.landing3H2;
    ////landing4
    landing4H3ContentMovieTitle = englishVersion.landing4H3MovieTitle;
    landing4H3ContentDownloading = englishVersion.landing4H3Downloading;
    landing4H1Content = englishVersion.landing4H1;
    landing4H2Content = englishVersion.landing4H2;
    ////landing5
    landing5H1Content = englishVersion.landing5H1;
    landing5H2Content = englishVersion.landing5H2;
    ////landing6
    landing6H1Content = englishVersion.landing6H1;
    landing6H2Content = englishVersion.landing6H2;
    ////landing7
    landing7TotalContent = englishVersion.landing7TotalContentArray;
    landing7TitleContent = englishVersion.landing7Title;
    landing7ButtonContent = englishVersion.landing7Button;
    landing7H3Content = englishVersion.landing7H3;
    landing7EmailInputIsNotValidcontent =
      englishVersion.landing7EmailInputIsNotValid;
    ///landing8
    landing8H3Content = englishVersion.landing8H3;
    landing8TotalServicesContent = englishVersion.landing8TotalServices;
  } else if (languageType === "한국인") {
    navLoginButton = koreaVersion.navLoginButton;
    ////landing2
    landing2H1Content = koreaVersion.landing2H1;
    landing2H2Content = koreaVersion.landing2H2;
    landing2H3Content = koreaVersion.landing2H3;
    landing2ButtonContent = koreaVersion.landing2Button;
    landing2EmailInputIsNotValidcontent = koreaVersion.landing2InputNotValid;
    ////landing3
    landing3H1Content = koreaVersion.landing3H1;
    landing3H2Content = koreaVersion.landing3H2;
    ////landing4
    landing4H3ContentMovieTitle = koreaVersion.landing4H3MovieTitle;
    landing4H3ContentDownloading = koreaVersion.landing4H3Downloading;
    landing4H1Content = koreaVersion.landing4H1;
    landing4H2Content = koreaVersion.landing4H2;
    ////landing5
    landing5H1Content = koreaVersion.landing5H1;
    landing5H2Content = koreaVersion.landing5H2;
    ////landing6
    landing6H1Content = koreaVersion.landing6H1;
    landing6H2Content = koreaVersion.landing6H2;
    ////landing7
    landing7TitleContent = koreaVersion.landing7Title;
    landing7TotalContent = koreaVersion.landing7TotalContentArray;
    landing7ButtonContent = koreaVersion.landing7Button;
    landing7H3Content = koreaVersion.landing7H3;
    landing7EmailInputIsNotValidcontent =
      koreaVersion.landing7EmailInputIsNotValid;
    ///landing8
    landing8H3Content = koreaVersion.landing8H3;
    landing8TotalServicesContent = koreaVersion.landing8TotalServices;
  }

  const contextValue = {
    language: languageType,
    changeLanguageHandler: changeLanguage,
    /////nav
    navLoginButton,
    ////landing2
    landing2H1Content,
    landing2H2Content,
    landing2H3Content,
    landing2ButtonContent,
    landing2EmailInputIsNotValidcontent,
    ////landing3
    landing3H1Content,
    landing3H2Content,
    ////landing4
    landing4H3ContentMovieTitle,
    landing4H3ContentDownloading,
    landing4H1Content,
    landing4H2Content,
    ////landing5
    landing5H1Content,
    landing5H2Content,
    ////landing6
    landing6H1Content,
    landing6H2Content,
    ////landing7
    landing7TitleContent,
    landing7TotalContent,
    landing7ButtonContent,
    landing7H3Content,
    landing7EmailInputIsNotValidcontent,
    ///landing8
    landing8H3Content,
    landing8TotalServicesContent,
  };

  return (
    <LanguageContextApi.Provider value={contextValue}>
      {props.children}
    </LanguageContextApi.Provider>
  );
};

export default LanguageContextApi;
