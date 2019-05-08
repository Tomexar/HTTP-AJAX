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
function FriendForm(){
        return (
        <div className = 'friendform'>
            <Form>
                <Input
                    type = 'text'
                    name = 'name'
                    placeholder = 'Name'
                    > 
                </Input>
                <Input
                    type = 'text'
                    name = 'age'
                    placeholder = 'Age'
                    > 
                </Input>
                <Input
                    type = 'text'
                    name = 'email'
                    placeholder = 'E-mail'
                    > 
                </Input>
                
            </Form>
            <Button>Add</Button>
        </div>
    )
}
export default FriendForm