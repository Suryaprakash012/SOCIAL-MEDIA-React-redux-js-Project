import React, { useState } from 'react';

const DropdownWithInput = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [userInput, setUserInput] = useState('');

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = () => {
    // Do something with the selected value and user input
    console.log('Selected Value:', selectedValue);
    console.log('User Input:', userInput);
  };

  return (
    <div>
      <h2>Dropdown with Input Example</h2>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedValue} onChange={handleDropdownChange}>
        <option value="">Select...</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="userInput">Enter something:</label>
      <input
        type="text"
        id="userInput"
        value={userInput}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={handleButtonClick}>Submit</button>
      <br />
      {selectedValue && <p>You selected: {selectedValue}</p>}
    </div>
  );
};

export default DropdownWithInput;
