import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
//import {getFirestore} from "https://www.gstatic.com/firefirebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBZgdPi637NQcicnI0YZ4kxHzBwiFauZDA",
  authDomain: "myhealth-7466a.firebaseapp.com",
  projectId: "myhealth-7466a",
  storageBucket: "myhealth-7466a.appspot.com",
  messagingSenderId: "208223926138",
  appId: "1:208223926138:web:d6170ab809bf4ba2fa08c3"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
//const db = getFirestore(app, {experimentalForceLongPolling: true})

export {app,auth}
