import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [clicks, setClicks] = useState(0);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="container">
      <div>
        <h1>Counter clicks</h1>
        <br />
        <button
          onClick={() => (clicks > 0 ? setClicks(clicks - 1) : clicks)}
          type="button"
          className="btn btn-primary btn-sm"
        >
          -
        </button>
        <input value={clicks}></input>
        <button
          onClick={() => setClicks(clicks + 1)}
          type="button"
          className="btn btn-primary btn-sm"
        >
          +
        </button>
      </div>
      <div>
        <br />
        <h1>Fake API</h1>
        <br />
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => {
              return (
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
