import { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubTitle } from "./ui/MySubTitle";

export const MemoHook = () => {
  const [title, setTitle] = useState("Titulo de estado");
  const [subTitle, setSubTitle] = useState("Subtitulo de estado");

  const handleMyApiCall = useCallback(() => {
    console.log('llamar mi api', subTitle)
  },[subTitle])

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">memoHook</h1>

      <MyTitle title={title} />
      <MySubTitle subTitle={subTitle} callMyApi={handleMyApiCall} />

      <button
        className=" bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle("Titulo cambiado por el click" + new Date().getTime())}
      >
        Cambiar Titulo
      </button>

      <button
        className=" bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setSubTitle("SubTitulo cambiado por el click")}
      >
        Cambiar Subtitulo
      </button>
    </div>
  );
};
