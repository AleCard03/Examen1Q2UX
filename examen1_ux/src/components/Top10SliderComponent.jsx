import React, { useRef } from 'react';
import CardComponent from './CardComponent';
import styles from '@/styles/Top10SliderComponent.module.css';
import SliderComponent from './SliderComponent';

const Top10SliderComponent = ({ cardsData }) => {
  return (
    <>
      <div className={styles.sliderContainer}>
        <h2 className={styles.title}>
          <span>Top 10</span>
        </h2>
        <SliderComponent cardsData={cardsData} />
      </div>

    </>
  )
};

export default Top10SliderComponent;
