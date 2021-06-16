import { format, formatDuration, intervalToDuration } from "date-fns";

export default function Job({
  title,
  company,
  from,
  to,
  children,
}: {
  title: string;
  company: string;
  from: Date;
  to: Date;
  children?: React.ReactNode;
}) {
  const today = new Date();
  const isCurrentJob =
    to.getFullYear() === today.getFullYear() &&
    to.getMonth() === today.getMonth();
  return (
    <div>
      {" "}
      <b>
        {title} at {company}
      </b>
      <div>
        {format(from, "LLL yyy")} -{" "}
        {isCurrentJob ? "present" : format(to, "LLL yyy")}{" "}
        <i>
          (
          {formatDuration(intervalToDuration({ start: from, end: to }), {
            format: ["years", "months"],
          })}
          )
        </i>
      </div>
      <p>
        <small>{children}</small>
      </p>
    </div>
  );
}
