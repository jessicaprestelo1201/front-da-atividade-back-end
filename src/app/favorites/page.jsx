"use client";

import { useEffect, useState } from "react";
import styles from "./favorites.module.css"; 
import Header from "@/components/Header";

const allMusics = [
  { id: 3, title: "Video Games", artist: "Lana Del Rey" },
  { id: 4, title: "Summertime Sadness", artist: "Lana Del Rey" },
  { id: 5, title: "Born to Die", artist: "Lana Del Rey" },
  { id: 6, title: "West Coast", artist: "Lana Del Rey" },
  { id: 7, title: "Young and Beautiful", artist: "Lana Del Rey" },
  { id: 8, title: "Blue Jeans", artist: "Lana Del Rey" },
  { id: 14, title: "Ride", artist: "Lana Del Rey" },
  { id: 15, title: "National Anthem", artist: "Lana Del Rey" },
  { id: 16, title: "Carmen", artist: "Lana Del Rey" },
  { id: 17, title: "Off to the Races", artist: "Lana Del Rey" },
  { id: 18, title: "Lolita", artist: "Lana Del Rey" },
  { id: 19, title: "Shades of Cool", artist: "Lana Del Rey" },
  { id: 20, title: "Ultraviolence", artist: "Lana Del Rey" },
  { id: 21, title: "Brooklyn Baby", artist: "Lana Del Rey" },
  { id: 22, title: "Love", artist: "Lana Del Rey" },
  { id: 23, title: "Lust for Life", artist: "Lana Del Rey" },
  { id: 24, title: "Cherry", artist: "Lana Del Rey" },
  { id: 25, title: "White Mustang", artist: "Lana Del Rey" },
  { id: 26, title: "Mariners Apartment Complex", artist: "Lana Del Rey" },
  { id: 27, title: "Venice Bitch", artist: "Lana Del Rey" },
  { id: 28, title: "Doin' Time", artist: "Lana Del Rey" },
  { id: 29, title: "Hope Is a Dangerous Thing", artist: "Lana Del Rey" },
  { id: 30, title: "Let Me Love You Like a Woman", artist: "Lana Del Rey" },
  { id: 31, title: "Chemtrails over the Country Club", artist: "Lana Del Rey" },
  { id: 32, title: "White Dress", artist: "Lana Del Rey" },
  { id: 33, title: "Blue Banisters", artist: "Lana Del Rey" },
  { id: 34, title: "A&W", artist: "Lana Del Rey" },
  { id: 35, title: "The Grants", artist: "Lana Del Rey" },
  { id: 36, title: "Norman Fucking Rockwell", artist: "Lana Del Rey" },
{ id: 37, title: "Cinnamon Girl", artist: "Lana Del Rey" },
{ id: 38, title: "How to disappear", artist: "Lana Del Rey" },
{ id: 39, title: "The greatest", artist: "Lana Del Rey" },
{ id: 40, title: "California", artist: "Lana Del Rey" },
{ id: 41, title: "Tulsa Jesus Freak", artist: "Lana Del Rey" },
{ id: 42, title: "Dark But Just a Game", artist: "Lana Del Rey" },
{ id: 43, title: "Wild at Heart", artist: "Lana Del Rey" },
{ id: 44, title: "Not All Who Wander Are Lost", artist: "Lana Del Rey" },
{ id: 45, title: "Yosemite", artist: "Lana Del Rey" },
{ id: 46, title: "Dealer", artist: "Lana Del Rey" },
{ id: 47, title: "Thunder", artist: "Lana Del Rey" },
{ id: 48, title: "Living Legend", artist: "Lana Del Rey" },
{ id: 49, title: "Nectar of the Gods", artist: "Lana Del Rey" },
{ id: 50, title: "Beautiful", artist: "Lana Del Rey" },
{ id: 51, title: "Margaret", artist: "Lana Del Rey" }
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
