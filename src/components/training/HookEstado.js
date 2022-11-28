import React, { useState } from 'react'

export default function HookEstado() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Has hecho click {count} veces.</p>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Hazme click!
      </button>
    </>
  );
}
