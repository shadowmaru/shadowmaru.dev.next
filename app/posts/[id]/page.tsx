import Date from '../../../components/date';
import { getPostData } from '../../../lib/posts';
import utilStyles from '../../../styles/utils.module.css';

export default async function Post({params}) {
  const postData = await getPost(params)
  return (
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date}></Date>
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </article>
  );
}

async function getPost(params) {
  const postData = await getPostData(params.id as string);

  return postData;
}
