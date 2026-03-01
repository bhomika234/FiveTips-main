const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
    logOut: "Log Out", // @demo remove-current-line
  },
  welcomeScreen: {
    postscript:
      "psst  — This probably isn't what your app looks like. (Unless your designer handed you these screens, and in that case, ship it!)",
    readyForLaunch: "Your app, almost ready for launch!",
    exciting: "(ohh, this is exciting!)",
    letsGo: "Let's go!", // @demo remove-current-line
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
    traceTitle: "Error from %{name} stack", // @demo remove-current-line
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content:
        "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
  // @demo remove-block-start
  errors: {
    invalidEmail: "Invalid email address.",
  },
  tabs: {
    Home: "Home",
    Wallet: "Wallet",
    MySpaces: "My Spaces",
    Orders: "Orders",
    Profile: "Profile",
    THome:"Home",
    TBooking:"Booking",
    TMaps:"Maps",
    TProfile:"Profile"
  },
  loginScreen: {
    signIn: "Login to your account",
    forgotPassword: "Forgot Password?",
    enterDetails:
      "Enter your details below to unlock top secret info. You'll never guess what we've got waiting. Or maybe you will; it's not rocket science here.",
    emailFieldLabel: "Email",
    passwordFieldLabel: "Password",
    emailFieldPlaceholder: "Enter your email address",
    passwordFieldPlaceholder: "Super secret password here",
    tapToSignIn: "Sign in",
    hint: "Hint: you can use any email address and your favorite password :)",
    continue: "or continue with",
    continuegoogle: "Continue with Google",
    donthaveaccount: "Don’t have an account?",
    singup: "Sign up",
  },
  createAccountScreen: {
    heading: "Create Your Account",
    title: "What describes you the best?",
    tenant: "Tenant",
    landlord: "Landlord",
    next: "Next",
  },
  addInfoScreen: {
    header: "Personal Information",
    firstNameLabel: "First Name",
    firstNamePlaceholder: "Enter First Name",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Enter Last Name",
    dateOfBirthLabel: "Date of Birth",
    dateOfBirthPlaceholder: "Enter Date of Birth",
    genderLebel: "Gender",
    selectLebel: "Select",
    emailLabel: "Email",
    emailPlaceholder: "Enter Email",
    phoneNumberLabel: "Phone Number",
    next: "Next",
    male: "Male",
    female: "Female",
  },

  home: {
    yourlocation: "Your Location",
    location: "San Diego, California",
    showbalance: "Show Balance",
    hidebalance: "Hide Balance",
    viewwallet: "Wallet Details",
    requestwithdraw: "Request Withdrawal",
    active: "Active",
    editspace: "Edit Space",
    vieworder: "View Orders",
    upcomingparking: "Upcoming Parkings",
    parkingspace: "Your Parking Spaces",
    details: "Details",
    linkbankaccount: "Link Bank Account",
    linkaccountdetail:
      "In order to proceed with withdrawals, you need to link your bank account Please Link Your Bank Account to set up your withdrawal method.",
    notnow: "Not Now",
    linkbank: "Link Bank",
    congrats: "Congratulations!",
    accountready: "Your Account is ready to use.",
    gotohome: "Go to Homepage",
  },
  lindaccountScreen: {
    heading: "Link Your Bank Account",
    accountlable: "Account Title",
    accountplaceholder: "Enter Account Title",
    banklabel: "Select Bank",
    bankplaceholder: "Select",
    accountnumberLabel: "Account No",
    accuntnumberplaceholder: "Enter Account Number",
    agree: "I agree the Park Genius",
    termsofservice: "Terms of Services",
    and: "and",
    privacypolicy: "Privacy Policy",
    skip: "Skip",
    link: "Link",
  },
  enteramountScreen: {
    header: "Withdraw Amount",
    title: "How much would you like to withdraw?",
    continue: "Continue",
  },
  withdrawndetailsScreen: {
    header: "Withdraw Amount",
    accounttitlelabel: "Account Title",
    banklabel: "Select Bank",
    accountnolabel: "Account No",
    withdraw: "Withdraw",
    thankyou: "Thank You",
    witdhrawndesc:
      "For your withdrawal request. We will process your request, and you will receive a notification once the transaction is completed.",
    gotohomepage: "Go to Homepage",
  },
  notificationScreen: {
    header: "Notifications",
    today: "Today",
    ordercompleted: "Order Completed",
    earned: "You have earned",
    congratulations: "Congratulations 🎊",
    yourearning: "Your earnings of",
    availableinwallet:
      "are now available in your wallet and ready for withdrawal.",
    yesterday: "Yesterday",
    parkingorder: "You have a new parking order.",
    banklinked: "Bank Account Linked",
    verificationsuccessful: "Verification Successful",
    verified: "Account verification complete",
  },
  walletScreen: {
    header: "Wallet Details",
    earning: "Earnings",
    all: "All",
    parkingspace: "Your Parking Spaces",
    totalearning: "Total Earnings",
    active: "Active",
    viewdetails: "View Details",
  },
  totalearningScreen: {
    header: "Total Earnings",
    completedorder: "Completed Orders",
    active: "Active",
  },

  completedOrderScreen: {
    header: "Completed Order",
    customername: "Customer Name",
    vehicletype: "Vehicle Type",
    vehiclename: "Vehicle Name",
    number: "Number",
    date: "Date",
    duration: "Duration",
    time: "Time",
    perhour: "Amount / hour",
    totlahours: "Total Hours",
    platformfees: "Platform fee",
    receivedamount: "Received Amount",
  },
  myspacesScreen: {
    header: "My Parking Spaces",
    available: "Available for Bookings",
    editbutton: "Edit Space",
    vieworder: "View Orders",
    editparking: "Edit Parking Space",
    modalheading: "Are you Sure?",
    modaldesc:
      "you want to deactivate this parking space? It will no longer be available for bookings.",
    notnow: "Not Now",
    deacvtive: "Deactivate",
  },
  addspaceScreen: {
    header: "Add Your Parking Space",
    namelabel: "Enter Your Parking Space Name",
    nameplaceholder: "Enter Name",
    desclabel: "Enter Description",
    descplaceholder: "Lorem ispum dolor sit amet consecuto",
    offerlabel: "What types of parking facilities do you offer?",
    parkingtype:
      "Which type of parking space do you own or have available for rent?",
    addphotolabel: "Show Off Your Parking Space - Add Photos Now",
    next: "Next",
  },

  availabilityScreen: {
    header: "Pricing and Availability",
    hourlyrate: "What is your hourly rate for renting your parking space?",
    availibility:
      "Please specify the days of the week and hours of availability for your parking space",
    from: "From",
    end: "End Time",
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sun: "Sunday",
    next: "Next",
  },

  addLocationScreen: {
    header: "Add Location",
    streetlabel: "Street Address",
    streetplaceholder: "Enter Street Address",
    citylabel: "Select City",
    statelabel: "State / Province",
    zipcodelabel: "Zip / Postal Code",
    countryLabel: "Select Country",
    select: "Select",
    next: "Next",
  },
  verifySpaceScreen: {
    header: "Verify Your Space",
    identitycard: "Identity Card",
    document: "Land Document",
    continue: "Continue",
    gotospace: "Go to My Spaces",
    modaldesc:
      "Your parking space is pending approval. We will notify you once our admin team approves it. Thank you for your submission.",
    congrats: "Congratulations!",
    submit: "Submit",
  },
  verifyIdcardScreen: {
    header: "Verify Your Space",
    label: "Take a photo of the front of your identity card",
    takepick: "Take Pic",
    continue: "Continue",
  },
  scanDocumentScreen: {
    header: "Scan Document",
    heading: "Scan Your Document",
  },
  spaceDetailsScreen: {
    header: "Details",
    direction: "Directions",
    about: "About",
    review: "Reviews",
    desc: "Description",
    parkingtime: "Parking Time",
    editparking: "Edit Parking Space",
  },

  editspaceScreen:{
    header: "Edit Your Parking Space",

  },
  ordersScreen:{
    header:"Orders",
    active:"Active",
    upcoming:"Upcoming",
    completed:"Completed",
    expected:"Expected Amount",
    activeorder:"Active Order",
    upcomingorder:"Upcoming Order",
    completedorder:"Completed Order",
  },

  settingScreen:{
    header:"Profile & Settings",
    profile:"User Profile",
    wallet:"Wallet",
    notification:"Enable Notification",
    language:"Language",
    linkbank:"Link Bank Accounts",
    help:"Help",
    logout:"Log out"
  },
  userprofileScreen:{
    header:"Profile",
    edit:"Edit Profile",

  },
  editprofileScreen:{
  header:"Edit Profile",
  save:"Save"
  },
  languageScreen:{
    header:"Language",
    save:"Save",
    english:"English",
    german:"German"

  },
  bankAccountScreen:{
    header:"Bank Accounts",
    details:"Details",
    unlink:"Unlink"
  },
  helpScreen:{
    header:"Help",
    save:"Save",
    question1:"List a space on Parking Genius?",
    question2:"Listing details on Parking Genius?",
    question3:"Platform fee on Parking Genius?",
    question4:"Withdraw earnings on Parking Genius?",
    question5:"Space rules on Parking Genius?",
    question6:"Contact support on Parking Genius?",
    detail:
    `To list your parking space on Parking Genius, begin by signing in to your account with your login details. After logging in, find the 'List a Space' option and click on it. Here, you'll be prompted to provide detailed information about your parking space. This should include specifics such as the exact location or address of your parking space, the days and times it's available for bookings, and the pricing you've determined for renting the space.
Consider various factors like the location, local demand, and any special features your parking space may offer when setting the price. To make your listing more appealing, upload high-quality photos that clearly showcase your parking space.
Additionally, you can add any specific instructions or rules for renters, such as maximum stay duration, access instructions, or other relevant details.
After you've completed all the necessary information, submit your listing. At this point, it will enter a pending status, awaiting review by the admin for approval. The admin will assess your listing, ensuring it meets the platform's guidelines.
Once the admin approves your listing, your parking space will transition from pending to live status, making it visible and available for potential customers to book as per their parking needs. Please note that the duration of the admin's approval process may vary, but rest assured that once approved, your parking space will be open for bookings on Parking Genius.`
  },
  // TENANT AP CONTENT
  tenanthomeScreen:{
    headertitle:"Your Location",
    heading:"Let's find the best parking space near you.",
    searchplaceholder:"Search",
    nearby:"Nearby Locations",
    recent:"Recent Visits",
    seeall:"See All"
  },
  tenantsearchScreen:{
    header:"Search",
    results:"Results",
    filter:"Filters",
    distancelabel:"Distance (Km)",
    amountlabel:"Amount / hour",
    reset:"Reset",
    apply:"Apply Filter"
  },
  tenantparkingscreens:{
    header:"Details",
    bookspot:"Book Spot"
  },
  tbookingspotScreen:{
    header:"Book Spot",
    vehiclelable:"Select your Vehicle",
    namelabel:"Enter Vehicle Name",
    nameplaceholder:"Tesla",
    enternumberlabel:"Enter Number",
    numberplaceholder:"HEE - 6868",
    continue:"Continue"
  },
  tselecttimingScreen:{
     header:"Book Spot"
  },
  tsummaryScreen:{
  header:"Summary",
  parea:"Parking Area",
  ptype:"Parking Type",
  paddress:"Address",
  amount:"Amount",
  tax:"Taxes & Fees (10%)",
  total:"Total",
  proceed:"Proceed to Pay"
  },
  tpaymentScreen:{
    header:"Payment",
    stripepay:"Stripe Pay",
    usernameplaceholder:"Username",
    numberplaceholder:"Number",
    expiredate:"Expire Date",
    csvplaceholder:"CSV",
    book:"Pay & Book",
    congrats:"Congratulations!",
    modaldesc:"Your parking has been successfully booked.",
    goto:"Go to Bookings"
  },

  tmapsScreen:{
 header:"Maps"
  },
  tmybookingScreen:{
    header:"My Bookings",
    details:"Details"
  },
  TactiveparkingScreen:{
    header:"My Active Parking",
    hours:"Hours",
    min:"Mintues",
    sec:"Seconds",
    note:"Note: Exceeding the booking time incurs 2x parking fees. Extend your booking to avoid extra charges. Thank you!",
    checkout:"Checkout",
    extend:"Extend Time",
    payto:"Pay to Checkout"
  },
  textendtimingScreen:{
    header:"Extend Parking Time",
    timelabel:"Select Time",
    chooselabel:"Choose Payment Methods",
    total:"Total",
    confirm:"Confirm Payment"
  },
  textendsummaryScreen:{
    header:"Summary",
    totalhours:"Total hours",
    additional:"Additional hours",
    proceed:"Proceed to Pay"
  },

  demoNavigator: {
    componentsTab: "Components",
    debugTab: "Debug",
    communityTab: "Community",
    podcastListTab: "Podcast",
  },
  demoCommunityScreen: {
    title: "Connect with the community",
    tagLine:
      "Plug in to Infinite Red's community of React Native engineers and level up your app development with us!",
    joinUsOnSlackTitle: "Join us on Slack",
    joinUsOnSlack:
      "Wish there was a place to connect with React Native engineers around the world? Join the conversation in the Infinite Red Community Slack! Our growing community is a safe space to ask questions, learn from others, and grow your network.",
    joinSlackLink: "Join the Slack Community",
    makeIgniteEvenBetterTitle: "Make Ignite even better",
    makeIgniteEvenBetter:
      "Have an idea to make Ignite even better? We're happy to hear that! We're always looking for others who want to help us build the best React Native tooling out there. Join us over on GitHub to join us in building the future of Ignite.",
    contributeToIgniteLink: "Contribute to Ignite",
    theLatestInReactNativeTitle: "The latest in React Native",
    theLatestInReactNative:
      "We're here to keep you current on all React Native has to offer.",
    reactNativeRadioLink: "React Native Radio",
    reactNativeNewsletterLink: "React Native Newsletter",
    reactNativeLiveLink: "React Native Live",
    chainReactConferenceLink: "Chain React Conference",
    hireUsTitle: "Hire Infinite Red for your next project",
    hireUs:
      "Whether it's running a full project or getting teams up to speed with our hands-on training, Infinite Red can help with just about any React Native project.",
    hireUsLink: "Send us a message",
  },
  demoShowroomScreen: {
    jumpStart: "Components to jump start your project!",
    lorem2Sentences:
      "Nulla cupidatat deserunt amet quis aliquip nostrud do adipisicing. Adipisicing excepteur elit laborum Lorem adipisicing do duis.",
    demoHeaderTxExample: "Yay",
    demoViaTxProp: "Via `tx` Prop",
    demoViaSpecifiedTxProp: "Via `{{prop}}Tx` Prop",
  },
  demoDebugScreen: {
    howTo: "HOW TO",
    title: "Debug",
    tagLine:
      "Congratulations, you've got a very advanced React Native app template here.  Take advantage of this boilerplate!",
    reactotron: "Send to Reactotron",
    reportBugs: "Report Bugs",
    demoList: "Demo List",
    demoPodcastList: "Demo Podcast List",
    androidReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running, run adb reverse tcp:9090 tcp:9090 from your terminal, and reload the app.",
    iosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    macosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    webReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    windowsReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
  },
  demoPodcastListScreen: {
    title: "React Native Radio episodes",
    onlyFavorites: "Only Show Favorites",
    favoriteButton: "Favorite",
    unfavoriteButton: "Unfavorite",
    accessibility: {
      cardHint:
        "Double tap to listen to the episode. Double tap and hold to {{action}} this episode.",
      switch: "Switch on to only show favorites",
      favoriteAction: "Toggle Favorite",
      favoriteIcon: "Episode not favorited",
      unfavoriteIcon: "Episode favorited",
      publishLabel: "Published {{date}}",
      durationLabel:
        "Duration: {{hours}} hours {{minutes}} minutes {{seconds}} seconds",
    },
    noFavoritesEmptyState: {
      heading: "This looks a bit empty",
      content:
        "No favorites have been added yet. Tap the heart on an episode to add it to your favorites!",
    },
  },
  // @demo remove-block-end
};

export default en;
export type Translations = typeof en;
