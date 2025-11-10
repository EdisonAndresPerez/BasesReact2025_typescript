import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import { HooksApp } from "./HooksApp";

//import { PokemonPage } from "./03-exalmples/PokemonPage";


import "./index.css";
import { FocusScreen } from "./04-useRef/FocusScreen";
//import { TrafficLight } from "./01-useState/TrafficLight";
//import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
//import { TrafficLightWithEffectWithHook } from "./02-useEffect/TrafficLightWithEffectWithHook";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*<TrafficLight /> */}
    {/* <TrafficLightWithEffectWithHook />*/}
    {/*<TrafficLightWithEffect />*/}

    {/* <PokemonPage/>*/}

  <FocusScreen/>


  </StrictMode>
);
