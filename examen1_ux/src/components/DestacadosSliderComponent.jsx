import React, { useRef } from 'react';
import styles from '@/styles/DestacadosSliderComponent.module.css';

const DestacadosSliderComponent = ({ cardsData }) => {
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
        <span>Destacados</span>
      </h2>

      <div className={styles.sliderWrapper}>
        <button className={styles.arrow} onClick={() => scroll('left')}>
          &lt;
        </button>

        <div className={styles.slider} ref={sliderRef}>
          {cardsData.map((card, index) => (
            <div className={styles.card} key={card.id}>
              {card.isNew && <div className={styles.newBadge}>NUEVO</div>}
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

export default DestacadosSliderComponent;
