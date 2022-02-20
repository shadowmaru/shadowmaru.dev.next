import utilStyles from "../styles/utils.module.css";
import positionStyles from "../styles/position.module.css";

export default function Position({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={positionStyles.container}>
      <h4 className={`${utilStyles.headingSm} ${positionStyles.headingSm}`}>
        {title}
      </h4>
      <div>{children}</div>
    </div>
  );
}
