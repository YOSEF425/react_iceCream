

import React, { useState } from 'react';

export default function FavoriteColor() {
  const colors = ["Red", "Green", "Blue"];
  const [favorite, setFavorite] = useState("");

  return (
    <div>
      <h3>Pick your favorite color:</h3>

      {colors.map((color, i) => (
        <button key={i} onClick={() => setFavorite(color)}>
          {color}
        </button>
      ))}

      {favorite && <p>Your favorite color is: {favorite}</p>}
    </div>
  );
}
