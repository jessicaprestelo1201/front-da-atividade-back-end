import Link from "next/link";
import Image from "next/image";
import styles from "./Card.module.css";

export default function Card({ id, name, image, status }) {
  return (
    <div className={styles.card}>
     
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p className={`${styles.status} ${status === "Alive" ? styles.alive : styles.dead}`}>
          {status}
        </p>
        <Link href={`/characters/${id}`} className={styles.button}>
          Detalhes
        </Link>
      </div>
    </div>
  );
}