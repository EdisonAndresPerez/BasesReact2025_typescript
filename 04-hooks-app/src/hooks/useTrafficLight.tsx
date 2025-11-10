import { useEffect, useState } from "react";

type ColorTypeName = "red" | "yellow" | "green";

const colors: Record<ColorTypeName, string> = {
  red: "bg-red-500 animate-pulse",
  yellow: " bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

export const useTrafficLight = () => {
  const [light, setLight] = useState<ColorTypeName>("yellow");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) return;

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

  return {
    //props
    countdown,
    light,
    colors,

    //computed
    percentage: (countdown / 5) * 100,
    greenLight: light === "green" ? colors.green : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",
    redLight: light === "red" ? colors.red : "bg-gray-500",

    //metodos
  };
};
