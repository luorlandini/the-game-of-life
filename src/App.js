import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Board from './components/Board';

function App() {

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h3 className="mt-5 game-title">Game of Life</h3>
            <p>The universe of the Game of Life is an infinite,
            two-dimensional orthogonal grid of square cells,
            each of which is in one of two possible states, live or dead,
            Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically,
              or diagonally adjacent. </p>
          </div>

          <div className="col-lg-9">
            <Board />
          </div>
        </div>
      </div>

    </section >

  );
}

export default App;
