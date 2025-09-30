import Header from "@/components/Header";
import styles from "./page.module.css";

export default async function MusicDetails({ params }) {
  const { id } = params;

  let music = null;

  try {
    const res = await fetch(`http://localhost:5000/musics/${id}`);
    if (!res.ok) throw new Error("Erro ao buscar música");
    music = await res.json();
  } catch (error) {
    console.error("❌ Erro ao carregar música:", error.message);
  }

  if (!music) {
    return <p className={styles.notFound}>⚠️ Música não encontrada</p>;
  }

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.card}>
         
          <h1 className={styles.title}>{music.title}</h1>

         
          <p className={styles.description}>{music.story}</p>

        
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>Ano de lançamento</p>
              <p className={styles.infoValue}>{music.releaseYear}</p>
            </div>
            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>Duração</p>
              <p className={styles.infoValue}>{music.duration}</p>
            </div>
            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>Álbum</p>
              <p className={styles.infoValue}> {music.albumId}</p>
            </div>
          </div>

       
          <div className={styles.actions}>
            <a
              href={music.playbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              ▶️ Ouvir no Spotify
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}