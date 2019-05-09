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

    render() {
        return (
            <List>
                {this.props.friends.map(friend => (
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
