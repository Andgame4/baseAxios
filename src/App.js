import { useEffect, useState } from "react";
import { getUser, deleteUser, postUser } from "./services/userService";
import "../src/styles/index.css";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const [listUser, setListUser] = useState([]);
  const [userName, setUserName] = useState();
  // get user
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    getUser().then((res) => setListUser(res.data));
  }
  // delete user
  const handleDelete = (index) => {
    deleteUser(index).then(() => {
      toast.success("Successfully !!!");
    });
    getData();
  };
  // post user
  const handleAddName = () => {
    if (userName) {
      postUser(userName)
        .then((res) => {
          getData();
          setUserName("");
          console.log(res);
          toast.success(`Add ${res.data.name} successfully`);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Add failed !!!");
        });
    } else {
      toast.error("Empty value !!");
      return;
    }
  };
  // put user

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
      <div>
        <ToastContainer />
      </div>
      <div>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} />
        <button onClick={handleAddName}>Add Name User</button>
      </div>
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
