import React, { useState, useEffect } from 'react';
import './local.css';

const ContactCard = () => {
  const [contacts, setContacts] = useState([]);
  const [languagePreference, setLanguagePreference] = useState("");
  const [locationPreference, setLocationPreference] = useState("");

  useEffect(() => {
    // Fetch data from API
    fetch('http://localhost:8000/api/users')
      .then(response => response.json())
      .then(data => {
        setContacts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures useEffect runs only once
  
  const handleLanguagePreferenceChange = (event) => {
    setLanguagePreference(event.target.value);
  };

  const handleLocationPreferenceChange = (event) => {
    setLocationPreference(event.target.value);
  };

  const filteredContacts = contacts.filter(contact => {
    const languageMatch = !languagePreference || (contact.language && contact.language.toLowerCase() === languagePreference.toLowerCase());
    const locationMatch = !locationPreference || (contact.location && contact.location.toLowerCase() === locationPreference.toLowerCase());
    return languageMatch && locationMatch;
  });
  return (
    <>
      <div>
        <label htmlFor="languagePreference">Language Preference:</label>
        <select id="languagePreference" value={languagePreference} onChange={handleLanguagePreferenceChange}>
          <option value="">All Languages</option>
          <option value="hindi">Hindi</option>
          <option value="english">English</option>
          
        </select>
      </div>
      <div>
        <label htmlFor="locationPreference">Location Preference:</label>
        <select id="locationPreference" value={locationPreference} onChange={handleLocationPreferenceChange}>
          <option value="">All Locations</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          {/* Add more options for other locations */}
        </select>
      </div>
      {filteredContacts.map(contact => (
        <div className="contact-card" key={contact.id}>
      <div className='div'>
      <div>
            <h2 className='name'>{contact.tour_guide_name}</h2>
            <p>Phone: {contact.mobile_number}</p>
            <p>Language: {contact.language}</p>
            <p>Location: {contact.location}</p>
            <button className='but'>Connect</button>
          </div>
          <div>
          <p className='comment'> {contact.review_comment}</p>
          <p className='ok'> {contact.review_title}</p>
          </div>
      </div>
      <img src={contact.tourist_guide_image_url } id='imggg' alt={contact.tour_guide_name} />
        </div>
      ))}
    </>
  );
};

export default ContactCard;
