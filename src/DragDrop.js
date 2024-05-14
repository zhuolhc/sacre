import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { foodData } from './data';

const DragDrop = () => {
    const { t } = useTranslation();
    const [foodItems, setFoodItems] = useState(foodData.map((food) => ({
        ...food,
        position: { x: Math.random() * 500, y: Math.random() * 500 }
    })));
    const dropAreaRef = useRef(null);

    const handleDragStart = (e, food) => {
        e.dataTransfer.setData('text/plain', JSON.stringify(food));
    };

    const handleDrop = (e) => {
        const food = JSON.parse(e.dataTransfer.getData('text/plain'));
        const newPosition = { x: e.clientX - dropAreaRef.current.offsetLeft, y: e.clientY - dropAreaRef.current.offsetTop };
        setFoodItems(
            foodItems.map((item) =>
                item.name === food.name ? { ...item, position: newPosition } : item
            )
        );
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            const draggedFood = document.querySelector('.dragging');
            if (draggedFood) {
                draggedFood.style.left = `${e.clientX - draggedFood.offsetWidth / 2}px`;
                draggedFood.style.top = `${e.clientY - draggedFood.offsetHeight / 2}px`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="drag-drop-container">
            <h2 className="animate__animated animate__fadeInDown">{t('dragDropTitle')}</h2>
            <div
                className="drag-drop-area"
                ref={dropAreaRef}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
            >
                {foodItems.map((food) => (
                    <div
                        key={food.name}
                        className="draggable-food animate__animated animate__fadeIn"
                        style={{
                            left: food.position.x,
                            top: food.position.y,
                        }}
                        draggable
                        onDragStart={(e) => handleDragStart(e, food)}
                        onDragStart={(e) => e.currentTarget.classList.add('dragging')}
                        onDragEnd={(e) => e.currentTarget.classList.remove('dragging')}
                    >
                        <img src={food.imageUrl} alt={food.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DragDrop;