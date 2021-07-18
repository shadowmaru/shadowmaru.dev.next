import { format, formatDuration, intervalToDuration } from "date-fns";
import utilStyles from "../styles/utils.module.css";
import publicationStyles from "../styles/publication.module.css";
import Title from "./title";

export default function Publication({
  title,
  url,
  type,
  date,
  children,
}: {
  title?: string;
  url?: string;
  type: string;
  date: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      {" "}
      <h3 className={`${utilStyles.headingLg} ${publicationStyles.headingLg}`}>
        <Title url={url}>{title}</Title>
      </h3>
      <div className={publicationStyles.duration}>
        {type} ({date})
      </div>
      <div>{children}</div>
    </div>
  );
}
