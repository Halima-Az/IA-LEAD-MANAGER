import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditLead() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/get-lead/${id}/`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
        await axios.patch(`http://127.0.0.1:8000/api/update-lead/${id}/`,formData)
        alert('lead updated seccessufully :)')
        navigate("/")
    }
    catch (error){
        console.log(error)
    }
    
  }

  return (
    <>
      <div className="container">
        <div class="form-card">
          <h1>Update lead ({ id })</h1>
          <p class="subtitle">
            Enter contact information and an optional message.
          </p>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                name="phone"
                placeholder="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="company"
                placeholder="Entreprise"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" class="btn-submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditLead;
