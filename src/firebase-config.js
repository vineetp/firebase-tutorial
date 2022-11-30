const config = {
    /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
    apiKey: "AIzaSyACQy8hF0H1_crBEDlTLc62DVVZm_lZ9bg",
      authDomain: "friendlychat-f4270.firebaseapp.com",
      projectId: "friendlychat-f4270",
      storageBucket: "friendlychat-f4270.appspot.com",
      messagingSenderId: "674878508972",
      appId: "1:674878508972:web:531c069f820b8f288e7409"
  };
  
  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return config;
    }
  }