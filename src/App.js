import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="Whatever you want"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
