import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 导入翻译文件
import translationEN from './locales/en.json';
import translationZH from './locales/zh.json';

// 初始化i18n实例
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEN },
            zh: { translation: translationZH }
        },
        lng: 'en', // 默认语言
        fallbackLng: 'en', // 回退语言
        interpolation: { escapeValue: false }
    });