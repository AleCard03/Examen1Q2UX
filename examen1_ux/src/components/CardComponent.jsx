import React from 'react';
import { Card } from 'react-bootstrap';
import styles from '@/styles/CardComponent.module.css';

const CardComponent = ({ image, isNew, isTop, idx }) => {
  return (
    <Card className={`bg-dark ${styles.card}`} style = {{width: '14rem'}}>
      <Card.Img src={image} />
      <Card.ImgOverlay>
        {isNew && (
          <div className={styles.newBadge}>NUEVO</div>
        )}
        {isTop && (
          <div className={styles.number}>{idx}</div>
        )}
      </Card.ImgOverlay>
    </Card>
  )
}
export default CardComponent;