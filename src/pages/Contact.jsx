import React from "react";
import "../style/Contact.css"; // Import CSS file

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>

      {/* Address */}
      <p><strong>Address:</strong> 123 Luxury Street, Nairobi, Kenya</p>

      {/* Phone Number */}
      <p><strong>Phone:</strong> <a href="tel:+254712345678">+254 712 345 678</a></p>

      {/* Email Address */}
      <p><strong>Email:</strong> <a href="mailto:info@luxuryhotel.com">info@luxuryhotel.com</a></p>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Google Map Embed */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.06223417293!2d36.8219462!3d-1.2920655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLuxury%20Hotel!5e0!3m2!1sen!2ske!4v1647523780017"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://X.com" target="_blank" rel="noopener noreferrer">X</a>
      </div>
    </section>
  );
};

export default Contact;