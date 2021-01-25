import React, { useState } from "react";

interface Props {
  text: string;
}

const product2 = (num: number) => num * 2;

export const Counter: React.FC<Props> = ({ text }) => {
  const [count, setCount] = useState(0);
  const countHandler = (count) => {
    setCount(product2(count));
  };

  return (
    <div>
      <p>{`${text}: ${count}`}</p>
      <button onClick={() => countHandler(count)}>click me!</button>
    </div>
  );
};
