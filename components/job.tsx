import { format, formatDuration, intervalToDuration } from "date-fns";
import Title from "./title";
import utilStyles from "../styles/utils.module.css";
import jobStyles from "../styles/job.module.css";

export default function Job({
  title,
  company,
  city,
  country,
  url,
  from,
  to,
  children,
}: {
  title?: string;
  company: string;
  city: string;
  country: string;
  url?: string;
  from: Date;
  to: Date;
  children?: React.ReactNode;
}) {
  const today = new Date();
  const isCurrentJob =
    to.getFullYear() === today.getFullYear() &&
    to.getMonth() === today.getMonth();
  let headline = (
    <h3 className={`${utilStyles.headingMd} ${jobStyles.headingMd}`}>
      <Title url={url}>{company}, {city}, {country}</Title>
    </h3>
  );

  return (
    <div className={jobStyles.container}>
      {" "}
      <div className={jobStyles.duration}>
        <h4 className={`${utilStyles.headingSm} ${jobStyles.headingSm}`}>
          {format(from, "LLL yyy")} -{" "}
          {isCurrentJob ? "present" : format(to, "LLL yyy")}{" "}
          <br />
          <i className={jobStyles.durationInYears}>
            (
            {formatDuration(intervalToDuration({ start: from, end: to }), {
              format: ["years", "months"],
            })}
            )
          </i>
        </h4>
      </div>
      <div className={jobStyles.description}>
        {headline}
        <div>{children}</div>
      </div>
    </div>
  );
}
