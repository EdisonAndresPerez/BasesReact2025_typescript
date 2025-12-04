import { use, type Usable } from "react";
import { type User } from "./api/get-user-action";

interface Props {
  getUser: Usable<User>;
}

export const ClientInformation = ({ getUser }: Props) => {
  const user = use(getUser);

  //const user = await getUserAction(id)

  // useEffect(() => {
  //   getUserAction(id).then(console.log);
  // }, [id]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">{user.name}- #123</h2>

      <p className="text-white text-2xl">Ibague, Tolima</p>
      <p className="text-white text-2xl">Desarrollador web</p>
    </div>
  );
};
