import Link from "next/link";
import Header from "@/components/Header";
import styles from "./ApiInfo.module.css";

export default function ApiInfo() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>💋🎟 Informações da API</h2>

        <div className={styles.card}>
          <p><strong>Nome da API:</strong> Lana Del Rey</p>
          <p className={styles.text}>
            <a 
              href="http://localhost:5000"
              target="_blank" 
              className={styles.link}
            >
            </a>
          </p>
          <p className={styles.text}><strong>URL Base:</strong> https://localhost:5000</p>
          <p className={styles.text}><strong>Endpoint usado:</strong> /musics</p>
          <p className={styles.text}><strong>Atributos retornados:</strong> id, name, status, species, image...</p>
          <p className={styles.description}>
            Essa API disponibiliza informações sobre as músicas do Lana Del Rey, como título, artista, álbum, descrição, URL Spotify, etc.
          </p>

          
        </div>
      </main>
    </div>
  );
}
