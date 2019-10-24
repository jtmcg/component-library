import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomButton from './components/Button';
import BottomDropDown from './components/BottomDropDown';
import RightDropDown from './components/RightDropDown';
import ImageCarousel from './components/ImageCarousel';
import FunctionTest from './components/FunctionTest';
import Test from './reacttransitiongrouppractice';
import LoadingAnimation from './components/LoadingAnimation';

function PropFunctionTest(arg) {
  alert(arg)
}

function TestEnv() {
  return (
    <div className="App">
      <h1>Test Env</h1>
      <LoadingAnimation />
      <CustomButton
        onClick={PropFunctionTest}
        buttonText={"Test"}
      />
      <BottomDropDown
        handleSelect={PropFunctionTest}
        selectionList={["item1", "item2", "item3"]}
      />
      <RightDropDown
        handleSelect={PropFunctionTest}
        selectionList={["item1", "item2", "item3"]}
      />
      <div style={{width: "100%"}}>
        <ImageCarousel
        />
      </div>
    </div>
  );
}

export default TestEnv;
