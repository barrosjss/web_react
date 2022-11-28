import React, { useState, useEffect } from 'react'

export default function HookEfecto() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
    return () => {
      console.log('Cleanup')
    }
  })

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