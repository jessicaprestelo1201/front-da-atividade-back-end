import Link from "next/link";
import styles from "./Card.module.css";

export default function Card({ id, name, status, description, url }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
       
        <h2 className={styles.name}>{name}</h2>

       
        <p className={styles.status}>{status}</p>

        <p className={styles.album}>Álbum: {albumNames[music.albumId]}</p>

       
        {description && <p className={styles.description}>{description}</p>}

       
        <Link href={`/musics/${id}`} className={styles.button}>
          Detalhes
        </Link>

        
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            ▶️ Ouvir no Spotify
          </a>
        )}
      </div>
    </div>
  );
}
