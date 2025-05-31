import React, { useRef } from 'react';
import CardComponent from './CardComponent';
import styles from '@/styles/SliderComponent.module.css';


const SliderComponent = ({cardsData}) => {
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
      <button className={styles.arrow} onClick={() => scroll('left')}>
        &lt;
      </button>
      <div className={styles.slider} ref={sliderRef}>
        {cardsData.map((card) => (
          <CardComponent key={card.id} image={card.image} title={card.title} />
        ))}
      </div>
      <button className={styles.arrow} onClick={() => scroll('right')}>
        &gt;
      </button>
    </div>
  );
};

export default SliderComponent;