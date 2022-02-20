import utilStyles from "../styles/utils.module.css";
import knowledgeStyles from "../styles/knowledge.module.css";

export default function Knowledge({
  title, children
}:
  {
  title: string;
  children?: React.ReactNode;
}) {
  return(
    <div className={knowledgeStyles.container}>
      <div className={knowledgeStyles.title}>
        <h4 className={`${utilStyles.headingSm} ${knowledgeStyles.headingSm}`}>{title}</h4>
      </div>
      <div className={knowledgeStyles.description}>
        {children}
      </div>
    </div>
  )
}
