import styled from 'styled-components';
import React  from 'react';

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;

    &:disabled{
        color:grey;
        opacity: 0.7;
        cursor: default;
    }
`

export default Button;

// function sayHello(){
//     alert("Hello");
// }

// export default function Button() {
//     return (
//         <Button onClick={sayHello}>
//              Button
//         </Button>
//     )
// }















