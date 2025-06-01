import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from '../components/NavbarComponent';
import CarouselComponent from '../components/CarouselComponent';
import Top10SliderComponent from '@/components/Top10SliderComponent';
import DestacadosSliderComponent from '@/components/DestacadosSliderComponent';
import SliderComponent from '@/components/SliderComponent';
/* const cardsData2 = [
  { id: 1, title: 'Card 1', image: '/Imagenes/TF3DOTM.jpg' },
  { id: 2, title: 'Card 2', image: '/Imagenes/Barcelona.jpg' },
  { id: 3, title: 'Card 3', image: '/Imagenes/BTTF_THUMB.webp' },
  { id: 4, title: 'Card 4', image: '/Imagenes/HDA.jpg' },
  { id: 5, title: 'Card 5', image: '/Imagenes/MGS3.jpg' },
  { id: 6, title: 'Card 6', image: '/Imagenes/DBZ.jpg' },
]; */

const top10Data = [
  { id: 1, title: 'Transformers One', image: '/Imagenes/TFONE.jpg', isTop:true },
  { id: 2, title: 'Regular Show', image: '/Imagenes/RS.jpg', isTop:true },
  { id: 3, title: 'The Dark Knight', image: '/Imagenes/TDK.jpg', isTop:true },
  { id: 4, title: 'Dan Da Dan', image: '/Imagenes/DanDaDan.jpg', isTop:true },
  { id: 5, title: 'Back To The Future II', image: '/Imagenes/BTTF2.jpg', isTop:true },
  { id: 6, title: 'Metal Gear Solid: The Phantom Pain', image: '/Imagenes/MGSV.jpg', isTop:true },
  { id: 7, title: 'Inglorious Basterds', image: '/Imagenes/IB.jpg', isTop:true },
  { id: 8, title: 'Breaking Bad', image: '/Imagenes/BrBa.jpg', isTop:true },
  { id: 9, title: 'Transformers', image: '/Imagenes/TF2007.jpg', isTop:true },
  { id: 10, title: 'Code Geass: Lelouch of the Rebellion', image: '/Imagenes/CG.jpg', isTop:true },
];

const cardsData = [
  {id: 1,title: "The Chosen",image: '/Imagenes/TC.jpg',isNew: false },
  {id: 2,title: "Coyote Vs ACME",image: '/Imagenes/CVA.jpg',isNew: true },
  {id: 3,title: "Transformers: Revenge Of The Fallen",image: '/Imagenes/TF2.jpg',isNew: false },
  {id: 4,title: "Ready Player One",image: '/Imagenes/RP1.jpg',isNew: true },
  {id: 5,title: "Fullmetal Alchemist Brotherhood",image: '/Imagenes/FMA.jpg',isNew: false },
  {id: 6,title: "A Minecraft Movie",image: '/Imagenes/AMCM.jpg',isNew: true },
  {id: 7,title: "The Super Mario Bros Movie",image: '/Imagenes/SMM.jpg',isNew: false },
  {id: 8,title: "Death Note",image: '/Imagenes/DN.jpg',isNew: false },
  {id: 9,title: "Forrest Gump",image: '/Imagenes/FG.jpg',isNew: true },
  {id: 10,title: "bumblebee",image: '/Imagenes/BBM.jpg',isNew: false },
 
];

function App() {
  return (
    <>
      <NavbarComponent />
      <div style={{ paddingTop: '56px' }}>
         <CarouselComponent />
      </div>
     <Top10SliderComponent  cardsData={top10Data}/>
     <DestacadosSliderComponent cardsData={cardsData}/>
    </>
  );
}

export default App;