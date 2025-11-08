import type { GiphyRandom } from "../data/giphy.response";

const API_KEY = "j4FicAKM7ELgQgAV0vSdubM48O9V3xVu";

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;

  document.body.append(imgElement);
};

const getRandomGifUrlAsyn = async () => {

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  );

  const {data}: GiphyRandom = await response.json();

  return data.images.original.url;
};


getRandomGifUrlAsyn().then(createImageInsideDOM)
