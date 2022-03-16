import React from "react";

export const Counter = () => {
  const [value, setValue] = React.useState(0);

  if (value < 0) {
    alert("Value cannot be less than zero");
    setValue(0);
  }

  if (value > 10) {
    alert("Value cannot exceed limit");
    setValue(10);
  }

//   if (value >= 5 && value <= 9) {
//     alert("Well done,you passed your test");
//     setValue(10);
//   }

  const handleIncrease = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrease = () => {
    setValue((prevValue) => prevValue - 1);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};
