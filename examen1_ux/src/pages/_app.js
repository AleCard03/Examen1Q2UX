import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import CarouselComponent from '../components/CarouselComponent';
import SliderComponent from '@/components/SliderComponent';

function App() {
  return (
    <>
      <NavbarComponent />
      <div style={{ paddingTop: '56px' }}>
        {}
         <CarouselComponent />
         <SliderComponent />
      </div>
    </>
  );
}

export default App;