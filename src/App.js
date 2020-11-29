import logo from './logo.svg';
import './App.css';
import Cell from './components/Cell';

function App() {

  const ClickOnCell = () => {

    console.log('clickOnCell');
    return true;

  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Cell rowIdx={10} colIdx={10} clickOnCell={ClickOnCell} />
    </div>
  );
}

export default App;
