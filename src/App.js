import './App.scss';
import { } from 'react-icons/fa';
import ImageCard from './components/ImageCard/ImageCard';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      


      <h1>Estos son algunos de mis conocimientos:</h1>
      <div className="tech">
        <ImageCard imageUrl="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.png">
          <h2>NodeJS</h2>
          <p>Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript</p>
          <a href="https://nodejs.org/">https://nodejs.org/</a>
        </ImageCard>
        <ImageCard imageUrl="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.png">
          <h2>NodeJS</h2>
          <p>Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript</p>
          <a href="https://nodejs.org/">https://nodejs.org/</a>
        </ImageCard>
        <ImageCard imageUrl="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.png">
          <h2>NodeJS</h2>
          <p>Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript</p>
          <a href="https://nodejs.org/">https://nodejs.org/</a>
        </ImageCard>
        <ImageCard imageUrl="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.png">
          <h2>NodeJS</h2>
          <p>Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript</p>
          <a href="https://nodejs.org/">https://nodejs.org/</a>
        </ImageCard>
      </div>
    </div>
  );
}

export default App;
