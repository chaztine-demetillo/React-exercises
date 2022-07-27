import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';



function App() {
  
  const [usersList, setUsersList] = useState([]);
  const AddUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}]
    });
  }
  return (
    <>
      <AddUser onAddUser={AddUserHandler}/>
      <UserList users={usersList}/>
    </>
  );
}

export default App;
