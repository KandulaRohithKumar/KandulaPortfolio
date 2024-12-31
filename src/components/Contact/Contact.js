import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import Particle from "../Particle";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading toast
    const loadingToast = toast.loading('Sending message...');

    try {
      const response = await fetch('https://formspree.io/f/myzzgawd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Message sent successfully!', {
          duration: 5000,
          icon: '✅'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        duration: 5000,
        icon: '❌'
      });
      console.error('Form submission error:', error);
    } finally {
      toast.dismiss(loadingToast);
    }
  };

  return (
    <div>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            style: {
              background: '#198754',
            },
          },
          error: {
            style: {
              background: '#dc3545',
            },
          },
        }}
      />
      
      <Container 
        fluid 
        className="contact-section" 
        style={{ 
          minHeight: 'calc(100vh - 80px)',
          paddingTop: '80px',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          position: 'relative'
        }}
      >
        <Particle />
        
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="contact-heading mb-5">
            <strong className="purple">Contact Me</strong>
          </h1>
          <Row className="contact-content">
            <Col md={6} className="contact-form-section">
              <div 
                className="contact-form-wrapper" 
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  padding: '30px',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  border: '1px solid rgba(255, 255, 255, 0.18)'
                }}
              >
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Control 
                      type="text" 
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white'
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control 
                      type="email" 
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white'
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control 
                      as="textarea" 
                      name="message"
                      rows={5}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        resize: 'none'
                      }}
                    />
                  </Form.Group>

                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="w-100"
                    style={{
                      background: '#6a11cb',
                      border: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Send Message
                  </Button>
                </Form>
              </div>

              <div 
                className="contact-info mt-4" 
                style={{ 
                  color: 'white', 
                  textAlign: 'center' 
                }}
              >
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <FaMapMarkerAlt className="me-2 purple" />
                  <span>Poranki, Vijayawada, AndhraPradhesh, India </span>
                </div>
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <FaEnvelope className="me-2 purple" />
                  <span>kandularohithkumar999@gmail.com</span>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <FaPhone className="me-2 purple" />
                  <span>+91 7893417785</span>
                </div>
              </div>
            </Col>

            <Col md={6} className="map-section">
              <div 
                className="map-wrapper" 
                style={{
                  height: '500px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.823248422334!2d80.65623761487627!3d16.450263588636245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f93cd58c1e23%3A0xa18b98d7e89de99b!2sPoranki%2C%20Vijayawada%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Poranki, Vijayawada Location"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Contact;