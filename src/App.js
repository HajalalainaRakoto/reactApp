import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="mx-auto text-center border border-info mt-2 p-3" style= {{width: "700px", backgroundcolor: "#eee;"}}>
      <h3>To Do Input</h3>
        <div className="input-group rounded border border-primary mt-5">
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              @
            </button>
          </div>
          <input type="text" className="form-control bg-light border-0 small" placeholder="New To Do"></input>
        </div>
        <div class="mb-3">
          <button type="submit" className="btn btn-primary text-center mt-3 w-100">Add new task</button>
        </div>
    </div>

  );
}

export default App;
