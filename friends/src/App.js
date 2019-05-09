import React from 'react';
import FriendsList from './Components/FriendsList';
import './App.css';
import FriendForm from './Components/FriendForm';

function App() {
  return (
    <div className="App">
     <h2>Friends</h2>
     <FriendsList />
     <h2>Add New</h2>
     <FriendForm />
    </div>
  );
}

export default App;
