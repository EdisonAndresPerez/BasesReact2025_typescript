import AdminLayout from "@/admin/layouts/AdminLayout";
import { AdminPages } from "@/admin/pages/AdminPages";
import { VideoJuegosLayout } from "@/videojuegos/layouts/VideoJuegosLayout";
import { VideoJuegoPage } from "@/videojuegos/pages/game/VideoJuegoPage";
import { HomePage } from "@/videojuegos/pages/home/HomePage";
import { SearchPage } from "@/videojuegos/pages/search/SearchPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <VideoJuegosLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/juegos/1",
        element: <VideoJuegoPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPages />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminPages />,
  },
]);
