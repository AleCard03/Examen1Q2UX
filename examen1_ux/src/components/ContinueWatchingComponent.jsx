import React, { useRef } from 'react';
import styles from '@/styles/ContinueWatching.module.css';

const ContinueWatching = ({ items }) => {
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
    <div className={styles.container}>
      <h2 className={styles.title}>Seguir Viendo</h2>
      <div className={styles.sliderContainer}>
        <button className={styles.arrow} onClick={() => scroll('left')}>
          &lt;
        </button>
        <div className={styles.slider} ref={sliderRef}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={item.image} alt={item.title} className={styles.image} />
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                {item.isNew && <div className={styles.newBadge}>NUEVO</div>}
                <div className={styles.playButton}>
                  <svg viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.episode}>{item.episode}</p>
                <p className={styles.timeLeft}>{item.timeLeft} left</p>
                <div className={styles.meta}>
                  <span className={styles.year}>{item.year}</span>
                </div>
                <div className={styles.meta}>
                  <span className={styles.rating}>{item.rating}</span>
                </div>
              </div>
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

export default ContinueWatching;
