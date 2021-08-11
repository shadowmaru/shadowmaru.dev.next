import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Job from "../components/job";
import Education from "../components/education";
import Position from "../components/position";
import utilStyles from "../styles/utils.module.css";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Resume</title>
      </Head>
      <section>
        <h2 className={utilStyles.headingXl}>Working Experience</h2>

        <Job
          title="Software Engineer Specialist"
          company="SumUp"
          url="https://sumup.com.br"
          from={new Date(2019, 8, 16)}
          to={new Date()}
        >
          Tech Lead of Terminals team, handling financial transactions from card
          readers, using Elixir and Erlang.
        </Job>

        <Job
          title="Senior Software Developer"
          company="Grupo Bio Ritmo/Smart Fit"
          url="https://smartfit.com.br"
          from={new Date(2015, 6, 1)}
          to={new Date(2019, 8, 16)}
        >
          Lead Developer and Scrum Master for multiple teams, developing
          customer experiences and backoffice solutions. Acted on Smart Fit
          expansion in Latin America.
        </Job>

        <Job
          title="Senior Software Developer"
          company="Topster"
          from={new Date(2014, 1, 1)}
          to={new Date(2015, 6, 1)}
        >
          Adtech startup focused on Facebook campaigns. Full stack web developer
          using Ruby, Sinatra, AngularJS. Integration with Facebook APIs.
        </Job>

        <Job
          title="Software Developer"
          company="Grupo Bio Ritmo/Smart Fit"
          url="https://bioritmo.com.br"
          from={new Date(2009, 8, 23)}
          to={new Date(2014, 1, 1)}
        >
          <Position title="Senior Software Developer">
            Developed integrations with ERPs, banks and card schemes.
          </Position>
          <Position title="Software Developer">
            Developed the initial solution for online sales, client management,
            charging and access control for Smart Fit.
          </Position>
        </Job>

        <Job
          title="Software Developer"
          company="DBurns Design"
          url="https://www.dburnsdesign.com/"
          from={new Date(2008, 8, 1)}
          to={new Date(2009, 7, 1)}
        >
          Developed the in-house CMS with Ruby on Rails, used to build several
          projects for clients.
        </Job>

        <Job
          company="Space Produções"
          from={new Date(2001, 6, 1)}
          to={new Date(2008, 8, 1)}
        >
          Digital agency with internal and external projects. Internal projects
          were focused on kids and gastronomy. External projects were diverse,
          ranging from hospitality fairs to government websites and political
          campaigns.
          <Position title="IT Coordinator">
            Responsible for the IT team, managing internal network and inventory
          </Position>
          <Position title="Software Developer">
            Backend development for in-house projects and for clients like
            Petrobras and Hospital São Camilo, using Ruby and PHP
          </Position>
          <Position title="Junior Software Developer">
            Backend development for in-house projects, using PHP
          </Position>
        </Job>

        <Job
          title="Junior Software Developer"
          company="E-Sport Internet"
          from={new Date(2000, 4, 1)}
          to={new Date(2001, 4, 1)}
        >
          Entertainment and news portal about sports. Backend development in
          Perl and PHP.
        </Job>

        <Job
          title="Intern"
          company="Universidade Metodista de São Paulo"
          from={new Date(1999, 11, 1)}
          to={new Date(2000, 4, 1)}
        ></Job>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Education</h2>

        <Education
          place="Universidade de São Paulo"
          degree="Licenciate"
          subject="Mathematics"
          from={new Date(1995, 0, 1)}
          to={new Date(2005, 0, 1)}
        ></Education>
        <Education
          place="Universidade Metodista de São Paulo"
          degree="Bachelor"
          subject="Computer Science"
          from={new Date(1998, 0, 1)}
          to={new Date(2001, 0, 1)}
        ></Education>
      </section>
    </Layout>
  );
}
