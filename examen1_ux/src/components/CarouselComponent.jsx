import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const CarouselComponent = () => {
  const slides = [
    {
      src: '/Imagenes/TF3DOTM.jpg',
      title: 'Transformers: Dark of the Moon',
      description: 'Los Autobots descubren un secreto lunar que podría cambiar la guerra contra los Decepticons.',
    },
    {
      src: '/Imagenes/Barcelona.jpg',
      title: 'Barcelona: A New Era',
      description: 'Una mirada íntima a la reconstrucción del FC Barcelona tras momentos difíciles.',
    },
    {
      src: '/Imagenes/BTTF.jpg',
      title: 'Back to the Future',
      description: 'Marty viaja a 1955 y debe lograr que sus padres se enamoren para volver a casa.',
    },
    {
      src: '/Imagenes/HDA.jpg',
      title: 'Hora de Aventura',
      description: 'Finn y Jake enfrentan locas aventuras en la mágica Tierra de Ooo.',
    },
    {
      src: '/Imagenes/MGS3.jpg',
      title: 'Metal Gear Solid: Snake Eater',
      description: 'Snake se infiltra en la jungla soviética para detener una amenaza nuclear.',
    },
    {
      src: '/Imagenes/DBZ.jpg',
      title: 'Dragon Ball Z',
      description: 'Goku defiende la Tierra en épicas batallas contra enemigos poderosos.',
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
            style={{
              height: '100vh',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <Carousel.Caption
            className="text-start"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              padding: '1.5rem',
              borderRadius: '1rem',
              maxWidth: '700px',
              left: '5%',
              bottom: '10%',
              textAlign: 'left',
            }}
          >
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: 'white'
            }}>
              {slide.title}
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              lineHeight: '1.6',
              color: 'white',
              whiteSpace: 'normal',
              overflow: 'visible',
            }}>
              {slide.description}
            </p>
            <Button variant="light" size="md" style={{ marginTop: '1rem' }}>
              Ver ahora
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;

