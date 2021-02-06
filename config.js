import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAJMv2St4UYYHHexUHuL9ngID577hW4ets",
  authDomain: "newsletter-878c2.firebaseapp.com",
  databaseURL: "https://newsletter-878c2-default-rtdb.firebaseio.com",
  projectId: "newsletter-878c2",
  storageBucket: "newsletter-878c2.appspot.com",
  messagingSenderId: "553927578362",
  appId: "1:553927578362:web:228e5811a674de6a166f43",
  measurementId: "G-RKGDKK762N"
};

let app = firebase.initializeApp(firebaseConfig);
  export default app.database();
