import { useState, useEffect } from 'react'

function App() {
  const [status, setStatus] = useState("Recherche du backend...")

  // La fonction boguée pour tester Sentry
  const handleCrash = () => {
    const user = undefined;
    console.log(user.name);
  };

  useEffect(() => {
    // Appel vers ton API Django en utilisant la variable d'environnement
    fetch(`${import.meta.env.VITE_API_URL}/health/`)
      .then(response => response.json())
      .then(data => setStatus(data.message)) 
      .catch(error => setStatus("Impossible de joindre l'API"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: 'blue' }}>MOUNIRA IRATNI</h1>
      <p>Statut du backend : <strong>{status}</strong></p>
      
      {/* Le bouton Crash Test ajouté ici */}
      <button 
        onClick={handleCrash} 
        style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#ff4d4f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Crash Test
      </button>
    </div>
  )
}

export default App