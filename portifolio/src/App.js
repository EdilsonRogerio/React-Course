import './App.css';
import About from './components/about/About';
import Skills from './components/habilidades/Skills';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
