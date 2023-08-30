import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQj73faeqANWsKc8ccu9o0YXpPkGvljXI",
  authDomain: "react-app-tk.firebaseapp.com",
  projectId: "react-app-tk",
  storageBucket: "react-app-tk.appspot.com",
  messagingSenderId: "743244141802",
  appId: "1:743244141802:web:c941d92264e42ffe0eb393"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
