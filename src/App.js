import './App.css';
import Logo from './assets/Logo.png';
import  Card from './components/Card/Card';


import cardlogo1 from './assets/CardLogo1.png';
import cardlogo2 from './assets/CardLogo2.png';
import cardlogo3 from './assets/CardLogo3.png';
import cardlogo4 from './assets/CardLogo4.png';
import cardlogo5 from './assets/CardLogo5.png';
import cardlogo6 from './assets/CardLogo6.png';
import { useState } from 'react';
import axios from 'axios';
function App() {

  const [formData, setFormData] = useState({
    
    email: '',
    error: '',
    successMessage: ''
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      email: e.target.value,
      error: '', 
      successMessage: '' 
    }));
   
    
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.email.trim()) {
        throw new Error('Name and email are required');
      }
      
      // Email validation
      // if (!isValidEmail(formData.email)) {
      //   throw new Error('response code 422');
      // }

      const response = await axios.post('http://34.225.132.160:8002/api', formData.email);

      if (response.status === 200) {
       
        setFormData((prevData) => ({
          ...prevData,
          successMessage: 'Form submitted successfully',
          error: ''
        }));
      }
    } catch (error) {
      if (error.response && error.response.status === 422 && error.response.data.message) {
        setFormData((prevData) => ({
          ...prevData,
          error: error.response.data.message
        }));
      } else {
        // Other errors
        setFormData((prevData) => ({
          ...prevData,
          error: error.message
        }));
      }
    }
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  return (
    <div className="App">
      <div className="formClass">
     
<img className = "logo" src = {Logo} />
     
     <div className = "title-text">
      <p >Suite Of Business Support Services</p>
     </div>
     <div className = "subtitle-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
     </div>
     <div className = "emailBox">
      <form onSubmit={handleSubmit}>
      <input value = {formData.email} type='email' onChange = {handleChange} placeholder="Email Address" required/>
      {formData.error && <div className="error">{formData.error}</div>}
      {formData.successMessage && <div className="success">{formData.successMessage}</div>}
      <button className = "contact-button" type='submit'>Contact me</button>
      </form>
     
     </div>
      </div>
     

     <div className = "cardContainer">
<Card logo={cardlogo1} title="Presentation Design" description= "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"/>
<Card logo={cardlogo2} title="Presentation Design" description= "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"/>
<Card logo={cardlogo3} title="Presentation Design" description= "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"/>
<Card logo={cardlogo4} title="Presentation Design" description= "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"/>
<Card logo={cardlogo5} title="Presentation Design" description= "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"/>
<Card logo={cardlogo6} title="Presentation Design" description= "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"/>


     </div>
     
     
     
    </div>
  );
}

export default App;
