
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Board from './components/Board';

function App() {

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="mt-5">The Big Picture</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptates rerum eveniet sapiente repellat esse, doloremque quod recusandae deleniti nostrum assumenda vel beatae sed aut modi nesciunt porro quisquam voluptatem.</p>
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
