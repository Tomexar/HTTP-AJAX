import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const List = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const Card = styled.div`
background-color: lightblue;
width: 200px;
margin: 30px 0;
`;

class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
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
    render() {
        return (
            <List>
                {this.state.friends.map(friend => (
                    <Card>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </Card>
                ))}
            </List>
        )
    }
}

export default FriendsList;