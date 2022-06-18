
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'; //language detector
import HttpApi from 'i18next-http-backend'; // can store different languages in files
import 'bootstrap/dist/js/bootstrap.js';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icons.min.css';
import './index.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import App from './App';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  
  .init({
    supportedLngs: ['en', 'pl'],
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    fallbackLng: "en",
    detection: {
      order: [ 'cookie','htmlTag',  'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/local/{{lng}}/translation.json',
    }
  });


const loadingMarkup = (
  <div className='py-4 text-center'>
    <h2>Loading..</h2>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Suspense fallback = {loadingMarkup}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>
);

