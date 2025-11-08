import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyAPi } from "../api/giphy.api";

export const getGifsByQueryAction = async (query: string): Promise<Gif[]> => {

  const response = await giphyAPi<GiphyResponse>("/search", {
    params: {
      q: query, 
      limit: 10,
    },
  });

  console.log(response.data);
  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }));

  //fetch('https://api.giphy.com/v1/gifs/search?api_key=fP1J5TqlIBEBkBCpZ2L91Sl3DrYZABVP&q=${query}&limit=10&lang=es')
};
