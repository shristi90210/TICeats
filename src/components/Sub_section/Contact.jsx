import React, { useState } from 'react';  

const Contact = () => {  
  const [name, setName] = useState('');  
  const [message, setMessage] = useState('');  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    alert('THANK YOU, Your message has been sent!', { name, message });  
    setName('');  
    setMessage('');  
  };  

  return (  
    <div className="contact-container">  
      <h1>Contact Us</h1>  
      <div className="contact-info">  
       <div className="left-cont">
       <h2>Get In Touch</h2>  
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin sem quis diam sodales, ac lobortis eros luctus.</p> </div> 
        <div className="right-cont">
        <p className='num'>📞 01-5971224</p>  
        <br /><p>सुर्य बिक्रुशन ज्वाली मार्क, Kathmandu 44600</p> </div> 
      </div>  
      <div className="contact-form">  
        <h2>Let Us Know</h2>  
        <div className="right-cont"></div>
        <form onSubmit={handleSubmit}>  
          <input  
            type="text"  
            placeholder="Name (Optional)"  
            value={name}  
            onChange={(e) => setName(e.target.value)}  
          />  
          <textarea  
            placeholder="Write a message"  
            value={message}  
            onChange={(e) => setMessage(e.target.value)}  
          ></textarea>  
          <button type="submit">Send</button>  
        </form>  
      </div>  
    </div>  
  );  
};  

export default Contact;