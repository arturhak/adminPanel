import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {translationEN} from "./translationEN";
import {translationRU} from "./translationRU";

const resources = {
    ENG: {
        translation: translationEN
    },
    RUS: {
        translation: translationRU
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "RUS",
        fallbackLng: 'ENG',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
