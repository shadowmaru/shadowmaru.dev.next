export default function Experience({sinceYear}: {sinceYear: number}) {
  const today = new Date();
  
  return <b>{today.getFullYear() - sinceYear} years of experience</b>
}