import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_bd from "./translations/bd/common.json"
import common_en from "./translations/bd/common.json"

i18next.init({
  whitelist: ['en','bd'],
  interpolation: { escapeValue: false },  
  lng: 'en',                              
  resources: {
      en: {
          common: common_en               
      },
      bd: {
        common: common_bd               
    },
  }
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App/>
    </I18nextProvider>,
    document.getElementById('root')
);