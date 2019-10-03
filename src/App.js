import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomButton from './components/Button';
import DropDown from './components/DropDown';

function TestEnv() {
  return (
    <div className="App">
      <h1>Test Env</h1>
      <CustomButton
        onClick={null}
        buttonText={"Test"}
      />
      <DropDown
        onSelect={null}
        selectionList={["item1", "item2", "item3"]}
      />
    </div>
  );
}

export default TestEnv;
