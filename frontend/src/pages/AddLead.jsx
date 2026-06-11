import { useState } from "react";
import axios from "axios";

function AddLead() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://127.0.0.1:8000/api/add-lead/",
                formData
            );

            console.log(response.data);

            alert("Lead ajouté");

        } catch (error) {

            console.log(error);

        }

    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="name"
                placeholder="Nom"
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="text"
                name="company"
                placeholder="Entreprise"
                onChange={handleChange}
            />

            <br /><br />

            <textarea
                name="message"
                placeholder="Message"
                onChange={handleChange}
            />

            <br /><br />

            <button type="submit">
                Ajouter
            </button>

        </form>
    );
}

export default AddLead;