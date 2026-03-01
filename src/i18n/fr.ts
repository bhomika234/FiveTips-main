import { Translations } from "./en";

const fr: Translations = {
  common: {
    ok: "OK !",
    cancel: "Annuler",
    back: "Retour",
    logOut: "Déconnexion", // @demo remove-current-line
  },
  welcomeScreen: {
    postscript:
      "psst  — Ce n'est probablement pas à quoi ressemble votre application. (À moins que votre designer ne vous ait donné ces écrans, dans ce cas, mettez la en prod !)",
    readyForLaunch: "Votre application, presque prête pour le lancement !",
    exciting: "(ohh, c'est excitant !)",
    letsGo: "Allons-y !", // @demo remove-current-line
  },
  errorScreen: {
    title: "Quelque chose s'est mal passé !",
    friendlySubtitle:
      "C'est l'écran que vos utilisateurs verront en production lorsqu'une erreur sera lancée. Vous voudrez personnaliser ce message (situé dans `app/i18n/fr.ts`) et probablement aussi la mise en page (`app/screens/ErrorScreen`). Si vous voulez le supprimer complètement, vérifiez `app/app.tsx` pour le composant <ErrorBoundary>.",
    reset: "RÉINITIALISER L'APPLICATION",
    traceTitle: "Erreur depuis %{name}", // @demo remove-current-line
  },
  emptyStateComponent: {
    generic: {
      heading: "Si vide... si triste",
      content:
        "Aucune donnée trouvée pour le moment. Essayez de cliquer sur le bouton pour rafraîchir ou recharger l'application.",
      button: "Essayons à nouveau",
    },
  },
  // @demo remove-block-start
  errors: {
    invalidEmail: "Adresse e-mail invalide.",
  },
  tabs: {
    Home: "Maison",
    Wallet: "Wallet",
    MySpaces: "My Spaces",
    Orders: "Orders",
    Profile: "Profile",
  },
  loginScreen: {
    signIn: "Se connecter",
    enterDetails:
      "Entrez vos informations ci-dessous pour débloquer des informations top secrètes. Vous ne devinerez jamais ce que nous avons en attente. Ou peut-être que vous le ferez ; ce n'est pas de la science spatiale ici.",
    emailFieldLabel: "E-mail",
    passwordFieldLabel: "Mot de passe",
    emailFieldPlaceholder: "Entrez votre adresse e-mail",
    passwordFieldPlaceholder: "Mot de passe super secret ici",
    tapToSignIn: "Se connecter",
    hint: "Astuce : vous pouvez utiliser n'importe quelle adresse e-mail et votre mot de passe préféré :)",
    continue: "ou continuez avec",
    continuegoogle: "Continuer avec Google",
    donthaveaccount: "Vous n'avez pas de compte ?",
    singup: "S'inscrire",
    forgotPassword: "Mot de passe oublié?",
  },

  createAccountScreen: {
    heading: "Créez votre compte",
    title: "Qu'est-ce qui vous décrit le mieux ?",
    tenant: "Locataire",
    landlord: "Propriétaire",
    next: "Suivante",
  },
  addInfoScreen: {
    header: "Informations personnelles",
    firstNameLabel: "Prénom",
    firstNamePlaceholder: "Entrez votre prénom",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Entrer le nom de famille",
    dateOfBirthLabel: "Date de naissance",
    dateOfBirthPlaceholder: "Entrer date de naissance",
    genderLebel: "Genre",
    selectLebel: "Sélectionner",
    emailLabel: "E-mail",
    emailPlaceholder: "Entrez votre e-mail",
    phoneNumberLabel: "Numéro de téléphone",
    next: "Suivante",
    male: "Mâle",
    female: "Femelle",
  },
  home: {
    yourlocation: "Votre emplacement",
    location: "San Diego, Californie",
    showbalance: "Afficher le solde",
    hidebalance: "Masquer le solde",
    viewwallet: "Détails du portefeuille",
    requestwithdraw: "Demande de retrait",
    active: "Active",
    editspace: "Modifier l'espace",
    vieworder: "Afficher les commandes",
    upcomingparking: "Stationnements à venir",
    parkingspace: "Vos places de stationnement",
    details: "Détails",
    linkbankaccount: "Lier un compte bancaire",
    linkaccountdetail:
      "Afin de procéder aux retraits, vous devez lier votre compte bancaire. Veuillez lier votre compte bancaire pour configurer votre méthode de retrait.",
    notnow: "Pas maintenant",
    linkbank: "Banque de liens",
    congrats: "Toutes nos félicitations!",
    accountready: "Votre compte est prêt à être utilisé.",
    gotohome: "Aller à la page d'accueil",
  },

  lindaccountScreen: {
    heading: "Liez votre compte bancaire",
    accountlable: "Titre de compte",
    accountplaceholder: "Entrez le titre du compte",
    banklabel: "Sélectionnez la banque",
    bankplaceholder: "Sélectionner",
    accountnumberLabel: "N ° de compte",
    accuntnumberplaceholder: "Entrez le numéro de compte",
    agree: "Je suis d'accord avec le Park Genius",
    termsofservice: "Conditions de services",
    and: "et",
    privacypolicy: "politique de confidentialité",
    skip: "Sauter",
    link: "Lien",
  },
  enteramountScreen: {
    header: "Montant du retrait",
    title: "Combien souhaiteriez-vous retirer ?",
    continue: "Continuer",
  },
  withdrawndetailsScreen: {
    header: "Montant du retrait",
    accounttitlelabel: "Titre de compte",
    banklabel: "Sélectionnez la banque",
    accountnolabel: "N ° de compte",
    withdraw: "Retirer",
    thankyou: "Merci",
    witdhrawndesc:
      "Pour votre demande de retrait. Nous traiterons votre demande et vous recevrez une notification une fois la transaction terminée.",
    gotohomepage: "Aller à la page d'accueil",
  },
  notificationScreen: {
    header: "Notifications",
    today: "Aujourd'hui",
    ordercompleted: "Commande terminée",
    earned: "Vous avez gagné",
    congratulations: "Félicitations 🎊",
    yourearning: "Vos gains de",
    availableinwallet:
      "sont maintenant disponibles dans votre portefeuille et prêts à être retirés.",
    yesterday: "Hier",
    parkingorder: "Vous avez une nouvelle commande de stationnement.",
    banklinked: "Compte bancaire lié",
    verificationsuccessful: "Vérification réussie",
    verified: "Vérification du compte terminée",
  },

  walletScreen: {
    header: "Détails du portefeuille",
    earning: "Gains",
    all: "Toute",
    parkingspace: "Vos places de stationnement",
    totalearning: "Total des gains",
    active: "Active",
    viewdetails: "Voir les détails",
  },
  totalearningScreen: {
    header: "Total des gains",
    completedorder: "Commandes terminées",
    active: "Active",
  },

  completedOrderScreen: {
    header: "Commande terminée",
    customername: "Nom du client",
    vehicletype: "Type de véhicule",
    vehiclename: "Nom du véhicule",
    number: "Nombre",
    date: "Date",
    duration: "Durée",
    time: "Temps",
    perhour: "Montant / heure",
    totlahours: "Heures totales",
    platformfees: "Frais de plateforme",
    receivedamount: "Montant reçu",
  },

  myspacesScreen: {
    header: "Mes places de stationnement",
    available: "Disponible pour les réservations",
    editbutton: "Modifier l'espace",
    vieworder: "Afficher les commandes",
    editparking: "Modifier l'espace de stationnement",
    modalheading: "Es-tu sûr?",
    modaldesc:
      "vous souhaitez désactiver cette place de parking ? Il ne sera plus disponible pour les réservations.",
    notnow: "Pas maintenant",
    deacvtive: "Désactiver",
  },
  addspaceScreen: {
    header: "Ajoutez votre espace de stationnement",
    namelabel: "Entrez le nom de votre place de stationnement",
    nameplaceholder: "Entrez le nom",
    desclabel: "Entrez la description",
    descplaceholder: "Lorem ipsum dolor sit amet consecuto",
    offerlabel: "Quels types de parkings proposez-vous ?",
    parkingtype:
      "Quel type de place de parking possédez-vous ou proposez-vous à la location ?",
    addphotolabel:
      "Montrez votre espace de stationnement - Ajoutez des photos maintenant",
    next: "Suivante",
  },

  availabilityScreen: {
    header: "Prix et disponibilité",
    hourlyrate: "What is your hourly rate for renting your parking space?",
    availibility:
      "Merci de préciser les jours de la semaine et les heures de disponibilité de votre place de parking",
    from: "Depuis",
    end: "Heure de fin",
    mon: "Lundi",
    tue: "Mardi",
    wed: "Mercredi",
    thu: "Jeudi",
    fri: "Vendredi",
    sat: "Samedi",
    sun: "Dimanche",
    next: "Suivante",
  },

  addLocationScreen: {
    header: "Ajouter un emplacement",
    streetlabel: "Adresse de la rue",
    streetplaceholder: "Entrez l'adresse postale",
    citylabel: "Sélectionnez une ville",
    statelabel: "État/Province",
    zipcodelabel: "Zip / code postal",
    countryLabel: "Choisissez le pays",
    select: "Sélectionner",
    next: "Suivante",
  },
  verifySpaceScreen: {
    header: "Vérifiez votre espace",
    identitycard: "Carte d'identité",
    document: "Document foncier",
    continue: "Continuer",
    gotospace: "Accédez à Mes espaces",
    modaldesc:
      "Votre place de parking est en attente d'approbation. Nous vous informerons une fois que notre équipe administrative l’aura approuvé. Merci pour votre soumission.",
    congrats: "Toutes nos félicitations!",
    submit: "Soumettre",
  },
  verifyIdcardScreen: {
    header: "Vérifiez votre espace",
    label: "Prenez une photo du recto de votre carte d'identité",
    takepick: "Prendre une photo",
    continue: "Continuer",
  },
  scanDocumentScreen: {
    header: "Numériser un document",
    heading: "Scannez votre document",
  },
  spaceDetailsScreen: {
    header: "Détails",
    direction: "Directions",
    about: "À propos",
    review: "Commentaires",
    desc: "Description",
    parkingtime: "Temps de stationnement",
    editparking: "Modifier l'espace de stationnement",
  },
  
  editspaceScreen:{
    header: "Modifiez votre espace de stationnement",

  },
  ordersScreen:{
    header:"Ordres",
    active:"Active",
    upcoming:"A venir",
    completed:"Complété",
    expected:"Montant attendu",
    activeorder:"Commande active",
    upcomingorder:"Commande à venir",
    completedorder:"Commande terminée",
  },
  demoNavigator: {
    componentsTab: "Composants",
    debugTab: "Débogage",
    communityTab: "Communauté",
    podcastListTab: "Podcasts",
  },
  demoCommunityScreen: {
    title: "Connectez-vous avec la communauté",
    tagLine:
      "Rejoignez la communauté d'ingénieurs React Native d'Infinite Red et améliorez votre développement d'applications avec nous !",
    joinUsOnSlackTitle: "Rejoignez-nous sur Slack",
    joinUsOnSlack:
      "Vous souhaitez vous connecter avec des ingénieurs React Native du monde entier ? Rejoignez la conversation dans la communauté Slack d'Infinite Red ! Notre communauté en pleine croissance est un espace sûr pour poser des questions, apprendre des autres et développer votre réseau.",
    joinSlackLink: "Rejoindre la communauté Slack",
    makeIgniteEvenBetterTitle: "Rendre Ignite encore meilleur",
    makeIgniteEvenBetter:
      "Vous avez une idée pour rendre Ignite encore meilleur ? Nous sommes heureux de l'entendre ! Nous cherchons toujours des personnes qui veulent nous aider à construire les meilleurs outils React Native. Rejoignez-nous sur GitHub pour nous aider à construire l'avenir d'Ignite.",
    contributeToIgniteLink: "Contribuer à Ignite",
    theLatestInReactNativeTitle: "Les dernières nouvelles de React Native",
    theLatestInReactNative:
      "Nous sommes là pour vous tenir au courant de tout ce que React Native a à offrir.",
    reactNativeRadioLink: "React Native Radio",
    reactNativeNewsletterLink: "React Native Newsletter",
    reactNativeLiveLink: "React Native Live",
    chainReactConferenceLink: "Conférence Chain React",
    hireUsTitle: "Engagez Infinite Red pour votre prochain projet",
    hireUs:
      "Que ce soit pour gérer un projet complet ou pour former des équipes à notre formation pratique, Infinite Red peut vous aider pour presque tous les projets React Native.",
    hireUsLink: "Envoyez-nous un message",
  },
  demoShowroomScreen: {
    jumpStart: "Composants pour démarrer votre projet !",
    lorem2Sentences:
      "Nulla cupidatat deserunt amet quis aliquip nostrud do adipisicing. Adipisicing excepteur elit laborum Lorem adipisicing do duis.",
    demoHeaderTxExample: "Yay",
    demoViaTxProp: "Via la propriété `tx`",
    demoViaSpecifiedTxProp: "Via la propriété `{{prop}}Tx` spécifiée",
  },
  demoDebugScreen: {
    howTo: "COMMENT FAIRE",
    title: "Débugage",
    tagLine:
      "Félicitations, vous avez un modèle d'application React Native très avancé ici. Profitez de cette base de code !",
    reactotron: "Envoyer à Reactotron",
    reportBugs: "Signaler des bugs",
    demoList: "Liste de démonstration",
    demoPodcastList: "Liste de podcasts de démonstration",
    androidReactotronHint:
      "Si cela ne fonctionne pas, assurez-vous que l'application de bureau Reactotron est en cours d'exécution, exécutez adb reverse tcp:9090 tcp:9090 à partir de votre terminal, puis rechargez l'application.",
    iosReactotronHint:
      "Si cela ne fonctionne pas, assurez-vous que l'application de bureau Reactotron est en cours d'exécution, puis rechargez l'application.",
    macosReactotronHint:
      "Si cela ne fonctionne pas, assurez-vous que l'application de bureau Reactotron est en cours d'exécution, puis rechargez l'application.",
    webReactotronHint:
      "Si cela ne fonctionne pas, assurez-vous que l'application de bureau Reactotron est en cours d'exécution, puis rechargez l'application.",
    windowsReactotronHint:
      "Si cela ne fonctionne pas, assurez-vous que l'application de bureau Reactotron est en cours d'exécution, puis rechargez l'application.",
  },
  demoPodcastListScreen: {
    title: "Épisodes de Radio React Native",
    onlyFavorites: "Afficher uniquement les favoris",
    favoriteButton: "Favori",
    unfavoriteButton: "Non favori",
    accessibility: {
      cardHint:
        "Double-cliquez pour écouter l'épisode. Double-cliquez et maintenez pour {{action}} cet épisode.",
      switch: "Activez pour afficher uniquement les favoris",
      favoriteAction: "Basculer en favori",
      favoriteIcon: "Épisode non favori",
      unfavoriteIcon: "Épisode favori",
      publishLabel: "Publié le {{date}}",
      durationLabel:
        "Durée : {{hours}} heures {{minutes}} minutes {{seconds}} secondes",
    },
    noFavoritesEmptyState: {
      heading: "C'est un peu vide ici",
      content:
        "Aucun favori n'a été ajouté pour le moment. Appuyez sur le cœur d'un épisode pour l'ajouter à vos favoris !",
    },
  },
  // @demo remove-block-end
};

export default fr;
