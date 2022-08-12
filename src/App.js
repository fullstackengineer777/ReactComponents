import React, { Component } from "react";
// import './App.css';
import  Button from './components/ui/Button.js';
import ButtonGroup from './components/ui/ButtonGroup';
import Input from './components/ui/Input';
import { CheckboxRadioExample } from './components/ui/CheckBox';
import {ModalExample} from './components/ui/Modal';
import { TabGroup } from './components/ui/Tabs';

function sayHello(){
  alert('hi');
}

function App() {
  return (
    <div className="App">
        <Button onClick={sayHello}> Button </Button>
        <ButtonGroup/>
        <Input/>
        <CheckboxRadioExample/>
        <ModalExample/>
        <TabGroup/>
    </div>
  );
}

export default App;