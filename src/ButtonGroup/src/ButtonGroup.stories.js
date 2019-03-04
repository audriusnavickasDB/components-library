import React from "react";
import { storiesOf } from "@storybook/react";
import ButtonGroup from '@audnavlib/button-group';

const items = [
    {id: 1, name: 'I am awesome', onClick: () => { alert('I am really really awesome!') }},
    {id: 2, name: 'I am smart', onClick: () => { alert('I am really really smart!') }},
    {id: 3, name: 'I am lazy', onClick: () => { alert('I am...') }}
];

storiesOf("ButtonGroup", module).add("Default", () => (
    <ButtonGroup items={items}/>
));
