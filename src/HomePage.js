import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard';
import { foodData } from './data';

const HomePage = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFoods = foodData.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home-page">
            <div className="search-bar">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={t('searchPlaceholder')}
                />
            </div>
            <div className="food-list">
                {filteredFoods.map((food) => (
                    <Link key={food.name} to={`/food/${food.name}`}>
                        <FoodCard food={food} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;