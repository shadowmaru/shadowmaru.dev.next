export default function Position({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <b className="position">{title}</b>
      <p>{children}</p>
    </div>
  );
}
