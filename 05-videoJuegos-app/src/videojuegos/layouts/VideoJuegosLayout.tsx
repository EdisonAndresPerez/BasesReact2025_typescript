import { Outlet } from "react-router";
import CustomMenu from "@/components/custom/CustomMenu";


export const VideoJuegosLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-6">
        <CustomMenu/>
        <Outlet/>
      </div>
    </div>
  );
};
