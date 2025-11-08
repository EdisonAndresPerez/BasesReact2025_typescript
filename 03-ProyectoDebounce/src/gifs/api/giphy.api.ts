import axios from "axios";

export const giphyAPi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: import.meta.env.VITE_GIPHY_API_KEY,
    lang: "es",
  },
});
