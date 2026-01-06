import { videoJuegoApi } from "../api/videoJuego.api";

export const getVideoJuegosByPageAction = async () => {
  const { data } = await videoJuegoApi.get("/");

  console.log({data})

  return data;
};
