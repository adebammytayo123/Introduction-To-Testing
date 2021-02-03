import './App.css';
import Button from "./components/button/Button";
import FavoriteNumber from './components/favoriteNumber/FavoriteNumber';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="click me please" />
        <FavoriteNumber />
      </header>
    </div>
  );
}

export default App;
