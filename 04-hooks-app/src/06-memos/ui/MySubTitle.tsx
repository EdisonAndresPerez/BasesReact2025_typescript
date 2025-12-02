import { memo } from "react";

interface Props {
  subTitle: string;

  //definir funcin que no devuelve nada
  callMyApi: () => void;
}

export const MySubTitle = memo(({ subTitle, callMyApi }: Props) => {
  console.log('render de subtitulo')
  return (
    <>
      <h6>{subTitle}</h6>

      <button 
      className="bg-indigo-500 px-2 py-1 rounded-md text-white"
      onClick={callMyApi}
      >
        llamar a funcion
      </button>
    </>
  );
});
