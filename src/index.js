import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getDatabase } from 'firebase/database';



import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXXfbkrzf8OLpxqzZtxWULSbGhSgLxqVI",
  authDomain: "furious-five-8e8d0.firebaseapp.com",
  projectId: "furious-five-8e8d0",
  storageBucket: "furious-five-8e8d0.appspot.com",
  messagingSenderId: "733927279282",
  appId: "1:733927279282:web:6ababdfde1c23ac8e717ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

