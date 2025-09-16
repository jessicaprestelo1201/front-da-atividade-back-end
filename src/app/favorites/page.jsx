"use client";

import { useEffect, useState } from "react";
import styles from "./favorites.module.css"; 
import Header from "@/components/Header";

const allMusics = [
  { id: 5, title: "Summertime Sadness", artist: "Lana Del Rey" },
  { id: 6, title: "West Coast", artist: "Lana Del Rey" },
  { id: 7, title: "Young and Beautiful", artist: "Lana Del Rey" },
  { id: 8, title: "Blue Jeans", artist: "Lana Del Rey" },
  { id: 9, title: "Video Games", artist: "Lana Del Rey" },
{ id: 10, title: "Ride", artist: "Lana Del Rey" },
  
];

export default function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favMusics = allMusics.filter((music) => storedFavorites.includes(music.id));
    setFavorites(favMusics);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Minhas Músicas Favoritas</h1>
      {favorites.length > 0 ? (
        <div className={styles.musicGrid}>
          {favorites.map((music) => (
            <div key={music.id} className={styles.musicCard}>
              <h3 className={styles.musicTitle}>{music.title}</h3>
              <p className={styles.info}>{music.artist}</p>
              <button
                className={styles.removeButton}
                onClick={() => {
                  const updatedFavorites = favorites.filter((fav) => fav.id !== music.id);
                  setFavorites(updatedFavorites);
                  localStorage.setItem(
                    "favorites",
                    JSON.stringify(updatedFavorites.map((m) => m.id))
                  );
                }}
              >
                💔 Remover
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.emptyMessage}>Nenhuma música favoritada ainda.</p>
      )}
    </div>
  );
}
