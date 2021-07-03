import { format } from "date-fns";

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
    <div>
      {" "}
      <b>{place}</b>
      <div>
        {degree}, {subject}
      </div>
      <div>
        {format(from, "yyy")} -{" "}
        {isCurrentEducation ? "present" : format(to, "yyy")}{" "}
      </div>
      <p>
        <small>{children}</small>
      </p>
    </div>
  );
}
