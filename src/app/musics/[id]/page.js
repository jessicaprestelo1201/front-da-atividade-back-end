import Link from "next/link";
import styles from "./details.module.css";


const allMusics = [
  {
    id: "1",
    name: "Video Games",
    artist: "Lana Del Rey",
    year: 2011,
    duration: "4:42",
  },
  {
    id: "2",
    name: "Summertime Sadness",
    artist: "Lana Del Rey",
    year: 2012,
    duration: "4:25",
  },
  {
    id: "3",
    name: "West Coast",
    artist: "Lana Del Rey",
    year: 2014,
    duration: "4:16",
  },
];

export default function MusicDetails({ params }) {
 
  const music = allMusics.find((m) => m.id === params.id);

  if (!music) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Música não encontrada ❌</h1>
        <Link href="/musics" className={styles.backButton}>
          ⬅ Voltar para lista
        </Link>
      </div>
    );
  }

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
