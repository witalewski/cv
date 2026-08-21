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
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    // month: "short",
    year: "numeric",
  });
  return (
    <section className="bg-card flex flex-col gap-1">
      <div className="flex justify-between border-b text-lg">
        <div className="flex">
          <h3>
            <span className="font-normal">{company}</span>
          </h3>
          {position && <h4>&nbsp;-&nbsp;{position}</h4>}
        </div>

        <div>
          {dateFormat.format(startDate)}&nbsp;-&nbsp;
          {endDate ? dateFormat.format(endDate) : "Present"}
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Job;
