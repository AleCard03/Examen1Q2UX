import React, { useRef } from 'react';
import CardComponent from './CardComponent';
import styles from '@/styles/Top10SliderComponent.module.css';

const Top10SliderComponent = ({ cardsData }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.title}>
        <span>TOP 10</span>
      </h2>

      <div className={styles.sliderWrapper}>
        <button className={styles.arrow} onClick={() => scroll('left')}>
          &lt;
        </button>

        <div className={styles.slider} ref={sliderRef}>
          {cardsData.map((card, index) => (
            <div className={styles.card} key={card.id}>
              <div className={styles.number}>{index + 1}</div>
              <img src={card.image} alt={card.title} className={styles.image} />
            </div>
          ))}
        </div>

        <button className={styles.arrow} onClick={() => scroll('right')}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Top10SliderComponent;
