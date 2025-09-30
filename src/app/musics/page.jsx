"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./page.module.css";
import Header from "@/components/Header";

const MusicList = () => {
  const url = "http://localhost:5000/musics";

  const [musics, setMusics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  
  useEffect(() => {
    const fetchMusics = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setMusics(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar músicas na API:", error);
        setError("Não foi possível carregar as músicas. Tente novamente mais tarde.");
        setLoading(false);
      }
    };
    fetchMusics();
  }, []);

  
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  
  const toggleFavorite = (id) => {
    let updatedFavorites;
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId) => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return <div className={styles.loading}>Carregando músicas...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Músicas da Lana Del Rey</h1>
      <div className={styles.musicGrid}>
        {musics.map((music) => (
          <div key={music.id} className={styles.musicCard}>
            <div className={styles.content}>
              <h2 className={styles.musicTitle}>{music.title}</h2>

              <p className={styles.info}>
                {music.releaseYear} • {music.duration}
              </p>

              <p className={styles.story}>{music.story}</p>

              <p className={styles.album}>Álbum: #{music.albumId}</p>

              
              <a
                href={music.playbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                ▶️ Ouvir no Spotify
              </a>

              
              <Link href={`/musics/${music.id}`} className={styles.detailsButton}>
                🔎 Ver detalhes
              </Link>

             
              <button
                onClick={() => toggleFavorite(music.id)}
                className={styles.favoriteButton}
              >
                {favorites.includes(music.id) ? "💔 Remover dos Favoritos" : "❤️ Adicionar aos Favoritos"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicList;
