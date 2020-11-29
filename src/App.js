import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';

function App() {

  const ClickOnCell = () => {

    console.log('clickOnCell');
    return true;

  }

  var [r, c] = [50, 50];
  var m = Array(r).fill().map(() => Array(c).fill(0));

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Grid data={m} />
    </div>
  );
}

export default App;
