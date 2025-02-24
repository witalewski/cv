import { PropsWithChildren } from "react";

const ListItem = ({ children }: PropsWithChildren) => {
  return <li className="ml-8 max-w-xl list-disc">{children}</li>;
};

export default ListItem;
