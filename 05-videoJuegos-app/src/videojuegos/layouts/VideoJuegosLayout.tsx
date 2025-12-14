import { Link, Outlet } from "react-router";

export const VideoJuegosLayout = () => {
  return <div className=" bg-amber-800">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
        <li>
        <Link to="/juegos/1">Video Juego</Link>
      </li>
        <li>
        <Link to="/search">Search</Link>
      </li>
        <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
    <Outlet/>
  </div>;   
};
