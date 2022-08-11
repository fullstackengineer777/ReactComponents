import React, {useState} from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    display: block;
    margin: 20px 0px;
    border: 1px solid lightblue;
`

// Creating a custom hook
function useInput(defaultValue){
    const [value, setValue] = useState(defaultValue);

    function onChange(e){
        setValue(e.target.value);
    }

    return{
        value,
        onChange,
    }
}

export default function CusInput(){

    const inputProps = useInput();

    return(
        <div>
            <StyledInput
                {...inputProps}
                placeholder="Type in here"
            />
            <span>Value: {inputProps.value}</span>
        </div>
    )
}