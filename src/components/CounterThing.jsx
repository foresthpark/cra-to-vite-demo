import React from "react";

export default function CounterThing({ count }) {
  const [counter, setCounter] = React.useState(count);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className="flex flex-row items-center gap-4">
      <button
        onClick={handleIncrement}
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Counter goes up
      </button>
      <span className="text-2xl font-medium">{counter}</span>
    </div>
  );
}
