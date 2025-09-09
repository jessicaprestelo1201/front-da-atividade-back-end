import Header from "@/components/Header";
import Card from "@/components/Card";
import styles from "./page.module.css";

export default async function Characters() {
  let films = [];

  try {
    const res = await fetch("https://ghibliapi.vercel.app/films", { cache: "no-store" });
    if (!res.ok) throw new Error("Erro ao buscar dados da API");

    const data = await res.json();
    films = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("❌ Erro ao carregar filmes:", error.message);
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>🎥🌊 Filmes do Studio Ghibli</h2>
        {films.length > 0 ? (
          <div className={styles.grid}>
            {films.map((film) => (
              <Card
                key={film.id}
                id={film.id}
                name={film.title}                /* ajustado */
                image={film.movie_banner || ""} /* opcional, se existir */
                status={film.release_date}       /* ajustado */
              />
            ))}
          </div>
        ) : (
          <p className={styles.error}>
            ⚠️ Não foi possível carregar os filmes. Tente novamente mais tarde.
          </p>
        )}
      </main>
    </div>
  );
}
