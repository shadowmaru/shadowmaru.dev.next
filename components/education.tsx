import { format } from "date-fns";
import utilStyles from "../styles/utils.module.css";
import educationStyles from "../styles/education.module.css";

export default function Education({
  degree,
  subject,
  place,
  from,
  to,
  children,
}: {
  degree: string;
  subject: string;
  place: string;
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
      <h3 className={`${utilStyles.headingMd} ${educationStyles.headingMd}`}>
        {place}
      </h3>
      <div>
        {degree}, {subject}
      </div>
      <div className={educationStyles.duration}>
        {format(from, "yyy")} -{" "}
        {isCurrentEducation ? "present" : format(to, "yyy")}{" "}
      </div>
      <p>
        <small>{children}</small>
      </p>
    </div>
  );
}
