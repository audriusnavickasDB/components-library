import React from 'react';
import './buttongroup.scss';
import Button from '@audnavlib/button';

const ButtonGroup = (props) => (
    <div className="button-group">
        {props.items.map(item => {
            return <Button id={item.id} onClick={item.onClick}>{item.name}</Button>
        })}
    </div>
);

export default ButtonGroup;
