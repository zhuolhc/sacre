import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div className="about-page">
            <h1>{t('aboutTitle')}</h1>
            <p>{t('aboutDescription')}</p>
            {/* 添加更多关于页面的内容 */}
        </div>
    );
};

export default AboutPage;