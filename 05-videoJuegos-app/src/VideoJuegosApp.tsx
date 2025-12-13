import { RouterProvider } from "react-router";
import { router } from "./router/app.router";

export const VideoJuegosApp = () => {
  return (
    <>
      <RouterProvider router={router} />,
    </>
  );
};
