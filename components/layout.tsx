import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React from "react";
import Navbar from "./navbar";

const name = "Ricardo Yasuda";
export const siteTitle = "Ricardo Yasuda, software developer";

export default function Layout({
  children,
  home,
  resume,
}: {
  children: React.ReactNode;
  home?: boolean;
  resume?: boolean;
}) {
  return (
    <div className="light-mode" id="main">
      <Navbar></Navbar>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Ricardo Yasuda, software developer and engineering manager"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
              <meta name="og:title" content={siteTitle} />
              <meta name="twitter:card" content="summary_large_image" />
              <script>
              {`
                var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101172554);
                `}
                </script>
                <script async src="//static.getclicky.com/js" />
                  </Head>
                  <header className={styles.header}>
                    {home ? (
                      <>
                        <Image
                          priority
                          src="/images/profile.jpeg"
                          className={utilStyles.borderCircle}
                          height={144}
                          width={144}
                          alt={name}
                        />
                        <h1 className={utilStyles.headingXl}>{name}</h1>
                      </>
                    ) : (resume ? (
                      <></>
                    ): (
                    <>
                    <Link href="/">
                    <a>
                    <Image
                    priority
                    src="/images/profile.jpeg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                    />
                    </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                    </h2>
                    </>
                    ))}
                    </header>
                    <main>{children}</main>
                    {!home && (
                      <div className={styles.backToHome}>
                      <Link href="/">
                      <a>??? Back to home</a>
                      </Link>
                      </div>
                    )}
                    </div>
                    </div>
  );
}
