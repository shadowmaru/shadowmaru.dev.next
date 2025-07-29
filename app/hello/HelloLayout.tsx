'use client'
import type { Metadata } from 'next'
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";
import styles from "../../styles/layout.module.css";
import utilStyles from "../../styles/utils.module.css";

const name = "Hello, I'm Ricardo Yasuda";

export const metadata: Metadata = {
  title: name,
};

export default function PublicationsLayout({ children }) {
  return (
    <div className="light-mode" id="main">
      <Navbar></Navbar>
      <div className={styles.container}>
        <Script async data-id="101172554" src="//static.getclicky.com/js" />
        <header className={styles.header}>
          <Link href="/">
            <Image
              priority
              src="/images/Ricardo Yasuda.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
              id="profile-picture"
            />
          </Link>
          <h2 className={utilStyles.headingXl}>
            <Link href="/" className={utilStyles.colorInherit}>{name}</Link>
          </h2>
        </header>
        <main>{children}</main>
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      </div>
    </div>
  )
}