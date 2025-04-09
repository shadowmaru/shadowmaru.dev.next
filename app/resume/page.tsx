import Image from "next/image";
import type { Metadata } from 'next'
import Job from "../../components/job";
import Education from "../../components/education";
import Position from "../../components/position";
import Knowledge from "../../components/knowledge";
import resumeStyles from "../../styles/resume.module.css";
import utilStyles from "../../styles/utils.module.css";

const name = "Ricardo S. Yasuda";

export const metadata: Metadata = {
  title: `${name} - Resume`,
}

export default function Resume() {
  return (
    <div>
      <section className={resumeStyles.personal}>
        <div className={resumeStyles.personalInfo}>
          <h1 className={utilStyles.headingXl}>{name}</h1>

          <p>
            <b>Email:</b> ricardo@yasuda.dev.br <br />
            <b>Web:</b> https://yasuda.dev.br
            <br />
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
            Responsible for the following teams over 3 years:

            Pricing: owner of a service that calculates and manages fees for all card present and card not present transactions worldwide, handling millions of transactions per month, built in Elixir, with surrounding services in Go that handle event-based fee campaign automations.

            Billing & Subscriptions: built the platform that supports different types of subscriptions at SumUp (Invoices, SumUp One, POS Pro), using microservices in TypeScript, Go and Lambda functions.

            Logistics: team responsible for handling hardware and Business Account card deliveries through 3rd Party Logistics partners around the world.
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
            The Telecom squad was responsible for handling cellular connectivity
             for millions of card readers worldwide.
          </Position>
          <Position title="Staff Software Engineer">
            Tech Lead of Terminals team, handling financial transactions from
            card readers in Brazil, using services in Elixir and Erlang. The
            team was also responsible for supervising the development of the
            reader's firmware, and coordinating their releases.

            Implemented Alternative Payment Methods on card readers, such as Pix
             in Brazil, support for manual card entry for benefits cards during
             the pandemic, and support for new card schemes such as Mastercard
             Debit.
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
            Extended the core system to support different kinds of fitness clubs
            featuring advanced scheduling functionalities.
            <br />
            Improved the integration between the access control system with
            physical barriers, with biometric authentication.
            <br />
            Acted on Smart Fit expansion in Latin America.
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
            Adtech specialized in automating and optimizing ad placements in
            Facebook Ads platform. Acted as Full stack web developer using Ruby,
            Sinatra, AngularJS. Integration with Facebook Ads APIs.
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
            Expanded Smart Fit from 3 locations to over 1000, in Brazil
            and Latin America, building country-specific solutions.
          </Position>
          <Position title="Software Developer">
            Built the core of the service that handled every aspect of
            a fitness club management: subscription management, billing,
            invoicing, customer management, access control, reconciliation,
            including integration with ERPs, banks, payment gateways and
            invoice printers.
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
            projects for clients, including personal and business websites, and
            e-commerce sites.
          </Position>
        </Job>

        <Job
          company="Space Produções"
          city="São Paulo"
          country="BR"
          from={new Date(2001, 6, 1)}
          to={new Date(2008, 8, 1)}
        >
          Digital agency with internal projects focused on kids and gastronomy,
          and external projects ranging from hospitality fairs to political
          campaigns.
          <Position title="IT Coordinator">
            Responsible for the IT team, managing internal network and inventory,
            while still being able to work on projects as a developer.
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
          Portuguese (native), English (fluent), Spanish (advanced), German
          (intermediate)
        </Knowledge>

        <Knowledge title="Programming Languages">
          Elixir, Ruby, JavaScript
        </Knowledge>

        <Knowledge title="Other Skills">
          Scrum, Kanban, Management 3.0
        </Knowledge>
      </section>
    </div>
  );
}
