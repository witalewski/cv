import { PropsWithChildren } from "react";

const Job = ({
  company,
  position,
  startDate,
  endDate,
  children,
}: PropsWithChildren<{
  company: string;
  position?: string;
  startDate: Date;
  endDate?: Date;
}>) => {
  const dateFormat = new Intl.DateTimeFormat("en-GB", {
    month: "short",
    year: "numeric",
  });
  return (
    <section className="bg-card flex flex-col gap-1 p-1">
      <div className="flex justify-between border-b text-lg">
        <h2>
          <span className="font-normal">{company}</span>
          {position && <span> &ndash; {position}</span>}
        </h2>
        <div>
          {dateFormat.format(startDate)} &ndash;{" "}
          {endDate ? dateFormat.format(endDate) : "Present"}
        </div>
      </div>
      <div className="py-0.5">{children}</div>
    </section>
  );
};

export default Job;
