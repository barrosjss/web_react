import React, { useState } from 'react';

function ColorGenerator() {
  const [hex, setHex] = useState("#ffffff");
  const randomizedHex = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor);
  }

  return (
    <div>
      <div style={{
        width: "auto",
        height: 200,
        borderRadius: 10,
        background: `${hex}`,
      }} />
      <div>
        <h2>{hex}</h2>
        <button type="button" className="btn btn-dark" onClick={randomizedHex}>Generar Color</button>
      </div>
    </div>
  )
}

export default ColorGenerator