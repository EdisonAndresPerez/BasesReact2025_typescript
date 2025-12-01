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
  totalWord : number;
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
    insGameOver: false,
    totalWord: shuffledWords.length
  };
};

export type ScrambleWordsAction =
  | { type: "NO_TENGO_IDEA_1" }
  | { type: "NO_TENGO_IDEA_2" }
  | { type: "NO_TENGO_IDEA_3" }
  | { type: "NO_TENGO_IDEA_4" };

export const scrambleWordsReducer = (
  state: ScrambleWordsState,
  action: ScramleWordsAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};
