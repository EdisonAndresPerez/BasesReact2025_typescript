import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";

//import { HooksApp } from "./HooksApp";

//import { PokemonPage } from "./03-exalmples/PokemonPage";

import "./index.css";
//import { MemoHook } from "./06-memos/MemoHook";
//import { MemoCounter } from "./06-memos/MemoCounter";
//import { InstagromApp } from "./07-useOptimistic/InstagromApp";
import { ClientInformation } from "./08-use-suspense/ClientInformation";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { TrafficLight } from "./01-useState/TrafficLight";
//import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
//import { TrafficLightWithEffectWithHook } from "./02-useEffect/TrafficLightWithEffectWithHook";

//import { TasksApp } from "./05-useReducer/TaskApp";
//import { ScrambleWords } from "./05-useReducer/ScrambleWords";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    {/*<TrafficLight /> */}
    {/*<TrafficLightWithEffectWithHook />*/}
    {/*<TrafficLightWithEffect />*/}

    {/*<PokemonPage/>*/}
    {/*<FocusScreen/>*/}

    {/*<TasksApp/>*/}

    {/*<ScrambleWords/>*/}

    {/*<MemoHook />*/}
    {/*<MemoCounter/>*/}
    {/*<InstagromApp />*/}
    <Suspense fallback={<h1>cargando....</h1>}>
      <ClientInformation />
    </Suspense>
  </StrictMode>
);
