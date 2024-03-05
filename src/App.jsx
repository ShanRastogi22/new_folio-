import style from './App.module.css';
import About from './componets/About/About';
import Hero from './componets/Hero/Hero';
import Navbar from './componets/Navbar/Navbar';

function App() {
  

  return (
    <div className={style.App}>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
