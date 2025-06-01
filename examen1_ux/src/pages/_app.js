import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import CarouselComponent from '../components/CarouselComponent';
import Top10SliderComponent from '@/components/Top10SliderComponent';
//import SliderComponent from '@/components/SliderComponent';

//const cardsData = [
  //{ id: 1, title: 'Card 1', image: '/Imagenes/TF3DOTM.jpg' },
  //{ id: 2, title: 'Card 2', image: '/Imagenes/Barcelona.jpg' },
  //{ id: 3, title: 'Card 3', image: '/Imagenes/BTTF_THUMB.webp' },
  //{ id: 4, title: 'Card 4', image: '/Imagenes/HDA.jpg' },
  //{ id: 5, title: 'Card 5', image: '/Imagenes/MGS3.jpg' },
  //{ id: 6, title: 'Card 6', image: '/Imagenes/DBZ.jpg' },
//];

const top10Data = [
  { id: 1, title: 'Transformers One', image: '/Imagenes/TFONE.jpg' },
  { id: 2, title: 'Regular Show', image: '/Imagenes/RS.jpg' },
  { id: 3, title: 'The Dark Knight', image: '/Imagenes/TDK.jpg' },
  { id: 4, title: 'Dan Da Dan', image: '/Imagenes/DanDaDan.jpg' },
  { id: 5, title: 'Back To The Future II', image: '/Imagenes/BTTF2.jpg' },
  { id: 6, title: 'Metal Gear Solid: The Phantom Pain', image: '/Imagenes/MGSV.jpg' },
  { id: 7, title: 'Inglorious Basterds', image: '/Imagenes/IB.jpg' },
  { id: 8, title: 'Breaking Bad', image: '/Imagenes/BrBa.jpg' },
  { id: 9, title: 'Transformers', image: '/Imagenes/TF2007.jpg' },
  { id: 10, title: 'Code Geass: Lelouch of the Rebellion', image: '/Imagenes/CG.jpg' },
];

function App() {
  return (
    <>
      <NavbarComponent />
      <div style={{ paddingTop: '56px' }}>
         <CarouselComponent />
      </div>
     <Top10SliderComponent  cardsData={top10Data}/>
    </>
  );
}

export default App;