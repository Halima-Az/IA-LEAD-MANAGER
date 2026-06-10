import { useState,useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [leads, setLeads] = useState([])

  useEffect(() => {

    axios.get("http://127.0.0.1:8000/api/leads/")
      .then((response) => {
        setLeads(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <>
      <h1>Liste des Leads</h1>

      {leads.map((lead) => (
        <div key={lead.id}>
          <h3>{lead.name}</h3>
          <p>{lead.email}</p>
          <hr />
        </div>
      ))}
    </>
  );
}
export default App
