import Header from "@/components/Header";
import styles from "./page.module.css";

export default async function FilmDetails({ params }) {
  const { id } = params;

  let film = null;

  try {
    const res = await fetch(`https://ghibliapi.vercel.app/films/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Erro ao buscar filme");
    film = await res.json();
  } catch (error) {
    console.error("❌ Erro ao carregar filme:", error.message);
  }

  if (!film) {
    return <p className={styles.notFound}>⚠️ Filme não encontrado</p>;
  }

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>{film.title}</h1>
          <p className={styles.description}>{film.description}</p>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>Diretor</p>
              <p className={styles.infoValue}>{film.director}</p>
            </div>
            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>Produtor</p>
              <p className={styles.infoValue}>{film.producer}</p>
            </div>
            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>Ano de lançamento</p>
              <p className={styles.infoValue}>{film.release_date}</p>
            </div>
            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>Duração</p>
              <p className={styles.infoValue}>{film.running_time} min</p>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tagYellow}>Aventura</span>
            <span className={styles.tagTeal}>Fantasia</span>
            <span className={styles.tagPink}>Animação</span>
          </div>
        </div>
      </main>
    </div>
  );
}
