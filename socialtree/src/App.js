import React, { useEffect, useState } from 'react';
import logo from './image0.jpeg';
import otherImage from './inter1.png'; // Adicione o caminho correto da outra imagem
import './styles.scss';

function App() {
  const numberOfImages = 20; // Aumentando o número de imagens
  const maxImageSize = 100; // Aumentando o tamanho máximo das imagens em pixels
  const minDistance = 50; // Definindo a distância mínima entre as imagens

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const generateRandomPosition = (existingImages) => {
    let position;
    let isOverlap;

    do {
      isOverlap = false;

      position = {
        left: Math.random() * (windowSize.width - maxImageSize),
        top: Math.random() * (windowSize.height - maxImageSize),
      };

      for (const img of existingImages) {
        const xDiff = Math.abs(position.left - img.left);
        const yDiff = Math.abs(position.top - img.top);

        const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

        if (distance < minDistance) {
          isOverlap = true;
          break;
        }
      }
    } while (isOverlap);

    return position;
  };

  const renderOtherImages = () => {
    const images = [];
    const imageElements = []; // Adicionado para armazenar os elementos da imagem

    for (let i = 0; i < numberOfImages; i++) {
      const position = generateRandomPosition(images);
      const size = generateRandomSize();

      images.push({
        left: position.left,
        top: position.top,
      });

      imageElements.push( // Empurrando o elemento da imagem para imageElements em vez de retornar
        <div
          key={i}
          className="Other-image-container"
          style={{ position: 'absolute', left: position.left, top: position.top }}
        >
          <img
            src={otherImage}
            className="Other-image"
            alt={`outra imagem ${i}`}
            style={{ width: size.width, height: size.height }}
          />
        </div>
      );
    }

    return imageElements; // Retornando todos os elementos da imagem após o loop
  };

  const generateRandomSize = () => {
    const size = Math.random() * maxImageSize + 50; // Ajustando o tamanho mínimo
    return {
      width: size,
      height: size,
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        {/* Renderizando várias imagens semelhantes à Other-image */}
        {renderOtherImages()}

        <h1>
          Entre e concorra com mais de 800 pessoas !!
        </h1>

        <p>
          VAGAS LIMITADAS!
        </p>

        <button>
          GARANTA AQUI A SUA VAGA
        </button>
      </header>
    </div>
  );
}

export default App;