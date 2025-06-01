import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from '../components/NavbarComponent';
import CarouselComponent from '../components/CarouselComponent';
import Top10SliderComponent from '@/components/Top10SliderComponent';
import CategorySliderComponent from '@/components/CategorySliderComponent';
import SliderComponent from '@/components/SliderComponent';


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
const forYou = [
  {id: 1,title: "El Tiempo Contigo",image: '/Imagenes/TNK.jpg',isNew: true },
  {id: 2,title: "Fullmetal Alchemist Brotherhood",image: '/Imagenes/FMA.jpg',isNew: false },
  {id: 3,title: "Dr. House",image: '/Imagenes/DH.jpg',isNew: false },
  {id: 4, title: 'Dan Da Dan', image: '/Imagenes/DanDaDan.jpg', isNew:true },
  {id: 5,title: "Supernatural",image: '/Imagenes/SPN.jpg',isNew: false },
  {id: 6,title: "A Minecraft Movie",image: '/Imagenes/AMCM.jpg',isNew: true },
  {id: 7,title: "Haikyuu!",image: '/Imagenes/HK.jpg',isNew: true },
  {id: 8,title: "Death Note",image: '/Imagenes/DN.jpg',isNew: false },
  {id: 9, title: 'The Dark Knight', image: '/Imagenes/TDK.jpg'},
  {id: 10, title: 'Breaking Bad', image: '/Imagenes/BrBa.jpg'},
 
];

function App() {
  return (
    <>
      <NavbarComponent />
      <div style={{ paddingTop: '56px' }}>
         <CarouselComponent />
      </div>
     <Top10SliderComponent  cardsData={top10Data}/>
     <CategorySliderComponent cardsData={cardsData} texto = "Destacados"/>
     <CategorySliderComponent cardsData={forYou} texto = "Para Tí"/>
    </>
  );
}

export default App;