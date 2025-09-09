import Link from "next/link";
import styles from "./details.module.css";

export default function MusicDetails({ params }) {
  // Aqui futuramente você pode buscar a música pelo ID
  const music = {
    id: params.id,
    name: "Song Example",
    artist: "Artist Name",
    year: 2021,
    duration: "3:45",
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎵 Detalhes da Música</h1>

      <p className={styles.info}>
        <span className={styles.label}>ID:</span> {music.id}
      </p>
      <p className={styles.info}>
        <span className={styles.label}>Nome:</span> {music.name}
      </p>
      <p className={styles.info}>
        <span className={styles.label}>Artista:</span> {music.artist}
      </p>
      <p className={styles.info}>
        <span className={styles.label}>Ano:</span> {music.year}
      </p>
      <p className={styles.info}>
        <span className={styles.label}>Duração:</span> {music.duration}
      </p>

      <Link href="/musics" className={styles.backButton}>
        ⬅ Voltar para lista
      </Link>
    </div>
  );
}
