import "./App.css";
import Logo from "./assets/Logo.png";
import Card from "./components/Card/Card";

import cardlogo1 from "./assets/CardLogo1.png";
import cardlogo2 from "./assets/CardLogo2.png";
import cardlogo3 from "./assets/CardLogo3.png";
import cardlogo4 from "./assets/CardLogo4.png";
import cardlogo5 from "./assets/CardLogo5.png";
import cardlogo6 from "./assets/CardLogo6.png";
import { useState } from "react";
import axios from "axios";
function App() {
  const [formData, setFormData] = useState({
    email: "",
    error: "",
    successMessage: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      email: e.target.value,
      error: "",
      successMessage: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Email validation
      if (!isValidEmail(formData.email)) {
        throw new Error("Invalid email format");
      }
      console.log(formData.email);

      const response = await axios.post("http://34.225.132.160:8002/api", {
        email: formData.email,
      });

      console.log(response.status + " holahola");
      if (response.status === 200) {
        setFormData((prevData) => ({
          ...prevData,
          successMessage: "Form submitted successfully",
          error: "",
        }));
      }
    } catch (error) {
      console.error(error.message);
      setFormData((prevData) => ({
        ...prevData,
        error: "email ending with @ez.works not allowed",
      }));
    }
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="App">
      <div className="formClass">
        <img className="logo" src={Logo} />

        <p className="title-text">Suite Of Business Support Services</p>

        <p className="subtitle-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed
        </p>

        <form className="emailBox" onSubmit={handleSubmit}>
          <input
            value={formData.email}
            type="email"
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          {formData.successMessage && (
            <p className="successMessage">{formData.successMessage}</p>
          )}
          {formData.error && <p className="errorMessage">{formData.error}</p>}
          <button className="contact-button" type="submit">
            Contact me
          </button>
        </form>
      </div>

      <div className="cardContainer">
        <Card
          logo={cardlogo2}
          title="Presentation Design"
          description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
        />
        <Card
          logo={cardlogo5}
          title="Audio - Visual Production"
          style={{ marginBottom: "0" }}
          description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
        />
        <Card
          logo={cardlogo4}
          title="Translation Services"
          description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
        />
        <Card
          logo={cardlogo6}
          title="Graphic Design"
          description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
        />
        <Card
          logo={cardlogo3}
          title="Research & Analytics"
          description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
        />
        <Card
          logo={cardlogo1}
          title="Data Processing"
          description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
        />
      </div>
    </div>
  );
}

export default App;
