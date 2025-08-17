import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import './App.css'

const App = () => {
  // define quantos flocos a ser gerado
  const snowflakes = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,         // posição horizontal (%)
    size: Math.random() * 8 + 4,       // tamanho entre 4px e 12px
    duration: Math.random() * 10 + 10, // duração da animação (10–20s)
    delay: Math.random() * 10          // atraso inicial (0–10s)
  }))

  return (
    <div className="App">
      {/* Flocos de neve */}
      <div className="snow-container">
        {snowflakes.map((flake) => (
          <span
            key={flake.id}
            className="snow"
            style={{
              left: `${flake.left}%`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`
            }}
          ></span>
        ))}
      </div>

      {/* Conteúdo */}
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
