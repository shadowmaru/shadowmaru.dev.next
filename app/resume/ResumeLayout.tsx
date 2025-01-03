'use client'

import Script from "next/script";
import Link from "next/link";
import Navbar from "../../components/navbar";
import styles from "../../styles/layout.module.css";

export default function ResumeLayout({ children }) {
  return (
    <div className="light-mode" id="main">
      <Navbar></Navbar>
      <div className={styles.container}>
        <Script async data-id="101172554" src="//static.getclicky.com/js" />
        <header className={styles.header}>
        </header>
        <main>{children}</main>
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      </div>
    </div>
  )
}