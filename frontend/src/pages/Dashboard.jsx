import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [leads, setLeads] = useState([]);

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
        </div>
      ))}
    </>
  );
}

export default Dashboard;