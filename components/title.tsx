import styles from "../styles/title.module.css";

export default function Title({
  children,
  url,
}: {
  children: string;
  url: string;
}) {
  return url ? (
    <a href={url} className={styles.link}>
      {children}
    </a>
  ) : (
    <span>{children}</span>
  );
}
