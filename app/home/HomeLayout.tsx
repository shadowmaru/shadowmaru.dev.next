'use client'

import Script from "next/script";
import Image from "next/image";
import Navbar from "../../components/navbar";
import styles from "../../styles/layout.module.css";
import utilStyles from "../../styles/utils.module.css";

const name = "Ricardo Yasuda";

export default function HomeLayout({ children }) {
  return (
    <div className="light-mode" id="main">
      <Navbar></Navbar>
      <div className={styles.container}>
        <Script async data-id="101172554" src="//static.getclicky.com/js" />
        <header className={styles.header}>
          <Image
            priority
            src="/images/profile.jpeg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.headingXl}>{name}</h1>
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}