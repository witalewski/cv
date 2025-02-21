import { PropsWithChildren } from "react";

const Section = ({
  title,
  children,
}: PropsWithChildren<{
  title: string;
}>) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-normal">{title}</h2>
      <div className="px-4">{children}</div>
    </section>
  );
};

export default Section;
