import { AdminPages } from "@/admin/pages/AdminPages";
import { VideoJuegoPage } from "@/videojuegos/pages/game/VideoJuegoPage";
import { HomePage } from "@/videojuegos/pages/home/HomePage";
import { SearchPage } from "@/videojuegos/pages/search/SearchPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/juego/1",
    element: <VideoJuegoPage/>,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
     {
    path: "/admin",
    element: <AdminPages/>,
  },
]);
