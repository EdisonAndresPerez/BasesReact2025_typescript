import { memo } from "react";

interface Props {
  title: string;
}

export const MyTitle = memo(({ title }: Props) => {
  console.log('render de titulo')
  return <h1>{title}</h1>;

  
});
