import React from "react";
import CounterThing from "../components/CounterThing";

export default function Counter() {
  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomSizeArray = Array.from(
    Array(randomNumberGenerator(100, 150)).keys()
  );

  return (
    <div className="flex flex-col items-center justify-center p-6 gap-4">
      {randomSizeArray.map((num, index) => (
        <CounterThing key={index} count={randomNumberGenerator(10, 150)} />
      ))}
    </div>
  );
}
