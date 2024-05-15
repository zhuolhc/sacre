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
        const foodData = JSON.stringify(food);
        e.dataTransfer.setData('application/json', foodData);
    };

    const handleDrop = (e) => {
        const foodData = e.dataTransfer.getData('application/json');
        console.log('Dropped data:', foodData); // 添加这一行以记录拖放的数据

        if (foodData) { // 检查foodData是否为空或null
            const food = JSON.parse(foodData);
            const newPosition = { x: e.clientX - dropAreaRef.current.offsetLeft, y: e.clientY - dropAreaRef.current.offsetTop };
            setFoodItems(
                foodItems.map((item) =>
                    item.name === food.name ? { ...item, position: newPosition } : item
                )
            );
        } else {
            console.log('Invalid or empty data dropped'); // 添加无效/空数据的消息
        }
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