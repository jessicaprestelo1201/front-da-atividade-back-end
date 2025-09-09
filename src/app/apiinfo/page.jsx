import Link from "next/link";
import Header from "@/components/Header";
import styles from "./ApiInfo.module.css";

export default function ApiInfo() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>🖼️ Informações da API</h2>

        <div className={styles.card}>
          <p><strong>Nome da API:</strong> Studio Ghibli</p>
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
          <p className={styles.text}><strong>URL Base:</strong> https://localhost:5000</p>
          <p className={styles.text}><strong>Endpoint usado:</strong> /character</p>
          <p className={styles.text}><strong>Atributos retornados:</strong> id, name, status, species, image...</p>
          <p className={styles.description}>
            Essa API disponibiliza informações sobre os personagens, episódios e locais dos desenhos do Studio Ghibli.
          </p>

          {/* Botão para ir aos detalhes da música */}
          <Link href="/musics/details">
            <button className={styles.button}>
              🎵 Ver detalhes da música
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
