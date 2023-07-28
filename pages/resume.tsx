import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Job from "../components/job";
import Education from "../components/education";
import Position from "../components/position";
import Knowledge from "../components/knowledge";
import resumeStyles from "../styles/resume.module.css";
import utilStyles from "../styles/utils.module.css";

const name = 'Ricardo Yasuda'

export default function Resume() {
  return (
    <Layout resume>
      <Head>
        <title>{`${siteTitle} - Resume`}</title>
      </Head>

      <section className={resumeStyles.personal}>
        <div className={resumeStyles.personalInfo}>
          <h1 className={utilStyles.headingXl}>{name}</h1>

          <p>
            <b>Email:</b> ricardo@yasuda.dev.br <br />
            <b>Web:</b> https://yasuda.dev.br<br />
            <b>Nationality:</b> Brazilian
          </p>
        </div>
        <div className={resumeStyles.personalPhoto}>
          <Image
            priority
            src="/images/resume.jpeg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
        </div>
      </section>
      <section className={resumeStyles.working}>
        <h2 className={utilStyles.headingLg}>Working Experience</h2>

        <Job
          company="SumUp"
          city="Berlin"
          country="DE"
          url="https://sumup.de"
          from={new Date(2022, 5, 1)}
          to={new Date()}
        >
          <Position title="Engineering Manager">
            Engineering Manager for multiple teams (Logistics, Partners,
            Pricing, Billing) in multiple tribes (Acquisition, Growth,
            Online Payments).
          </Position>
        </Job>
        <Job
          company="SumUp"
          city="São Paulo"
          country="BR"
          url="https://sumup.com.br"
          from={new Date(2019, 8, 16)}
          to={new Date(2022, 4, 31)}
        >
          <Position title="Engineering Manager">
            Engineering Manager for the Telecom team, handling connectivity for
            card readers worldwide.
          </Position>
          <Position title="Specialist Software Engineer">
            Tech Lead of Terminals team, handling financial transactions from card
            readers, using Elixir and Erlang.
          </Position>
        </Job>

        <Job
          company="Smart Fit"
          city="São Paulo"
          country="BR"
          url="https://smartfit.com.br"
          from={new Date(2015, 6, 1)}
          to={new Date(2019, 8, 16)}
        >
          <Position title="Senior Software Developer">
            Lead Developer and Scrum Master for multiple teams, developing
            customer experiences and backoffice solutions. Acted on Smart Fit
            expansion in Latin America.
          </Position>
        </Job>

        <Job
          company="Topster"
          city="São Paulo"
          country="BR"
          from={new Date(2014, 1, 1)}
          to={new Date(2015, 6, 1)}
        >
          <Position title="Senior Software Developer">
            Adtech startup focused on Facebook campaigns. Full stack web developer
            using Ruby, Sinatra, AngularJS. Integration with Facebook APIs.
          </Position>
        </Job>

        <Job
          company="Smart Fit"
          city="São Paulo"
          country="BR"
          url="https://smartfit.com.br"
          from={new Date(2009, 8, 23)}
          to={new Date(2014, 1, 1)}
        >
          <Position title="Senior Software Developer">
            Developed integrations with ERPs, banks and card schemes.
          </Position>
          <Position title="Software Developer">
            Developed solutions for online sales, client management,
            charging and access control.
          </Position>
        </Job>

        <Job
          company="DBurns Design"
          city="São Paulo"
          country="BR"
          url="https://www.dburnsdesign.com/"
          from={new Date(2008, 8, 1)}
          to={new Date(2009, 7, 1)}
        >
          Digital agency based in Santa Monica, CA, USA.
          <Position title="Software Developer">
            Developed the in-house CMS with Ruby on Rails, used to build several
            projects for clients.
          </Position>
        </Job>

        <Job
          company="Space Produções"
          city="São Paulo"
          country="BR"
          from={new Date(2001, 6, 1)}
          to={new Date(2008, 8, 1)}
        >
          Digital agency with internal projects
          focused on kids and gastronomy, and external projects
          ranging from hospitality fairs to political campaigns.
          <Position title="IT Coordinator">
            Responsible for the IT team, managing internal network and inventory
          </Position>
          <Position title="Software Developer">
            Backend development for internal projects and for clients like
            Petrobras and Hospital São Camilo, using Ruby and PHP
          </Position>
          <Position title="Junior Software Developer">
            Backend development for internal projects, using PHP
          </Position>
        </Job>
      </section>

      <section className={resumeStyles.education}>
        <h2 className={utilStyles.headingLg}>Education</h2>

        <Education
          place="Universidade de São Paulo"
          city="São Paulo"
          country="BR"
          degree="Licenciate"
          subject="Mathematics"
          from={new Date(1995, 0, 1)}
          to={new Date(2005, 0, 1)}
        ></Education>
        <Education
          place="Universidade Metodista de São Paulo"
          city="São Bernardo do Campo"
          country="BR"
          degree="Bachelor"
          subject="Computer Science"
          from={new Date(1998, 0, 1)}
          to={new Date(2001, 0, 1)}
        ></Education>
      </section>

      <section className={resumeStyles.knowledge}>
        <h2 className={utilStyles.headingLg}>Knowledge</h2>

        <Knowledge title="Languages">
          Portuguese (native), English (fluent), Spanish (advanced), German (elementary)
        </Knowledge>

        <Knowledge title="Programming Languages">
          Elixir, Ruby, JavaScript
        </Knowledge>

        <Knowledge title="Other Skills">
          Scrum, Kanban, Management 3.0
        </Knowledge>
      </section>
    </Layout>
  );
}
