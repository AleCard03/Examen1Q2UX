import React, { useRef } from 'react';
import styles from '@/styles/CategorySliderComponent.module.css';
import { Card } from 'react-bootstrap';
import CardComponent from './CardComponent';
import SliderComponent from './SliderComponent';

const CategorySliderComponent = ({ cardsData, texto }) => {
  return (
    <>
      <div className={styles.sliderContainer}>
        <h2 className={styles.title}>
          <span>{texto}</span>
        </h2>
        <SliderComponent cardsData={cardsData} />
      </div>

    </>
  )

};

export default CategorySliderComponent;
