import Link from "next/link";
import Head from "next/head";
import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <Head>
                <title>404 - Página não encontrada 👎</title>
            </Head>
            
            <h1 className={styles.title}>404 - Página não encontrada 👎</h1>
            
            <p className={styles.message}>
                Desculpe, não conseguimos encontrar o que você está procurando 🤷‍♂️.
            </p>
            
            <div className={styles.buttonContainer}>
                <Link href="/" className={styles.homeLink}>
                    Voltar para Home
                </Link>
            </div>
        </div>
    );
}