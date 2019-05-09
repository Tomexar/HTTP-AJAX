import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    margin: 0 auto;
`;

const Input = styled.input`
    text-align:center;
`;

const Button = styled.button`
    padding:10px;
    width: 100px;
    border-radius:6px;
    margin:10px;
    border:1px solid grey;
    background:lightblue;
    cursor: pointer;
    :hover{
        color:lightblue;
        background:grey;
    }
`;
class FriendForm extends React.Component {
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.addFriend();
    };
    render() {
        return (
            <div className='friendform'>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={this.props.newfriend.name}
                        onChange={this.props.onChange}
                    >
                    </Input>
                    <Input
                        type='text'
                        name='age'
                        placeholder='Age'
                        value={this.props.newfriend.age}
                        onChange={this.props.onChange}
                    >
                    </Input>
                    <Input
                        type='text'
                        name='email'
                        placeholder='E-mail'
                        value={this.props.newfriend.email}
                        onChange={this.props.onChange}
                    >
                    </Input>
                    <Button>Add</Button>

                </Form>
            </div>
        )
    }
}
export default FriendForm