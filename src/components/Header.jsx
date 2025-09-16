"use client";

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.logo}>Lana Del Rey</h1>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/apiinfo" className={styles.link}>API Info</Link>
          <Link href="/characters" className={styles.link}>Músicas</Link>
          <Link href="/aboutme" className={styles.link}>Sobre mim</Link>
          <Link href="/favorites" className={styles.link}>Favoritos</Link>
        </nav>
      </div>
    </header>
  );
}
