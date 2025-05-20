import { Metadata, ResolvingMetadata } from "next";
import { metadata } from "../../layout";
import Date from "../../../components/date";
import { getPostData } from "../../../lib/posts";
import utilStyles from "../../../styles/utils.module.css";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Post(props) {
  const params = await props.params;
  const postData = await getPost(params);
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
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = (await params).id;

  const post = await getPostData(id as string);

  const thumbnail = post.thumbnail
    ? `${metadata.openGraph?.url}${post.thumbnail}`
    : null;

  return {
    title: `${post.title} | ${metadata.title}`,
    description: post.description,
    ...(thumbnail && {
      openGraph: {
        images: [thumbnail],
      },
    }),
    ...(post.author && {
      other: {
        "fediverse:creator": post.author,
      },
    }),
  };
}

async function getPost(params) {
  const postData = await getPostData(params.id as string);

  return postData;
}
