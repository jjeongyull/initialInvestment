import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";


function App() {
  const [userInput, seruserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const valueChange = (inputIdentifier, newValue) => {
    seruserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput valueChange={valueChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Result userInput={userInput} />}
    </>

  )
}

export default App;
