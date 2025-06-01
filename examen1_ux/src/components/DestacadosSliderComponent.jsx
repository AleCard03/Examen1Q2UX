import React, { useRef } from 'react';
import styles from '@/styles/DestacadosSliderComponent.module.css';
import { Card } from 'react-bootstrap';
import CardComponent from './CardComponent';
import SliderComponent from './SliderComponent';

const DestacadosSliderComponent = ({ cardsData }) => {
  return (
    <>
      <div className={styles.sliderContainer}>
        <h2 className={styles.title}>
          <span>Destacados</span>
        </h2>
        <SliderComponent cardsData={cardsData} />
      </div>

    </>
  )

};

export default DestacadosSliderComponent;
