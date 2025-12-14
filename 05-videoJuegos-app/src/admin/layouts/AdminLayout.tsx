import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="bg-green-700">
      pantalla admin
      <Outlet />
    </div>
  );
};

export default AdminLayout;
