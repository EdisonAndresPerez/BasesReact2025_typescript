import { useEffect, useState } from "react";

type ColorTypeName = "red" | "yellow" | "green";

const colors: Record<ColorTypeName, string> = {
  red: "bg-red-500 animate-pulse",
  yellow: " bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

export const TrafficLightWithEffect = () => {
  const [light, setLight] = useState<ColorTypeName>("yellow");
  const [countdown, setCountdown] = useState(5);

  // useEffect(() => {
  //   console.log({ countdown });
  //   setInterval(() => {
  //     console.log('setInterval llamado - propiedad de javascript - ejecuta una tarea repetidamente cada cierto tiempo');
  //     setCountdown((prev) => prev -1)
  //   }, 1000)
  // }, [countdown]);

  //--------------------------------------------------------------------

  useEffect(() => {
    if (countdown === 0) return;

    // if (countdown === 0) {
    //   if (light === "red") {
    //     setLight("yellow");
    //     setCountdown(2);
    //   } else if (light === "yellow") {
    //     setLight("green");
    //     setCountdown(10);
    //   } else if (light === "green") {
    //     setLight("red");
    //     setCountdown(10);
    //  }
    //  }

    console.log({ countdown });
    const intervalId = setInterval(() => {
      console.log(
        "setInterval llamado - propiedad de javascript - ejecuta una tarea repetidamente cada cierto tiempo"
      );
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      console.log("CLeanup effect");
      clearInterval(intervalId);
    };
  }, [countdown, light]);

  useEffect(() => {
    if (countdown === 0) {
      if (light === "red") {
        setLight("yellow");
        setCountdown(2);
      } else if (light === "yellow") {
        setLight("green");
        setCountdown(10);
      } else if (light === "green") {
        setLight("red");
        setCountdown(10);
      }
    }
  }, [countdown, light]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-2xl">Semaforo con useEffect</h1>
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
