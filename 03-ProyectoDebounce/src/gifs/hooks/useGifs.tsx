import { getGifsByQueryAction } from "../actions/get-gifs-by-query.action";
import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";

//Record es de typescript
//const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gif, setGif] = useState<Gif[]>([]);
  const [previousText, setPreviousText] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleClick = async (term: string) => {
    if (gifsCache.current[term]) {
      setGif(gifsCache.current[term]);

      return;
    }

    const gifs = await getGifsByQueryAction(term);
    setGif(gifs);
  };

  const handleSearch = async (query: string) => {
    const term = query.trim().toLowerCase();
    if (!term) return;

    const exist = previousText.some(
      (item) => item.toLocaleLowerCase() === term
    );

    if (exist) {
      console.log("ya existe");
      return;
    }

    setPreviousText([query, ...previousText].splice(0, 8));
    const gifs = await getGifsByQueryAction(query);
    setGif(gifs);

    gifsCache.current[query] = gifs;
  };

  return {
    gif,
    previousText,

    handleClick,
    handleSearch,
  };
};
