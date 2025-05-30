import React, { useRef } from 'react';
import CardComponent from './CardComponent';
import styles from '@/styles/Slider.module.css';

const cardsData = [
  { id: 1, title: 'Card 1', image: '/Imagenes/TF3DOTM.jpg' },
  { id: 2, title: 'Card 2', image: '/Imagenes/Barcelona.jpg' },
  { id: 3, title: 'Card 3', image: '/Imagenes/BTTF.jpg' },
  { id: 4, title: 'Card 4', image: '/Imagenes/HDA.jpg' },
  { id: 5, title: 'Card 5', image: '/Imagenes/MGS3.jpg' },
  { id: 6, title: 'Card 6', image: '/Imagenes/DBZ.jpg' },
  // Add more cards as needed
];

const SliderComponent = () => {
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