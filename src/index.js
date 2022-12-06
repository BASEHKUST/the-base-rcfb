// DON'T TOUCH THIS FILE
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./index.css"

// Firebase Configuration DON'T TOUCH!
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDFK9tCGFyCU_yDjRMmg_hK1XyYaFJHH4Y",
  authDomain: "the-base-rcfb-7159f.firebaseapp.com",
  projectId: "the-base-rcfb-7159f",
  storageBucket: "the-base-rcfb-7159f.appspot.com",
  messagingSenderId: "67790081552",
  appId: "1:67790081552:web:a1efaf4927e83494dcc495",
  measurementId: "G-R9WQY7C2ER"
};
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* DON'T TOUCH THIS FILE */
  <React.Fragment>
    <App />
  </React.Fragment>
);
