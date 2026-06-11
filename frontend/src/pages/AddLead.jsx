import { useState } from "react";
import axios from "axios";

function AddLead() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/add-lead/",
        formData,
      );

      console.log(response.data);

      alert("Lead ajouté");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="page-header">
        <h2>Add a Lead</h2>
        <p>Fill in the details below to register a new lead.</p>
      </div>
      <div className="container">
        <div class="form-card">
          <h1>New Lead </h1>
          <p class="subtitle">
            Enter contact information and an optional message.
          </p>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nom"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="company"
                placeholder="Entreprise"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <textarea
                name="message"
                placeholder="Message"
                onChange={handleChange}
              />
            </div>

            <button type="submit" class="btn-submit">
              Ajouter
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddLead;
