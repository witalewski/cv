const List = ({ items }: { items: string[] }) => {
  return (
    <ul>
      {items.map((item) => (
        <li className="ml-8 max-w-xl list-disc" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
