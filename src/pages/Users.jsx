import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import MyModal from "../components/MyModal/MyModal"
import axios from 'axios';

const Users = () => {
const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(users.data);
  }

useEffect(()=>{
  fetchUsers();
},[])

  const [showFormUser, setShowFormUser] = useState(false);
  const [users, setUsers] = useState([

  ]);
  const [user, setUser] = useState(
    {
      name: '',
      phone: '',
      email: '',
    });

  const onChange = (e) => {
    if (e.target.id == "name") {
      setUser({ ...user, name: e.target.value });
    } else if(e.target.id == "phone"){
      setUser({ ...user, phone: e.target.value });
    } else{
      setUser({ ...user, email: e.target.value });
    }
  }

  const addUser = () => {
    const id = Math.random() * 1
    setUser({ ...user, id: id })
    setUsers([...users, user]);
    setUser({
      name: '',
      phone: '',
      email: '',
    });
  }

  const removeUser = (id) => {
    const confirm = window.confirm("Реально удалить?")
    if (confirm == true) setUsers(users.filter((user) => user.id !== id)) //для проверки на удаление
  };
  const clear = () => {
    setUser({ name: '', phone: '', email: '', })
  }
  console.log(user);
  const [showModal, setshowModal] = useState(false)




  return (
    <div className="App">

      <div className="container">
        <h3>Users</h3>

        <MyModal visible={showModal} setVisible={setshowModal}>
          {
                 <>
                 <div className="input-field col s6">
                   <i className="material-icons prefix">account_circle</i>
                   <input
                     id="name"
                     type="text"
                     className="validate"
                     value={user.name}
                     placeholder="Enter Name"
                     onChange={onChange}
                   />
                 </div>
                 <div className="input-field col s6">
                   <i className="material-icons prefix">phone</i>
                   <input
                     id="phone"
                     type="tel"
                     value={user.phone}
                     className="validate"
                     placeholder="Enter Phone"
                     onChange={onChange}
                   />
                 </div>

                 <div className="input-field col s6">
                   <i className="material-icons prefix">email</i>
                   <input
                     id="email"
                     type="email"
                     value={user.email}
                     className="validate"
                     placeholder="Enter E-mail"
                     onChange={onChange}
                     />
                     </div>
                     <a className="waves-effect waves-light btn m-1"
                       onClick={() => addUser()}>Add</a>
                     <a className="waves-effect waves-light right btn m-1"
                       onClick={() => clear()}>Clear</a>
               </>
          }
        </MyModal>
        <div className="row m-1">
          <div className="col s4">
            <a className="waves-effect waves-light btn"
              onClick={() => setshowModal(true)}
            >
              Add user
            </a>
          </div>
          <div className="col s8">

          </div>
        </div>
        {loading ? (
          <loader
          className="center"
          type="Puff"
          color="#ee6e73"
          heigth={100}
          width={100}
          />
        ) : (
        <UserList search deleteUser={removeUser}>{users}</UserList>
      )}
      </div>
    </div>
  );
}

export default Users;
