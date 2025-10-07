import Image from "next/image";
import Header from "@/components/Header";
import styles from "./aboutme.module.css";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>💋 Sobre Mim</h1>

        <div className={styles.card}>
          <div className={styles.avatarWrapper}>
            {/* Adicione sua imagem avatar aqui se quiser */}
          </div>

          <h2 className={styles.name}>Jéssica Prestelo</h2>
          
          <div className={styles.textSection}>
            <p className={styles.text}>
              Tenho 17 anos e estudo no SESI Valinhos, cursando o 3º ano do Ensino Médio.
            </p>
            <p className={styles.text}>
              Também faço Análise e Desenvolvimento de Sistemas no SENAI Valinhos.
            </p>
            <p className={styles.text}>
              Sou muito comunicativa, apaixonada por tecnologia e adoro desenvolver sistemas.
            </p>
          </div>

          <h3 className={styles.subtitle}>🎀 Curiosidades sobre mim:</h3>
          <ul className={styles.list}>
            <li>Participei da equipe <strong>Nitroneedles</strong> no F1 in Schools por 2 anos.</li>
            <li>Amo música, principalmente Lana Del Rey 🎶</li>
            <li>Tenho interesse em seguir carreira em Direito ou na área de Tecnologia</li>
          </ul>
        </div>
      </main>
    </div>
  );
}