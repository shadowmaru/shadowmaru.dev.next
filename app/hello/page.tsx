import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/hello.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function Hello() {
  return(
    <div className={styles.hello}>
      <p>
        I&apos;m a <strong>software development leader</strong> who has
        scaled products with millions of customers, along with their 
        teams and organizations.
      </p>
      <p>
        My last position was Engineering Manager at <a href="https://sumup.com"><strong>SumUp</strong></a> in Pricing,
        automating the fee application of millions of daily transactions worldwide.
        Previously, as a Tech Lead, I helped <a href="https://investor.smartfit.com.br/en/the-group/who-we-are/">Smart Fit</a> grow
        from 100 to 2.800.000 customers, and expand to 12 countries in Latin America.
      </p>
      <p>
        <a href="https://www.linkedin.com/in/ricardoyasuda/" className={styles.linkedinButton}>
          Connect on LinkedIn 
          <svg className={styles.linkedin} width="6" height="6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
          </svg>
        </a>

        <span className={styles.resumeLink}>or <Link href="/resume" passHref className="resume">see my resume here</Link></span>
      </p>

      <h3>People Management</h3>

      <p>
        I have a track record of hiring, growing and retaining talent in remote and hybrid setups. 
        I've managed distributed teams in different timezones, leading initiatives that impacted countries
        around the world and generated billions of Euros in revenue, while staying compliant to local regulations.
      </p>

      <p>
        DEIB is the foundation of highly productive and customer-focused teams, so I focus on Diversity,
        Equity, Inclusion and Belonging in every aspect of people management, leading to a high retention rate
        and stellar feedback from direct reports.
      </p>

      <h3>Recommendations</h3>

      <div className={styles.recommendation}>
        <figure className={styles.quote}>
          <blockquote>
            Ricardo is a remarkable manager who strikes a perfect balance between providing guidance and allowing autonomy. 
            He creates an environment where growth is encouraged, while ensuring you never feel unsupported. 
            Throughout the year and a half we've worked together, he has consistently been present, 
            offering valuable advice, encouragement, and trust. <b>His support has been instrumental in my 
            professional development</b>, especially during my transition into a managerial role. 
            I've learned a great deal from his leadership style, and I genuinely appreciate the confidence 
            he placed in me as I took on new challenges.
          </blockquote>
          <figcaption>
            &mdash; Mohamed Sayed, Engineering Manager
          </figcaption>
        </figure>

        <figure className={styles.quote}>
          <blockquote>
            I worked with Ricardo closely on different projects he always was very humble and proactive. <b>He
            always had priorities in mind</b> but challenged at the right time for technical excellence.
            As an Engineer Manager he was loved by the team and kept them focused and healthy! 
            I strongly believe he will be valuable for any team!
          </blockquote>
          <figcaption>
            &mdash; Daniel Meyer, Staff Software Engineer
          </figcaption>
        </figure>        
        
        <figure className={styles.quote}>
          <blockquote>
            Ricardo is a guy very focused on the goals that the project and the team needs. <b>His  
            technical knowledge is impressive.</b> He is very flexible to everyone's opinions 
            and always help to decide what is the best to implement to deliver to the customer in the 
            most appropriate way without forgetting the quality of the software.
          </blockquote>
          <figcaption>
            &mdash; Diego Polido, Software Engineer
          </figcaption>
        </figure>
      </div>

      <h3>Coding</h3>

      <p>
        I've used a few languages through my career, both in frontend and backend, leveraging
        documentation, internationalization and localization. Although being Engineering Manager
        nowadays, I can still be hands-on in coding, rewiewing and architecting to unblock and mentor teams.
      </p>

      <p>
        My expertise lies in Ruby, Ruby on Rails, Elixir, Phoenix, and JavaScript (NodeJS, Next.js, React), 
        plus HTML and CSS.
      </p>

      <h3>Products</h3>
      <p>At SumUp, I was able to contribute to products both as a Software Engineer and Engineering Manager</p>

      <h4>Fee Management Platform</h4>
      <p>Automated fee management platform, handling millions of transactions daily</p>

      <h4>Subscriptions Platform</h4>
      <p>Supported customisable subscriptions for SumUp products</p>

      <h4>Billing Platform</h4>
      <p>Handled billing for subscriptions, including retries, dunning, notifications</p>

      <h4>Card Readers</h4>
      <p>
        Backend for physical card readers, that supported not only debit and credit cards, but also
        PIX (instant bank transfers using QR code) and government benefits cards.
      </p>

      <h3>Speaking</h3>
      <p>
        I've presented in Engineering All Hands, onboarding sessions, and Ruby meetups and conferences,
        including RubyConf Brazil.
      </p>
    </div>
  );
};
