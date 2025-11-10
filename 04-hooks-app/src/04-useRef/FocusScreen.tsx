import { useRef } from "react";

export const FocusScreen = () => {
  const inputReft = useRef<HTMLInputElement>(null);

  const handleclick = () => {
    console.log(inputReft.current?.value);
    console.log(inputReft.current?.select());
  };

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Focus screen</h1>

      <input
        ref={inputReft}
        type="text"
        className="bg-white text-black px-4 py-2 rounded-md"
        autoFocus
      />

      <button
      onClick={handleclick} 
      className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
        set focus
      </button>
    </div>
  );
};
