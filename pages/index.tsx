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
      <section className={utilStyles.headingMd}>
        <p>
          Hello 👋, I&apos;m <b>Ricardo</b>! I&apos;m a software developer 💻
          based in São Paulo, Brazil 🇧🇷, with{" "}
          <Link href="/resume" passHref>
            <a>{today.getFullYear() - workingSince} years of experience</a>
          </Link>
          . You can find me on{" "}
          <a href="https://twitter.com/shadowmaru">Twitter</a> and on{" "}
          <a href="https://github.com/shadowmaru">GitHub</a>.
        </p>

        <p>
          I like to build software, especially using languages like Ruby, Elixir
          and JavaScript. Sometimes I also contribute with open source projects.
        </p>

        <p>
          When I&apos;m not coding, I&apos;m playing guitar 🎸 with my band (or
          in Rocksmith), riding one of my bikes 🚴, playing videogames 👾 or
          feeding my cats 🐈‍⬛ and dogs 🐕.
        </p>

        <p>
          You can read what I&apos;ve written in{" "}
          <Link href="/publications">external publications</Link> or in the
          posts below.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Writing</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
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
