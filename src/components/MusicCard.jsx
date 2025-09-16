"use client";

import { useState, useEffect } from "react";

export default function MusicCard({ id, title, artist }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(id)) {
      const newFavorites = favorites.filter(favId => favId !== id);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}>
      <h3>{title}</h3>
      <p>{artist}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? "💔 Remover" : "❤️ Favoritar"}
      </button>
    </div>
  );
}
