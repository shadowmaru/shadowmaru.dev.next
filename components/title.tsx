export default function Title({
  children,
  url,
}: {
  children: string;
  url: string;
}) {
  return url ? (
    <a href={url} className="special-link">
      {children}
    </a>
  ) : (
    <span>{children}</span>
  );
}
