import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './Component/User/User';
import Add from './Component/Add/Add';
import users from './Data.json';


function App() {

  const [user, setUser] = useState([]);
 
  // console.log(user);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => {
  //     setUser(data)
  //     // console.log(data)
  //   })
  // }, []);

  useEffect(() => {
    setUser(users);
  }, [])
  const [add, setAdd] = useState([]);
  const addPerson = (person) =>{
    const newUser = [...add, person]
    setAdd(newUser)
  }


  return (
    <div className='App'>
      <div className="user">
        {
          user.map(person => <User person = {person} addPerson={addPerson} key={person.id}></User>)
        }
      </div>
      <div className="added-person">
        <h3>Add Person</h3>
        <Add person={add}></Add>
      </div>
    </div>
  );
}

export default App;
