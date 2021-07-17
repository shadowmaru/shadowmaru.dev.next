import styles from "../styles/company_name.module.css";

export default function CompanyName({
  children,
  url,
}: {
  children: string;
  url: string;
}) {
  return url ? (
    <a href={url} className={styles.companyLink}>
      {children}
    </a>
  ) : (
    <span>{children}</span>
  );
}
