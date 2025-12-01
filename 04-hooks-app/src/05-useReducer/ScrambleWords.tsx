// ! Importante:
// Es necesario componentes de Shadcn/ui
// https://ui.shadcn.com/docs/installation/vite

import React, { useReducer } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { SkipForward, Play } from "lucide-react";

import confetti from "canvas-confetti";

import {
  getInitialState,
  scrambleWordsReducer,
} from "./reducer/scrambleWordReducer";

export const ScrambleWords = () => {
  // ----------------------------
  // ESTADOS PRINCIPALES DEL JUEGO
  // ----------------------------

  //UTILIZANDO USEREDUCER
  const [state, dispatch] = useReducer(scrambleWordsReducer, getInitialState());

  const {
    currentWord,
    errorCounter,
    guess,
    isGameOver,
    maxAllowErrors,
    maxSkips,
    points,
    scrambledWord,
    skipCounter,
    words,
    totalWord,
  } = state;

  // Array de palabras mezcladas desde el inicio
  //const [words, setWords] = useState(shuffleArray(GAME_WORDS));

  // Palabra actual que el usuario debe adivinar
  //const [currentWord, setCurrentWord] = useState(words[0]);

  // Versión desordenada de la palabra actual (la que se muestra en pantalla)
  //const [scrambledWord, setScrambledWord] = useState(scrambleWord(currentWord));

  // Valor que escribe el usuario en el input
  //const [guess, setGuess] = useState("");

  // Puntos acumulados del jugador
  //const [points, setPoints] = useState(0);

  // Cantidad de errores cometidos
  //const [errorCounter, setErrorCounter] = useState(0);

  // Límite máximo de errores permitidos
  //const [maxAllowErrors, setMaxAllowErrors] = useState(3);

  // Cantidad de palabras saltadas
  //const [skipCounter, setSkipCounter] = useState(0);

  // Máximo de saltos permitidos
  //const [maxSkips, setMaxSkips] = useState(3);

  // Indica si el juego terminó
  //const [isGameOver, setIsGameOver] = useState(false);

  // ------------------------------------
  // FUNCIÓN: CUANDO EL USUARIO ENVÍA UNA RESPUESTA
  // ------------------------------------
  const handleGuessSubmit = (e: React.FormEvent) => {
    // Evita que el formulario recargue la página
    e.preventDefault();

    dispatch({
      type: 'CHECK_ANSWER'
    })


    // Compara la palabra escrita con la correcta
    // trim() elimina espacios extras, toLowerCase evita errores por mayúsculas

    //const esCorrecto = guess.trim().toLowerCase() === currentWord.toLowerCase();

    // ✅ SI LA RESPUESTA ES CORRECTA
    //if (esCorrecto) {
    // confetti({
    //   particleCount: 100,
    //   spread: 120,
    //   origin: { y: 0.6 },
    // });
    //usar el estado de puntos
    // setPoints((prev) => prev + 1);
    // setGuess("");

    // Obtiene la posición actual de la palabra en el array
    //const indiceActual = words.indexOf(currentWord);

    // Calcula el índice de la siguiente palabra
    //const siguienteIndice = indiceActual + 1;

    // Verifica que no se salga del array
    //if (siguienteIndice < words.length) {
    // Obtiene la siguiente palabra real
    //const nuevaPalabra = words[siguienteIndice];

    // Actualiza la palabra actual
    //setCurrentWord(nuevaPalabra);

    // Genera su versión desordenada para mostrar
    //setScrambledWord(scrambleWord(nuevaPalabra));
    // }
    //} //else {
    //setGuess("");
    //setErrorCounter((prev) => {
    // const nuevoValor = prev + 1;

    // if (nuevoValor >= maxAllowErrors) {
    //   setIsGameOver(true);
    //  }

    //  return nuevoValor;
    // });
    //}

    // Muestra intento en consola para depuración
    //console.log("Intento de adivinanza:", guess, currentWord);
  };

  // ------------------------------------
  // FUNCIÓN: SALTAR PALABRA
  // ------------------------------------
  const handleSkip = () => {
    // Valida si aún tiene saltos disponibles
    //  if (skipCounter < maxSkips) {
    // Incrementa el contador de skips
    //   setSkipCounter((prev) => prev + 1);
    // Obtiene el índice de la palabra actual
    //   const indiceActual = words.indexOf(currentWord);
    // Obtiene la siguiente palabra directamente
    //   const siguientePalabra = words[indiceActual + 1];
    // Si existe una siguiente palabra
    //   if (siguientePalabra) {
    // Cambia la palabra actual
    //    setCurrentWord(siguientePalabra);
    // Actualiza la palabra desordenada
    //  setScrambledWord(scrambleWord(siguientePalabra));
    // Limpia el input
    //    setGuess("");
    //   }
    // }
    // console.log("⏭️ Palabra saltada");
  };

  // ------------------------------------
  // FUNCIÓN: REINICIAR JUEGO
  // ------------------------------------
  const handlePlayAgain = () => {
    // Nuevo orden de palabras
    //const nuevasMezcladas = shuffleArray(GAME_WORDS);
    //setWords(nuevasMezcladas);
    // Reset de errores y skips
    // setErrorCounter(0);
    // setSkipCounter(0);
    // Reinicio de límites (si quieres mantenerlos fijos, igual se reinician)
    // setMaxAllowErrors(3);
    //setMaxSkips(3);
    // Primera palabra del nuevo array
    // const primera = nuevasMezcladas[0];
    // setCurrentWord(primera);
    // setScrambledWord(scrambleWord(primera));
    // Reset de input y puntos
    // setGuess("");
    // setPoints(0);
    // Volver a modo de juego
    // setIsGameOver(false);
    //  console.log("🔄 Jugar de nuevo");
  };

  //! Si ya no hay palabras para jugar, se muestra el mensaje de fin de juego
  if (words.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Palabras desordenadas
          </h1>
          <p className="text-gray-600">No hay palabras para jugar</p>
          <br />
          <div>Puntaje: {points}</div>
          <br />
          <div>Errores: {errorCounter}</div>
          <br />
          <div>Saltos: {skipCounter}</div>
          <br />
          <Button onClick={handlePlayAgain}>Jugar de nuevo</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Palabras desordenadas
          </h1>
          <p className="text-gray-600">
            Desordena las letras para encontrar la palabra!
          </p>
        </div>

        {/* Main Game Card */}
        <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-xl">
          <CardContent className="p-8">
            {/* Scrambled Word Display */}
            <div className="mb-8">
              <h2 className="text-center text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide flex items-center justify-center gap-2">
                Palabra Desordenada
                {isGameOver && (
                  <span className="text-red-500 text-xl"> {currentWord}</span>
                )}
              </h2>

              <div className="flex justify-center gap-2 mb-6">
                {scrambledWord.split("").map((letter, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: "fadeInUp 0.6s ease-out forwards",
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>

            {/* Guess Input */}
            <form onSubmit={handleGuessSubmit} className="mb-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="guess"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Adivina la palabra
                  </label>
                  <Input
                    id="guess"
                    type="text"
                    value={guess}
                    onChange={(e) =>{
                      dispatch({
                        type: 'SET_GUESS',
                        payload: e.target.value,
                      })
                    }}
                    placeholder="Ingresa tu palabra..."
                    className="text-center text-lg font-semibold h-12 border-2 border-indigo-200 focus:border-indigo-500 transition-colors"
                    maxLength={scrambledWord.length}
                    disabled={isGameOver}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                  disabled={!guess.trim() || isGameOver}
                >
                  Enviar Adivinanza
                </Button>
              </div>
            </form>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 text-center border border-green-200">
                <div className="text-2xl font-bold text-green-600">
                  {points} / {totalWord}
                </div>
                <div className="text-sm text-green-700 font-medium">Puntos</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-4 text-center border border-red-200">
                <div className="text-2xl font-bold text-red-600">
                  {errorCounter}/{maxAllowErrors}
                </div>
                <div className="text-sm text-red-700 font-medium">Errores</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleSkip}
                variant="outline"
                className="border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                disabled={isGameOver || skipCounter >= maxSkips}
              >
                <SkipForward className="w-4 h-4" />
                Saltar ({skipCounter} / {maxSkips})
              </Button>
              <Button
                onClick={handlePlayAgain}
                variant="outline"
                className="border-2 border-indigo-300 hover:border-indigo-400 hover:bg-indigo-50 text-indigo-600 transition-colors flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                Jugar de nuevo
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Desafíate con palabras desordenadas!
            <br />
            <br />
            {words.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};
