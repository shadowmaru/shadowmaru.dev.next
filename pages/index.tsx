import {GetStaticProps} from 'next'
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import Experience from '../components/experience';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

export default function Home({ allPostsData }) {
  const workingSince = 1999
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello 👋, I&apos;m <b>Ricardo</b>! I&apos;m a software developer 💻 
          based in São Paulo, Brazil 🇧🇷, with{' '} 
          <Experience sinceYear={workingSince}></Experience>. 
          You can find me on{' '}
          <a href="https://twitter.com/shadowmaru">Twitter</a> and on{' '}
          <a href="https://github.com/shadowmaru">GitHub</a>.
        </p>

        <p>I like to build software, especially using languages like Ruby, Elixir and JavaScript. Sometimes I also contribute with open source projects.</p>

        <p>When I&apos;m not coding, I&apos;m playing guitar 🎸 with my band (or in Rocksmith), riding one of my bikes 🚴 or playing videogames 👾.</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}></Date>
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
}
