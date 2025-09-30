import Image from "next/image";
import Header from "@/components/Header";
import styles from "./page.module.css";
import avatar from "../../public/image/avatar.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        
        <h2 className={styles.title}>3º Ano - 2TDS2</h2>
        <p className={styles.subtitle}>Escola: SESI Valinhos</p>
        <p className={styles.subtitleSpacing}>Aluno(a): Jéssica Prestelo</p>
        
        
        <div className={styles.avatarWrapper}>
          <Image 
            src={avatar} 
            alt="Minha foto"
            width={220}
            height={220}
            className={styles.avatar}
          />
          <div className={styles.avatarGlow}></div>
        </div>


<section className={styles.highlight}>
          <div className={styles.highlightContent}>
            <p className={styles.highlightText}>
              <strong>Lana Del Rey - "Born to Die"</strong><br/>
              A combinação perfeita de melancolia e beleza que tem sido minha trilha sonora constante.
            </p>
          </div>
        </section>

    
        

      </main>
    </div>
  );
}
