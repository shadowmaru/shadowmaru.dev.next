import { format, formatDuration, intervalToDuration } from "date-fns";
import Title from "./title";
import utilStyles from "../styles/utils.module.css";
import jobStyles from "../styles/job.module.css";

export default function Job({
  title,
  company,
  url,
  from,
  to,
  children,
}: {
  title?: string;
  company: string;
  url?: string;
  from: Date;
  to: Date;
  children?: React.ReactNode;
}) {
  const today = new Date();
  const isCurrentJob =
    to.getFullYear() === today.getFullYear() &&
    to.getMonth() === today.getMonth();
  let headline;
  if (Array.isArray(children)) {
    headline = (
      <h3 className={`${utilStyles.headingLg} ${jobStyles.headingLg}`}>
        <Title url={url}>{company}</Title>
      </h3>
    );
  } else {
    headline = (
      <h3 className={`${utilStyles.headingLg} ${jobStyles.headingLg}`}>
        {title} at <Title url={url}>{company}</Title>
      </h3>
    );
  }
  return (
    <div className={jobStyles.container}>
      {" "}
      {headline}
      <div className={jobStyles.duration}>
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
      <div>{children}</div>
    </div>
  );
}
