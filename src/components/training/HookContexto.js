import React from 'react'

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}

const ThemeContext = React.createContext(themes.light)

export default function HookContexto() {
  return (
    <div>
      <ThemeContext.Provider value={themes.dark}>
        <Tooldbar />
      </ThemeContext.Provider>
    </div>
  )
}

function Tooldbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

function ThemedButton(props) {
  const theme = React.useContext(ThemeContext)

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Yo estoy listo.
    </button>
  )
}