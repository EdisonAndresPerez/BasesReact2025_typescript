import { NavLink } from "react-router-dom";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

const CustomMenu = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md p-2 transition ${
      isActive ? "bg-neutral-500 text-white" : "hover:bg-neutral-200"
    }`;

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger asChild>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger asChild>
          <NavLink to="/search" className={linkClass}>
            Search
          </NavLink>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default CustomMenu;
