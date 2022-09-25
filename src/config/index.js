// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC33KuuIAMD7IWwhik5NcUapvJaxiif1es",
  authDomain: "url-shorten-app-879d1.firebaseapp.com",
  projectId: "url-shorten-app-879d1",
  storageBucket: "url-shorten-app-879d1.appspot.com",
  messagingSenderId: "418689807118",
  appId: "1:418689807118:web:9abcbe114297a3e05e9d5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;