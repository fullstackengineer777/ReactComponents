import React, { Component } from "react";
// import './App.css';
import  Button from './components/ui/Button.js';
import ButtonGroup from './components/ui/ButtonGroup';
import Input from './components/ui/Input';
import { CheckboxRadioExample } from './components/ui/CheckBox';


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
    </div>
  );
}

export default App;