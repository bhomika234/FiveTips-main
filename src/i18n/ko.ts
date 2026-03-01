import { Translations } from "./en";

const ko: Translations = {
  common: {
    ok: "확인!",
    cancel: "취소",
    back: "뒤로",
    logOut: "로그아웃", // @demo remove-current-line
  },
  welcomeScreen: {
    postscript:
      "잠깐! — 지금 보시는 것은 아마도 당신의 앱의 모양새가 아닐겁니다. (디자이너분이 이렇게 건내주셨다면 모를까요. 만약에 그렇다면, 이대로 가져갑시다!) ",
    readyForLaunch: "출시 준비가 거의 끝난 나만의 앱!",
    exciting: "(오, 이거 신나는데요!)",
    letsGo: "가보자구요!", // @demo remove-current-line
  },
  errorScreen: {
    title: "뭔가 잘못되었습니다!",
    friendlySubtitle:
      "이 화면은 오류가 발생할 때 프로덕션에서 사용자에게 표시됩니다. 이 메시지를 커스터마이징 할 수 있고(해당 파일은 `app/i18n/ko.ts` 에 있습니다) 레이아웃도 마찬가지로 수정할 수 있습니다(`app/screens/error`). 만약 이 오류화면을 완전히 없에버리고 싶다면 `app/app.tsx` 파일에서 <ErrorBoundary> 컴포넌트를 확인하기 바랍니다.",
    reset: "초기화",
    traceTitle: "%{name} 스택에서의 오류", // @demo remove-current-line
  },
  emptyStateComponent: {
    generic: {
      heading: "너무 텅 비어서.. 너무 슬퍼요..",
      content:
        "데이터가 없습니다. 버튼을 눌러서 리프레쉬 하시거나 앱을 리로드하세요.",
      button: "다시 시도해봅시다",
    },
  },
  // @demo remove-block-start
  errors: {
    invalidEmail: "잘못된 이메일 주소 입니다.",
  },

  tabs: {
    Home: "집",
    Wallet: "Wallet",
    MySpaces: "내 공간",
    Orders: "명령",
    Profile: "프로필",
  },
  loginScreen: {
    signIn: "로그인",
    enterDetails:
      "일급비밀 정보를 해제하기 위해 상세 정보를 입력하세요. 무엇이 기다리고 있는지 절대 모를겁니다. 혹은 알 수 있을지도 모르겠군요. 엄청 복잡한 뭔가는 아닙니다.",
    emailFieldLabel: "이메일",
    passwordFieldLabel: "비밀번호",
    emailFieldPlaceholder: "이메일을 입력하세요",
    passwordFieldPlaceholder: "엄청 비밀스러운 암호를 입력하세요",
    tapToSignIn: "눌러서 로그인 하기!",
    hint: "힌트: 가장 좋아하는 암호와 아무런 아무 이메일 주소나 사용할 수 있어요 :)",
    continue: "아니면 계속해서",
    continuegoogle: "구글로 계속해",
    donthaveaccount: "계정이 없나요?",
    singup: "가입하기",
    forgotPassword: "비밀번호를 잊으 셨나요?",
  },
  createAccountScreen: {
    heading: "계정 만들기",
    title: "당신을 가장 잘 설명하는 것은 무엇입니까?",
    tenant: "거주자",
    landlord: "주인",
    next: "다음",
  },
  addInfoScreen: {
    header: "개인 정보",
    firstNameLabel: "이름",
    firstNamePlaceholder: "이름을 입력하세요",
    lastNameLabel: "성",
    lastNamePlaceholder: "성을 입력하세요",
    dateOfBirthLabel: "생일",
    dateOfBirthPlaceholder: "생년월일을 입력하세요",
    genderLebel: "성별",
    selectLebel: "선택하다",
    emailLabel: "이메일",
    emailPlaceholder: "이메일을 입력하세요",
    phoneNumberLabel: "전화 번호",
    next: "다음",
    male: "남성",
    female: "여성",
  },
  home: {
    yourlocation: "귀하의 위치",
    location: "캘리포니아 주 샌디에이고",
    showbalance: "잔액 표시",
    hidebalance: "잔액 숨기기",
    viewwallet: "지갑 세부정보",
    requestwithdraw: "출금요청",
    active: "활동적인",
    editspace: "공간 편집",
    vieworder: "주문 보기",
    upcomingparking: "다가오는 주차",
    parkingspace: "주차 공간",
    details: "세부",
    linkbankaccount: "은행 계좌 연결",
    linkaccountdetail:
      "출금을 진행하려면 은행 계좌를 연결해야 합니다. 출금 방법을 설정하려면 은행 계좌를 연결하세요.",
    notnow: "지금은 아님",
    linkbank: "링크 은행",
    congrats: "축하해요!",
    accountready: "귀하의 계정은 사용할 준비가되었습니다.",
    gotohome: "홈페이지로 이동",
  },
  lindaccountScreen: {
    heading: "은행 계좌 연결",
    accountlable: "계정 제목",
    accountplaceholder: "계정 제목 입력",
    banklabel: "은행 선택",
    bankplaceholder: "선택하다",
    accountnumberLabel: "계정 없음",
    accuntnumberplaceholder: "계좌번호 입력",
    agree: "박지니어스님 말씀에 동의합니다",
    termsofservice: "서비스 약관",
    and: "그리고",
    privacypolicy: "개인 정보 정책",
    skip: "건너뛰다",
    link: "링크",
  },
  enteramountScreen: {
    header: "인출금액",
    title: "얼마를 인출하시겠습니까?",
    continue: "계속하다",
  },

  withdrawndetailsScreen: {
    header: "인출금액",
    accounttitlelabel: "계정 제목",
    banklabel: "은행 선택",
    accountnolabel: "계정 없음",
    withdraw: "철회하다",
    thankyou: "감사합니다",
    witdhrawndesc:
      "귀하의 출금 요청을 위해. 귀하의 요청을 처리해 드리겠습니다. 거래가 완료되면 알림을 받게 됩니다.",
    gotohomepage: "홈페이지로 이동",
  },
  notificationScreen: {
    header: "알림",
    today: "오늘",
    ordercompleted: "Order Completed",
    earned: "당신은 얻었습니다",
    congratulations: "축하해요 🎊",
    yourearning: "귀하의 수입",
    availableinwallet:
      "이제 지갑에서 사용할 수 있으며 출금할 준비가 되었습니다.",
    yesterday: "어제",
    parkingorder: "새로운 주차 명령이 내려졌습니다.",
    banklinked: "은행 계좌 연결됨",
    verificationsuccessful: "확인 성공",
    verified: "계정 확인 완료",
  },
  walletScreen: {
    header: "지갑 세부정보",
    earning: "수입",
    all: "모두",
    parkingspace: "주차 공간",
    totalearning: "전체 수익",
    active: "활동적인",
    viewdetails: "세부 정보보기",
  },
  totalearningScreen: {
    header: "전체 수익",
    completedorder: "완료된 주문",
    active: "활동적인",
  },

  completedOrderScreen: {
    header: "완료된 주문",
    customername: "고객 이름",
    vehicletype: "차량 종류",
    vehiclename: "차량명",
    number: "숫자",
    date: "날짜",
    duration: "지속",
    time: "시간",
    perhour: "금액 / 시간",
    totlahours: "전체 시간",
    platformfees: "플랫폼 수수료",
    receivedamount: "수령금액",
  },
  myspacesScreen: {
    header: "내 주차 공간",
    available: "예약 가능",
    editbutton: "공간 편집",
    vieworder: "주문 보기",
    editparking: "주차 공간 수정",
    modalheading: "확실합니까?",
    modaldesc:
      "이 주차 공간을 비활성화하시겠습니까? 더 이상 예약이 불가능합니다.",
    notnow: "지금은 아님",
    deacvtive: "비활성화",
  },
  addspaceScreen: {
    header: "주차 공간 추가",
    namelabel: "주차 공간 이름을 입력하세요",
    nameplaceholder: "이름을 입력하시오",
    desclabel: "설명 입력",
    descplaceholder: "설명 입력",
    offerlabel: "어떤 유형의 주차 시설을 제공합니까?",
    parkingtype:
      "귀하가 소유하고 있거나 임대할 수 있는 주차 공간 유형은 무엇입니까?",
    addphotolabel: "주차 공간을 자랑해보세요 - 지금 사진을 추가하세요",
    next: "다음",
  },

  availabilityScreen: {
    header: "가격 및 가용성",
    hourlyrate: "주차 공간을 임대하는 데 드는 시간당 요금은 얼마입니까?",
    availibility: "주차 공간 이용 가능 요일과 시간을 지정하세요.",
    from: "에서",
    end: "종료 시간",
    mon: "월요일",
    tue: "화요일",
    wed: "수요일",
    thu: "목요일",
    fri: "금요일",
    sat: "토요일",
    sun: "일요일",
    next: "다음",
  },

  addLocationScreen: {
    header: "위치 추가",
    streetlabel: "거리 주소",
    streetplaceholder: "거리 주소를 입력하세요",
    citylabel: "도시 선택",
    statelabel: "주/도",
    zipcodelabel: "우편번호",
    countryLabel: "국가 선택",
    select: "선택하다",
    next: "다음",
  },
  verifySpaceScreen: {
    header: "공간을 확인하세요",
    identitycard: "신분 증명서",
    document: "토지 문서",
    continue: "계속하다",
    gotospace: "내 공간으로 이동",
    modaldesc:
      "귀하의 주차 공간이 승인 대기 중입니다. 관리팀이 승인하면 알려드리겠습니다. 당신의 의견에 대해 감사합니다.",
    congrats: "축하해요!",
    submit: "제출하다",
  },
  verifyIdcardScreen: {
    header: "공간을 확인하세요",
    label: "신분증 앞면 사진을 찍어주세요",
    takepick: "사진 찍기",
    continue: "계속하다",
  },
  scanDocumentScreen: {
    header: "문서 스캔",
    heading: "문서 스캔",
  },
  spaceDetailsScreen: {
    header: "세부",
    direction: "Directions",
    about: "에 대한",
    review: "리뷰",
    desc: "설명",
    parkingtime: "주차시간",
    editparking: "주차 공간 수정",
  },
  
  editspaceScreen:{
    header: "주차 공간 편집",

  },
  ordersScreen:{
    header:"명령",
    active:"활동적인",
    upcoming:"예정",
    completed:"완전한",
    expected:"예상금액",
    activeorder:"활성 주문",
    upcomingorder:"다가오는 주문",
    completedorder:"완료된 주문",
  },
  demoNavigator: {
    componentsTab: "컴포넌트",
    debugTab: "디버그",
    communityTab: "커뮤니티",
    podcastListTab: "팟캐스트",
  },
  demoCommunityScreen: {
    title: "커뮤니티와 함께해요",
    tagLine:
      "전문적인 React Native 엔지니어들로 구성된 Infinite Red 커뮤니티에 접속해서 함께 개발 실력을 향상시켜 보세요!",
    joinUsOnSlackTitle: "Slack 에 참여하세요",
    joinUsOnSlack:
      "전 세계 React Native 엔지니어들과 함께할 수 있는 곳이 있었으면 좋겠죠? Infinite Red Community Slack 에서 대화에 참여하세요! 우리의 성장하는 커뮤니티는 질문을 던지고, 다른 사람들로부터 배우고, 네트워크를 확장할 수 있는 안전한 공간입니다. ",
    joinSlackLink: "Slack 에 참여하기",
    makeIgniteEvenBetterTitle: "Ignite 을 향상시켜요",
    makeIgniteEvenBetter:
      "Ignite 을 더 좋게 만들 아이디어가 있나요? 기쁜 소식이네요. 우리는 항상 최고의 React Native 도구를 구축하는데 도움을 줄 수 있는 분들을 찾고 있습니다. GitHub 에서 Ignite 의 미래를 만들어 가는것에 함께해 주세요.",
    contributeToIgniteLink: "Ignite 에 기여하기",
    theLatestInReactNativeTitle: "React Native 의 최신정보",
    theLatestInReactNative:
      "React Native 가 제공하는 모든 최신 정보를 알려드립니다.",
    reactNativeRadioLink: "React Native 라디오",
    reactNativeNewsletterLink: "React Native 뉴스레터",
    reactNativeLiveLink: "React Native 라이브 스트리밍",
    chainReactConferenceLink: "Chain React 컨퍼런스",
    hireUsTitle: "다음 프로젝트에 Infinite Red 를 고용하세요",
    hireUs:
      "프로젝트 전체를 수행하든, 실무 교육을 통해 팀의 개발 속도에 박차를 가하든 상관없이, Infinite Red 는 React Native 프로젝트의 모든 분야의 에서 도움을 드릴 수 있습니다.",
    hireUsLink: "메세지 보내기",
  },
  demoShowroomScreen: {
    jumpStart: "프로젝트를 바로 시작할 수 있는 컴포넌트들!",
    lorem2Sentences:
      "별 하나에 추억과, 별 하나에 사랑과, 별 하나에 쓸쓸함과, 별 하나에 동경(憧憬)과, 별 하나에 시와, 별 하나에 어머니, 어머니",
    demoHeaderTxExample: "야호",
    demoViaTxProp: "`tx` Prop 을 통해",
    demoViaSpecifiedTxProp: "`{{prop}}Tx` Prop 을 통해",
  },
  demoDebugScreen: {
    howTo: "사용방법",
    title: "디버그",
    tagLine:
      "축하합니다. 여기 아주 고급스러운 React Native 앱 템플릿이 있습니다. 이 보일러 플레이트를 사용해보세요!",
    reactotron: "Reactotron 으로 보내기",
    reportBugs: "버그 보고하기",
    demoList: "데모 목록",
    demoPodcastList: "데모 팟캐스트 목록",
    androidReactotronHint:
      "만약에 동작하지 않는 경우, Reactotron 데스크탑 앱이 실행중인지 확인 후, 터미널에서 adb reverse tcp:9090 tcp:9090 을 실행한 다음 앱을 다시 실행해보세요.",
    iosReactotronHint:
      "만약에 동작하지 않는 경우, Reactotron 데스크탑 앱이 실행중인지 확인 후 앱을 다시 실행해보세요.",
    macosReactotronHint:
      "만약에 동작하지 않는 경우, Reactotron 데스크탑 앱이 실행중인지 확인 후 앱을 다시 실행해보세요.",
    webReactotronHint:
      "만약에 동작하지 않는 경우, Reactotron 데스크탑 앱이 실행중인지 확인 후 앱을 다시 실행해보세요.",
    windowsReactotronHint:
      "만약에 동작하지 않는 경우, Reactotron 데스크탑 앱이 실행중인지 확인 후 앱을 다시 실행해보세요.",
  },
  demoPodcastListScreen: {
    title: "React Native 라디오 에피소드",
    onlyFavorites: "즐겨찾기만 보기",
    favoriteButton: "즐겨찾기",
    unfavoriteButton: "즐겨찾기 해제",
    accessibility: {
      cardHint:
        "에피소드를 들으려면 두 번 탭하세요. 이 에피소드를 좋아하거나 싫어하려면 두 번 탭하고 길게 누르세요.",
      switch: "즐겨찾기를 사용하려면 스위치를 사용하세요.",
      favoriteAction: "즐겨찾기 토글",
      favoriteIcon: "좋아하는 에피소드",
      unfavoriteIcon: "즐겨찾기하지 않은 에피소드",
      publishLabel: "{{date}} 에 발행됨",
      durationLabel: "소요시간: {{hours}}시간 {{minutes}}분 {{seconds}}초",
    },
    noFavoritesEmptyState: {
      heading: "조금 텅 비어 있네요.",
      content:
        "즐겨찾기가 없습니다. 에피소드에 있는 하트를 눌러서 즐겨찾기에 추가하세요.",
    },
  },
  // @demo remove-block-end
};

export default ko;
