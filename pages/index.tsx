import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { default as PostDate } from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
  const workingSince = 1999;
  const today = new Date();
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>
          Hello 👋&nbsp;, I&apos;m <b>Ricardo Yasuda</b>! I&apos;m a Brazilian 🇧🇷&nbsp; software developer
          💻&nbsp; currently working as Engineering Manager 🧑🏻‍💻&nbsp;based in Berlin, Germany 🇩🇪&nbsp;, with{" "}
          <Link href="/resume" passHref className="resume">
            {today.getFullYear() - workingSince} years of experience
          </Link>
          . You can find me on{" "}
          <a href="https://twitter.com/shadowmaru">Twitter</a> and on{" "}
          <a href="https://github.com/shadowmaru">GitHub</a>.
        </p>

        <p>
          I like to build software, using languages like Ruby, Elixir
          and JavaScript. Sometimes I also contribute with open source projects.
        </p>

        <p>
          In my free time, I&apos;m playing guitar 🎸&nbsp;,
          riding bikes 🚴&nbsp;, playing
          videogames 👾&nbsp; or feeding my cats 🐈‍⬛&nbsp;.
        </p>

        <p>
          You can read what I&apos;ve written in{" "}
          <Link href="/publications" className="publications">external publications</Link> or in the
          posts below.
        </p>
      </section>

      <section className={`writing ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Writing</h2>
        <ul className={`writing__posts ${utilStyles.list}`}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`} className="writing__posts__link">{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <PostDate dateString={date}></PostDate>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};
