import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const { name, email, message } = formData;
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here using the formData state
        console.log(formData);
      };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {/* Contact Information */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact Information</h5>
              <p className="card-text">
                Address: 45 AK Greems Road, Nungambakkam,Chennai, Tamil Nadu,India
              </p>
              <p className="card-text">Phone: +91 93459 92436</p>
              <p className="card-text">Email: premiumfurnitures@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Get in Touch</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                   type="text"
                   className="form-control"
                   id="name"
                   placeholder="Enter your name"
                   value={name}
                   onChange={handleChange}
                 />

                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                     className="form-control"
                     id="message"
                     rows="3"
                     placeholder="Enter your message"
                     value={message}
                     onChange={handleChange}
                   ></textarea>

                </div>
                <button type="submit" className="btn btn-primary">
                   Submit
                 </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="col-md-6 mt-4 mt-md-0">
          <iframe
            title="grocery-map"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15733.119077276786!2d80.251919!3d13.0604221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e7fcf8469b%3A0x77b9788451f8f649!2sNungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1627411428029!5m2!1sen!2sin"

            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;