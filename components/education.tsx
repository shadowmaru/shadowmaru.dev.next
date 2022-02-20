import { format } from "date-fns";
import utilStyles from "../styles/utils.module.css";
import educationStyles from "../styles/education.module.css";

export default function Education({
  degree,
  subject,
  place,
  city,
  country,
  from,
  to,
  children,
}: {
  degree: string;
  subject: string;
  place: string;
  city: string;
  country: string;
  from: Date;
  to: Date;
  children?: React.ReactNode;
}) {
  const today = new Date();
  const isCurrentEducation =
    to.getFullYear() === today.getFullYear() &&
    to.getMonth() === today.getMonth();
  return (
    <div className={educationStyles.container}>
      {" "}
      <div className={educationStyles.duration}>
        <h4 className={educationStyles.durationText}>
          {format(from, "yyy")} -{" "}
          {isCurrentEducation ? "present" : format(to, "yyy")}{" "}
        </h4>
      </div>
      <div className={educationStyles.description}>
        <h3 className={`${utilStyles.headingMd} ${educationStyles.headingMd}`}>
          {place}, {city}, {country}
        </h3>
        <div>
          {degree}, {subject}
        </div>
        <p>
          <small>{children}</small>
        </p>
      </div>
    </div>
  );
}
