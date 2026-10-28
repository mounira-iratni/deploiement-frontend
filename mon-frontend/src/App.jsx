import { useState, useEffect } from 'react'

function App() {
  const [status, setStatus] = useState("Recherche du backend...")

  useEffect(() => {
    // Appel vers ton API Django en utilisant la variable d'environnement
    fetch(`${import.meta.env.VITE_API_URL}/health/`)
      .then(response => response.json())
      .then(data => setStatus(data.message)) // Affiche "API is healthy" si ça marche
      .catch(error => setStatus("Impossible de joindre l'API"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Mon Frontend React</h1>
      <p>Statut du backend : <strong>{status}</strong></p>
    </div>
  )
}

export default App