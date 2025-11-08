import { describe, expect, test } from "vitest";
import { giphyAPi } from "./giphy.api";

describe("giphyApi", () => {
  test("debe estar configurado correctamente", () => {
    const params = giphyAPi.defaults.params;

    console.log(params);

    expect(giphyAPi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");
    expect(params.lang).toBe("es");
    expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);

    //expect(giphyAPi.defaults.params) .toBe('https://api.giphy.com/v1/gifs')
  });
});
