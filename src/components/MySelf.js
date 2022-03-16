import React from "react";

export const MySelf = (props) => {
  return (
    <div>
      <p>
        My name is {props.name}. I am {props.age} years old. I am a{" "}
        {props.gender}.
      </p>
    </div>
  );
};
