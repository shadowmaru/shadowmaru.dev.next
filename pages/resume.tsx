import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Job from "../components/job";
import utilStyles from "../styles/utils.module.css";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Resume</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Working Experience</h2>

        <Job
          title="Software Engineer Specialist"
          company="SumUp"
          from={new Date(2019, 8, 16)}
          to={new Date()}
        >
          Tech Lead of Terminals team, handling financial transactions from card
          readers, using Elixir and Erlang.
        </Job>

        <Job
          title="Senior Software Developer"
          company="Grupo Bio Ritmo"
          from={new Date(2015, 6, 1)}
          to={new Date(2019, 8, 16)}
        >
          Lead Developer and Delivery Manager for multiple teams, developing
          customer experiences and backoffice solutions.
        </Job>

        <Job
          title="Software Developer"
          company="Topster"
          from={new Date(2014, 1, 1)}
          to={new Date(2015, 6, 1)}
        >
          Full stack web developer using Ruby, Sinatra, AngularJS, PostgreSQL.
          Integration with Facebook APIs.
        </Job>

        <Job
          title="Software Developer"
          company="Bio Ritmo"
          from={new Date(2009, 8, 23)}
          to={new Date(2014, 1, 1)}
        >
          Developed solutions for online sales, client management, charging and
          access control. Integration with ERPs, banks and invoice printers.
        </Job>

        <Job
          title="Software Developer"
          company="DBurns Design"
          from={new Date(2008, 8, 1)}
          to={new Date(2009, 7, 1)}
        >
          Developed the in-house CMS, used to build several projects for
          clients.
        </Job>

        <Job
          title="Software Developer/IT Coordinator"
          company="Space Produções"
          from={new Date(2001, 6, 1)}
          to={new Date(2008, 8, 1)}
        ></Job>

        <Job
          title="Webdeveloper"
          company="E-Sport Internet"
          from={new Date(2000, 4, 1)}
          to={new Date(2001, 4, 1)}
        ></Job>

        <Job
          title="Intern"
          company="Universidade Metodista de São Paulo"
          from={new Date(1999, 11, 1)}
          to={new Date(2000, 4, 1)}
        ></Job>
      </section>
    </Layout>
  );
}
