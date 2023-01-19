import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCY0akhM-fUYvGF4hGWmyXacTkgX15zUDE",
  authDomain: "vue-chat-2094a.firebaseapp.com",
  databaseURL: "https://vue-chat-2094a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vue-chat-2094a",
  storageBucket: "vue-chat-2094a.appspot.com",
  messagingSenderId: "809068435841",
  appId: "1:809068435841:web:39ba0c5ba8d018f186b080"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp