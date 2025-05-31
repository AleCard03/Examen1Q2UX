import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from '@/styles/CardComponent.module.css';

const CardComponent = ({ image, title}) => {
  return (
    <Card className={`bg-dark ${styles.card}`} style = {{width: '14rem'}}>
      <Card.Img src={image} />
      <Card.ImgOverlay>
      </Card.ImgOverlay>
    </Card>
  )
}
export default CardComponent;