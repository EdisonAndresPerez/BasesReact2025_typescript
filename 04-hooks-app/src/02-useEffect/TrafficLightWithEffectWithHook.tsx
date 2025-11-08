import { useTrafficLight } from "../hooks/useTrafficLight";

export const TrafficLightWithEffectWithHook = () => {
  const { countdown, light, colors } = useTrafficLight();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-2xl">Semaforo con useEffect y hook</h1>
        <div className="text-white text-xl ">
          <h2>
            Creado por <strong>Edison Perez</strong> <br />
            En este proyecto pondremos en practica los hooks mas usados de react{" "}
            <br />
            como <strong>useState</strong> ➩ <strong>useEffect</strong> ➩
            <strong>UseRef</strong>
            <br />
            <div className=" text-right text-purple-700">
              <strong>{"{Dev/Talles}"}</strong>
            </div>
          </h2>
        </div>
        <div className="text-white text-xl">Contador {countdown}</div>

        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-100"
          style={{ width: `${(countdown / 5) * 100}%` }}
        ></div>

        <div
          className={`w-32 h-32 ${
            light === "red" ? colors[light] : "bg-gray-500"
          } rounded-full`}
        ></div>

        <div
          className={`w-32 h-32 ${
            light === "yellow" ? colors[light] : "bg-gray-500"
          } rounded-full`}
        ></div>

        <div
          className={`w-32 h-32 ${
            light === "green" ? colors[light] : "bg-gray-500"
          } rounded-full`}
        ></div>
      </div>
    </div>
  );
};
