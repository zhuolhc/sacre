import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { foodData } from './data';

const FoodDetailsPage = () => {
    const { foodName } = useParams();
    const { t } = useTranslation();
    const food = foodData.find((food) => food.name === foodName);

    if (!food) {
        return <div>{t('foodNotFound')}</div>;
    }

    return (
        <div className="food-details-page">
            <div className="food-details-header">
                <h1>{t(food.name)}</h1>
            </div>
            <div className="food-details-content">
                <div className="food-image">
                    <img src={food.imageUrl} alt={food.name} />
                </div>
                <div className="food-description">
                    <p>{t(food.description)}</p>
                    <p>{t(food.des2)}</p>
                    <video width="640" height="360" controls>
                        <source src={food.videoUrl} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailsPage;