import './App.css';

function App() {
  return (
    <div class="container">
      <h1 class="text-center">TodoList</h1>
      <table class="table">
        <tbody>
          <tr>
            <td>8h</td>
            <td class="col-8">mifoha dia mikaly</td>
            <td>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" value="checkedValue" />
                </label>
              </div>
            </td>
            <td>
              <button class="btn btn-warning">Edit</button>
            </td>
            <td>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>9h</td>
            <td class="col-8">manomboka midev</td>
            <td>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" value="checkedValue" />
                </label>
              </div>
            </td>
            <td>
              <button class="btn btn-warning">Edit</button>
            </td>
            <td>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
