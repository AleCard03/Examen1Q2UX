import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardComponent = ({ image, title}) => {
  return (
    <Card className="bg-dark" style = {{width: '14rem'}}>
      <Card.Img src={image} />
      <Card.ImgOverlay>
      </Card.ImgOverlay>
    </Card>
  )
}
export default CardComponent;