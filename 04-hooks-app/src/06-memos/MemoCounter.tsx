import { useCounter } from "@/hooks/useCounter";
import { useMemo } from "react";

const heavyStuff = (iterationNumber: number) => {
  console.time("heavy-stuff-started");

  for (let index = 0; index < iterationNumber; index++) {
    console.log("ahi vamos!");
  }

  console.timeEnd("heavy-stuff-started");

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoCounter = () => {
  const { counter, increment } = useCounter(40_000);
  const { counter:counter2, increment:increment2 } = useCounter(10);

  const myValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Memo - useMemo</h1>
      <hr />
      <h5>counter: {counter}</h5>
      <h5>counter2: {counter2}</h5>

      <button
        className="bg-blue-500 text-white px-4 rounded-md py-2"
        onClick={increment}
      >
        +1 counter
      </button>

          <button
        className="bg-blue-500 text-white px-4 rounded-md py-2"
        onClick={increment2}
      >
        +1 counter2
      </button>
    </div>
  );
};
