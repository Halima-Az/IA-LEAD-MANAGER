import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/leads/")
      .then((response) => {
        setLeads(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
const deleteLead = async(id)=>{
  const confirmDelete=window.confirm("are you sure you want to delete that lead")
  if(!confirmDelete){return;}
  try{

    await axios.delete(`http://127.0.0.1:8000/api/delete-lead/${id}/`)
    setLeads(
      leads.filter(
      lead=> lead.id!==id
    ))
  }
  catch (error){
    console.log(error)
  }
}  


  return (
    <>
      <div class="page-header">
        <h2>Leads Dashboard</h2>
        <p>All your captured leads in one place.</p>
      </div>
      <div class="table-wrapper">
        <table class="leads-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr>
                <td>
                    <div class="lead-name">
                        <div class="lead-avatar">{ lead.name.charAt(0) }</div>
                        { lead.name }
                    </div>
                </td>
                <td>
                    <a href="mailto:{{ lead.email }}" class="email-link">{lead.email }</a>
                </td>
                <td>
                    <span class="message-preview">{ lead.message }</span>
                </td>
                <td class="actions">
                  <button onClick={()=>deleteLead(lead.id)} class="btn-delete">Delete</button>
                  <button class="btn-update"><Link to={`/editLead/${lead.id}`}>Update</Link></button>
                    
                </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
