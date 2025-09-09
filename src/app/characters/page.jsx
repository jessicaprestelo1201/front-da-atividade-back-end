import Header from "@/components/Header";
import Card from "@/components/Card";
import styles from "./page.module.css";

export default async function Characters() {
  let musics = [];

  try {
    const res = await fetch("http://localhost:5000/musics", { cache: "no-store" });
    if (!res.ok) throw new Error("Erro ao buscar músicas da API");

    const data = await res.json();
    musics = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("❌ Erro ao carregar músicas:", error.message);
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>💋 Músicas da Lana Del Rey</h2>
        {musics.length > 0 ? (
          <div className={styles.grid}>
            {musics.map((music) => (
              <Card
                key={music.id}
                id={music.id}
                name={music.title}            
                status={`${music.releaseYear} • ${music.duration}`} 
                image={""}                     
                description={music.story}      
                url={music.playbackUrl}       
              />
            ))}
          </div>
        ) : (
          <p className={styles.error}>
            ⚠️ Não foi possível carregar as músicas. Tente novamente mais tarde.
          </p>
        )}
      </main>
    </div>
  );
}
