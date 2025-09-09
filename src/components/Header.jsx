"use client";

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.logo}>Projeto Next.js 🖼️</h1>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/apiinfo" className={styles.link}>API Info</Link>
          <Link href="/characters" className={styles.link}>Personagens</Link>
        </nav>
      </div>
    </header>
  );
}
