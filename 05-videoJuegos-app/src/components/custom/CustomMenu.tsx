import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useLocation } from 'react-router'

const {} = useLocation();

const CustomMenu = () => {

   
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger asChild  className="bg-neutral-500 rounded-md p-2">
          <Link to="/">Home</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger asChild className="bg-neutral-500   rounded-md p-2">
          <Link to="/search">Search</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default CustomMenu;
