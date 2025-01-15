import { Metadata, ResolvingMetadata } from 'next';
import { siteUrl } from '../../layout';
import Date from '../../../components/date';
import { getPostData } from '../../../lib/posts';
import utilStyles from '../../../styles/utils.module.css';

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

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

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id

  const post = await getPostData(id as string)

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      images: [`${siteUrl}${post.thumbnail}`],
    }
  }
}

async function getPost(params) {
  const postData = await getPostData(params.id as string);

  return postData;
}
