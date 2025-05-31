import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import CarouselComponent from '../components/CarouselComponent';
import SliderComponent from '@/components/SliderComponent';

const cardsData = [
  { id: 1, title: 'Card 1', image: '/Imagenes/TF3DOTM.jpg' },
  { id: 2, title: 'Card 2', image: '/Imagenes/Barcelona.jpg' },
  { id: 3, title: 'Card 3', image: '/Imagenes/BTTF_THUMB.webp' },
  { id: 4, title: 'Card 4', image: '/Imagenes/HDA.jpg' },
  { id: 5, title: 'Card 5', image: '/Imagenes/MGS3.jpg' },
  { id: 6, title: 'Card 6', image: '/Imagenes/DBZ.jpg' },
];

function App() {
  return (
    <>
      <NavbarComponent />
      <div style={{ paddingTop: '56px' }}>
         <CarouselComponent />
      </div>
      <SliderComponent  cardsData={cardsData}/>
    </>
  );
}

export default App;