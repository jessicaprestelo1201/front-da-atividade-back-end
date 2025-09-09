import Header from "@/components/Header";
import styles from "./ApiInfo.module.css";

export default function ApiInfo() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>💋 Informações da API</h2>

        <div className={styles.card}>
          <p><strong>Nome da API:</strong> Lana Del Rey Musics API</p>
          
          <p className={styles.text}>
            <strong>Documentação:</strong>{" "}
            <a 
              href="http://localhost:5000"
              target="_blank" 
              className={styles.link}
            >
              Clique aqui
            </a>
          </p>

          <p className={styles.text}><strong>URL Base:</strong> http://localhost:5000</p>
          <p className={styles.text}><strong>Endpoint usado:</strong> /musics</p>
          <p className={styles.text}>
            <strong>Atributos retornados:</strong> id, title, duration, releaseYear, story, playbackUrl, albumId
          </p>

          <p className={styles.description}>
            Essa API disponibiliza informações sobre as músicas da Lana Del Rey, incluindo título,
            ano de lançamento, duração, álbum, história e link para ouvir no Spotify.
          </p>
        </div>
      </main>
    </div>
  );
}
