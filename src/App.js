import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
    <div class="text-center border border-info p-3 mt-2" style={{backgroundcolor: "#eee;"}}>
      <h3>To Do Input</h3>
      <form  class="ml-5 mb-3 mt-5">
        <div class="input-group rounded border border-primary">
          <div class="input-group-append">
            <button class="btn btn-primary" type="button">
              @
            </button>
          </div>
          <input type="text" class="form-control bg-light border-0 small" placeholder="New To Do"></input>
        </div>
          <button type="submit" class="btn btn-primary text-center mt-3 w-75">Add new task</button>
      </form>
    </div>
  </div>

  );
}

export default App;
