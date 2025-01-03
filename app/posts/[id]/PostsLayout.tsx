'use client'

import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/navbar";
import styles from "../../../styles/layout.module.css";
import utilStyles from "../../../styles/utils.module.css";

const name = "Ricardo Yasuda";

export default function PostsLayout({ children }) {
  return (
    <div className="light-mode" id="main">
      <Navbar></Navbar>
      <div className={styles.container}>
        <Script async data-id="101172554" src="//static.getclicky.com/js" />
        <header className={styles.header}>
          <Link href="/">
            <Image
              priority
              src="/images/profile.jpeg"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt={name}
            />
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/" className={utilStyles.colorInherit}>
              {name}
            </Link>
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