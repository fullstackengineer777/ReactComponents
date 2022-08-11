import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const ButtonToggle = styled(Button)`
    opacity: 0.6;
    ${  ({ active }) =>
        active &&
        `
            opacity: 1;
        `
    }
`;

const ButtonGroup = styled.div`
    display: flex;
`;

const types = ['Cash', 'Credit Card', 'Bitcoin'];

export default function ToggleGroup(){
    const [active, setActive] = useState(types[0]);
    return(
        <ButtonGroup>
            {
                types.map(type => (
                    <ButtonToggle
                        key = {type}
                        active = {active===type}
                        onClick={() => setActive(type)}
                    >
                        { type }
                    </ButtonToggle>
                ))
            }
        </ButtonGroup>
    )
}