import React from 'react';
import FriendsList from './Components/FriendsList';
import './App.css';
import FriendForm from './Components/FriendForm';
import axios from 'axios';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newfriend: {
        name:'',
        age:'',
        email:''
      },
      friends: [],
      selectedFriend: null

    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange = e =>{
    let value = e.target.value;
    let name = e.target.name;
    this.setState({newfriend:{
      ...this.state.newfriend,
      [name]:value
    }})
  }



  addFriend = () => {
    axios
      .post('http://localhost:5000/friends', this.state.newfriend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };


  render() {
    return (


      <div className="App">
        <h2>Friends</h2>
        <FriendsList friends={this.state.friends} />
        <h2>Add New</h2>
        <FriendForm onChange = {this.onChange} addFriend = {this.addFriend} newfriend = {this.state.newfriend}/>
      </div>
    )
  };
}

export default App;