import './App.css';
import PokemonGallery from './components/PokemonGallery';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <h1>Pokemon App</h1>
      <PokemonGallery />
      <PokemonList />
    </div>
  );
}

export default App;
