import { useEffect, useState } from "react";
import { getUser, deleteUser } from "./services/userService";
import "../src/styles/index.css";
function App() {
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    getUser().then((res) => setListUser(res.data));
  }
  const handleDelete = (index) => {
    deleteUser(index);
    getData();
  };
  const element = listUser.map((data, index) => {
    return (
      <tbody key={data.id}>
        <tr>
          <td>{index + 1}</td>
          <td>{data.name}</td>
          <td>
            <button onClick={() => handleDelete(data.id)}>Delete</button>
            <button>Update</button>
          </td>
        </tr>
      </tbody>
    );
  });
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>User Name</th>
            <th>Action</th>
          </tr>
        </thead>
        {element}
      </table>
    </div>
  );
}

export default App;
