// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6RM8rjC5AaPXzTMS0hH1IiIVEnqGgzIY",
  authDomain: "courses-project-client.firebaseapp.com",
  projectId: "courses-project-client",
  storageBucket: "courses-project-client.appspot.com",
  messagingSenderId: "593045348012",
  appId: "1:593045348012:web:d736ed2d7cd17a2ca80909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;