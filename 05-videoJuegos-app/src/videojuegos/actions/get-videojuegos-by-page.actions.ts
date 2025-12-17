import { videoJuegoApi } from "../api/videoJuego.api";

export const getVideoJuegosByPage = async () => {
  const { data } = await videoJuegoApi.get("/");

  return data;
};
