export interface ScrambleWordsState {
  words: string[];
  currentWord: string;
  guess: string;
  points: number;
  errorCounter: number;
  maxAllowErrors: number;
  skipCounter: number;
  maxSkips: number;
  isGameOver: boolean;
  scrambledWord: string;
  totalWord: number;
}

export type ScramleWordsAction = { type: "NO_TENGO_IDEA" };

const GAME_WORDS = [
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "HTML",
  "ANGULAR",
  "SOLID",
  "NODE",
  "VUEJS",
  "SVELTE",
  "EXPRESS",
  "MONGODB",
  "POSTGRES",
  "DOCKER",
  "KUBERNETES",
  "WEBPACK",
  "VITE",
  "TAILWIND",
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = "") => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export const getInitialState = (): ScrambleWordsState => {
  const shuffledWords = shuffleArray([...GAME_WORDS]);
  return {
    currentWord: shuffledWords[0],
    scrambledWord: scrambleWord(shuffledWords[0]),
    words: shuffledWords,
    guess: "",
    points: 0,
    errorCounter: 0,
    maxAllowErrors: 3,
    skipCounter: 0,
    maxSkips: 3,
    isGameOver: false,
    totalWord: shuffledWords.length,
  };
};

export type ScrambleWordsAction =
  | { type: "SET_GUESS"; payload: string }
  | { type: "CHECK_ANSWER" }
  | { type: "SKIP_WORD" }
  | { type: "START_NEW_GAME" };

export const scrambleWordsReducer = (
  state: ScrambleWordsState,
  action: ScrambleWordsAction
): ScrambleWordsState => {
  switch (action.type) {
    case "SET_GUESS":
      return {
        ...state,
        guess: action.payload.trim().toUpperCase(),
      };

    case "CHECK_ANSWER": {
      if (state.currentWord === state.guess) {
        const newWords = state.words.slice(1);

        return {
          ...state,
          words: newWords,
          points: state.points + 1,
          guess: "",
          currentWord: newWords[0],
          scrambledWord: scrambleWord(newWords[0]),
        };
      }

      return {
        ...state,
        guess: "",
        errorCounter: state.errorCounter + 1,
        isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
      };
    }

    case "SKIP_WORD": {
      if (state.skipCounter >= state.maxSkips) {
        return state;
      }

      const indiceActual = state.words.indexOf(state.currentWord);
      const siguienteIndice = indiceActual + 1;
      const siguientePalabra = state.words[siguienteIndice];

      // Si no hay más palabras → terminar juego
      if (!siguientePalabra) {
        return {
          ...state,
          skipCounter: state.skipCounter + 1,
          isGameOver: true,
        };
      }

      // Si sí hay siguiente palabra:
      return {
        ...state,
        skipCounter: state.skipCounter + 1,
        currentWord: siguientePalabra,
        scrambledWord: scrambleWord(siguientePalabra),
        guess: "",
      };
    }


    case "START_NEW_GAME" : {

      return getInitialState();
      
    }
    



    default:
      return state;
  }
};
