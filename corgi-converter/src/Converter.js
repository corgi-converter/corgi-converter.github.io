import React, { useState } from 'react';

const handleClick = (value, setCorgiValue) => {
    setCorgiValue(value / 11.8)
};

const clearValues = (setValue, setCorgiValue) => {
    setValue("");
    setCorgiValue("");
};

function Converter() {

  const [value, setValue] = useState();
  const [corgiValue, setCorgiValue] = useState();
  return (
      <div id="converter">
            <p>Enter a weight in kg:</p>
            <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
            <button onClick={() => handleClick(value, setCorgiValue)}>Submit</button>
            <button onClick={() => clearValues(setValue, setCorgiValue)}>Clear</button>
            {corgiValue && <p>That's about {corgiValue} corgis!</p>}
      </div>
  );
}

export default Converter;
