import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const CarouselComponent = () => {
  const slides = [
    {
      src: '/Imagenes/TF3DOTM.jpg',
      title: 'Transformers: Dark of the Moon',
      description: 'En esta tercera entrega de la saga Transformers, los Autobots descubren un antiguo secreto oculto en la Luna que podría cambiar el curso de la guerra contra los Decepticons. Mientras los humanos se ven atrapados en medio del conflicto, Sam Witwicky y sus amigos deben unirse a los Autobots para evitar que los Decepticons utilicen el poder de la tecnología lunar para conquistar la Tierra.',
    },
    
    {
      src: '/Imagenes/Barcelona.jpg',
      title: 'Barcelona: A New Era',
      description: 'Descubre la transformación del FC Barcelona en esta serie documental que ofrece un acceso sin precedentes a los momentos más cruciales del club. Desde la dolorosa derrota 2-8 ante el Bayern de Múnich en 2020, pasando por la salida de Lionel Messi, hasta la llegada de Xavi Hernández como entrenador, la serie narra la reconstrucción institucional y deportiva del Barça.',
    },
     {
      src: '/Imagenes/BTTF.jpg',
      title: 'Back to the Future',
      description: 'Marty McFly, un adolescente californiano de los 80, es accidentalmente enviado al año 1955 en una máquina del tiempo construida por su excéntrico amigo, el Dr. Emmett Brown. Allí debe asegurarse de que sus jóvenes padres se enamoren para no desaparecer del futuro… ¡mientras busca una forma de regresar a casa!',
    },
    {
      src: '/Imagenes/HDA.jpg',
      title: 'Hora de Aventura',
      description: 'Acompaña a Finn, un valiente niño humano, y a Jake, su fiel perro mágico con poderes elásticos, en alocadas y heroicas aventuras a través de la Tierra de Ooo. Entre reinos mágicos, princesas excéntricas y criaturas inusuales, esta serie única mezcla humor absurdo, emoción y momentos profundamente conmovedores. Una odisea animada que ha marcado a generaciones. ',
    },
    {
      src: '/Imagenes/MGS3.jpg',
      title: 'Metal Gear Solid: Snake Eater',
      description: 'En plena Guerra Fría, el agente especial Naked Snake es enviado a las profundidades de la selva soviética para evitar una crisis nuclear y enfrentar a su mentora convertida en traidora: The Boss. A medida que se infiltra en territorio enemigo, deberá sobrevivir al entorno hostil, descubrir secretos políticos ocultos y enfrentarse a una unidad de élite con habilidades letales. Una historia intensa de traición, lealtad y el nacimiento de una leyenda.',
    },
    {
      src: '/Imagenes/DBZ.jpg',
      title: 'Dragon Ball Z',
      description: 'Goku ha crecido, y ahora deberá proteger la Tierra de amenazas cada vez más poderosas. Desde guerreros del espacio hasta androides, él y sus amigos enfrentan batallas épicas que definirán el destino del universo. Con transformaciones legendarias, combates intensos y momentos cargados de emoción, Dragon Ball Z es un ícono del anime que marcó una era.',
    },
     
    
  ];

  return (
    <Carousel fade>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={slide.src}
            alt={slide.title}
            style={{ height: '100vh', objectFit: 'cover' }}
          />
          <Carousel.Caption className="text-start" style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: '10px' }}>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <Button variant="light">Ver ahora </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;