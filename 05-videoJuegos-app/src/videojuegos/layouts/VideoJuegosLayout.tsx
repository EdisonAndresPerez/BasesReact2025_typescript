import { Outlet } from "react-router";

export const VideoJuegosLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-6">
        <Outlet/>
      </div>
    </div>
  );
};
