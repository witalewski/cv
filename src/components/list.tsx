import { PropsWithChildren } from "react";

const List = ({ children }: PropsWithChildren) => {
  return <ul>{children}</ul>;
};

export default List;
