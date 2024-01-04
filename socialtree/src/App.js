import React, { useEffect, useState } from 'react';
import logo from './image0.jpeg';
import newImage from './charadaprin.png'; // Adicione o caminho correto da nova imagem
import newImage2 from './charadaprin.png';
import './styles.scss';
import wpp from './whatsapp.png';

function App() {
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

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="New-image-container" style={{ position: 'absolute', left: 0 }}>
          <img src={newImage} className="New-image" alt="new image" />
        </div>

        <div className="New-image-container" style={{ position: 'absolute', right: -35 }}>
          <img src={newImage2} className="New-image2" alt="new image" />
        </div>

        <h1>
          Entre e concorra com mais de 800 pessoas !!
        </h1>

        <p>
          VAGAS LIMITADAS!
        </p>

        <button>
          GARANTA AQUI A SUA VAGA
          <img src={wpp} alt="Icone" style={{ marginLeft: '10px', position: 'relative', top: '-3px'}} /> {/* Adicione o caminho correto do ícone */}
        </button>
      </header>
    </div>
  );
}

export default App;