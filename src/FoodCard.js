import React from 'react';
import { useTranslation } from 'react-i18next';

const FoodCard = ({ food }) => {
    const { t } = useTranslation();

    return (
        <div className="food-card">
            <div className="food-card-image">
                <img src={food.imageUrl} alt={food.name} />
            </div>
            <div className="food-card-content">
                <h3>{t(food.name)}</h3>
                <p>{t(food.description)}</p>
            </div>
        </div>
    );
};

export default FoodCard;