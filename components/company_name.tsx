export default function CompanyName({
  children,
  url,
}: {
  children: string;
  url: string;
}) {
  return url ? <a href={url}>{children}</a> : <span>{children}</span>;
}
