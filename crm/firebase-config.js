// STEP 1: Create a free Firebase project at https://console.firebase.google.com
// STEP 2: Add a Web App inside the project, copy its config values below.
// STEP 3: Enable "Firestore Database" (production mode) and "Authentication -> Email/Password".
// STEP 4: In Authentication -> Users, manually add yourself as the one admin user.
// STEP 5: Paste the Firestore rules from crm/firestore.rules.txt into Firestore -> Rules.
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
