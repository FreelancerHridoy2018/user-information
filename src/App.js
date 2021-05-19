import logo from './logo.svg';
import './App.css';
import userData from './Data/userData.json'
import { useEffect, useState } from 'react';
import User from './Component/User/User';

function App() {
   const [users, setUsers] = useState([])
   const[addFriend, getAddFriend] = useState([])

   useEffect(() => {
    setUsers(userData);
   }, [])


   const handleAddFriend = (user) => {
     const newAddFriend = [...addFriend, user]
     getAddFriend(newAddFriend)
   }

  return (
    <div className="App">
      <h1>Users information : {users.length}</h1>

         <h2>Friend added List : {addFriend.length}</h2>
      {
        users.map(user => <User user={user} handleAddFriend={handleAddFriend} key={user.name}></User>)
      }
       
    </div>
  );
}

export default App;
