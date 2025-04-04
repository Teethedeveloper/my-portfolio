import React, { useState, useEffect, useRef } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navRef = useRef(null);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return /*#__PURE__*/(
    React.createElement("nav", {
      ref: navRef,
      className: "navbar navbar-expand-lg navbar-dark bg-dark position-relative",
      style: { height: isNavbarOpen ? 'auto' : '80px' } // Adjust height based on state
    }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/

    React.createElement("a", { className: "navbar-brand", href: "#home", style: { fontFamily: "Lobster" } }, "Eleton", /*#__PURE__*/
    React.createElement("span", { style: { fontFamily: "Parkinsans" } }, "M."), /*#__PURE__*/
    React.createElement("span", { style: { fontFamily: "Noto Emoji" } }, "\uD83D\uDCBB")), /*#__PURE__*/



    React.createElement("button", {
      className: "navbar-toggler",
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#navbarNav",
      "aria-controls": "navbarNav",
      "aria-expanded": isNavbarOpen ? 'true' : 'false',
      "aria-label": "Toggle navigation",
      onClick: toggleNavbar // Toggle the navbar state
      , "aria-live": "assertive" // Live region for screen readers
    }, /*#__PURE__*/
    React.createElement("span", { className: "navbar-toggler-icon" })), /*#__PURE__*/



    React.createElement("div", {
      className: `collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`,
      id: "navbarNav",
      role: "navigation" // ARIA role for the navbar
    }, /*#__PURE__*/
    React.createElement("ul", { className: "navbar-nav ms-auto" }, /*#__PURE__*/
    React.createElement("li", { className: "nav-item" }, /*#__PURE__*/
    React.createElement("a", { className: "nav-link", href: "#home", "aria-label": "Go to Home section" }, "Home")), /*#__PURE__*/

    React.createElement("li", { className: "nav-item" }, /*#__PURE__*/
    React.createElement("a", { className: "nav-link", href: "#about", "aria-label": "Go to About section" }, "About")), /*#__PURE__*/

    React.createElement("li", { className: "nav-item" }, /*#__PURE__*/
    React.createElement("a", { className: "nav-link", href: "#projects", "aria-label": "Go to Projects section" }, "Projects")), /*#__PURE__*/

    React.createElement("li", { className: "nav-item" }, /*#__PURE__*/
    React.createElement("a", { className: "nav-link", href: "#contact", "aria-label": "Go to Contact section" }, "Contact")))))));






}

function Home() {
  return /*#__PURE__*/(
    React.createElement("section", { className: "home-section position-relative py-5 bg-black", id: "home", style: { paddingTop: '350px' } }, /*#__PURE__*/
    React.createElement("div", { className: "container text-center" }, /*#__PURE__*/
    React.createElement("div", { className: "circle-container position-relative" }, /*#__PURE__*/
    React.createElement("img", { src: "https://res.cloudinary.com/dkv5wtwtd/image/upload/v1741264463/F1f6h9OWIAg6G53_b5cctf.jpg",
      alt: "Photo of Eleton, a Front-End Engineer",
      className: "hero-img", loading: "lazy" }), /*#__PURE__*/


    React.createElement("div", { className: "circle circle1" }, /*#__PURE__*/
    React.createElement("span", { className: "greeting-text" }, /*#__PURE__*/
    React.createElement("pre", { style: { fontFamily: "Parkinsans" } }, "Hi, I'm a"), /*#__PURE__*/
    React.createElement("div", { className: "words-container", style: { fontFamily: "Lobster" } }, /*#__PURE__*/
    React.createElement("span", { className: "word developer" }, "developer"), /*#__PURE__*/
    React.createElement("span", { className: "word designer" }, "designer"), /*#__PURE__*/
    React.createElement("span", { className: "word engineer" }, "engineer"), /*#__PURE__*/
    React.createElement("span", { className: "word creative" }, "creative")))), /*#__PURE__*/





    React.createElement("div", { className: "line line1" }), /*#__PURE__*/
    React.createElement("div", { className: "line line2" }), /*#__PURE__*/
    React.createElement("div", { className: "line line3" }), /*#__PURE__*/
    React.createElement("div", { className: "line line4" }), /*#__PURE__*/
    React.createElement("div", { className: "line line5" }), /*#__PURE__*/
    React.createElement("div", { className: "line line6" }))), /*#__PURE__*/




    React.createElement("div", { className: "cta-buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects", className: "cta-btn btn-primary", "aria-label": "See my projects" }, "See My Work"), /*#__PURE__*/
    React.createElement("a", { href: "https://drive.google.com/uc?export=download&id=1kBQu0s5o1EbNk9ywQFEqbkHvG2cUg0_s", className: "cta-btn btn-secondary", "aria-label": "Download my resume", target: "_blank", rel: "noopener noreferrer" }, "Download My Resume"))));



}

function About() {
  // State to track background color
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle background color
  const toggleBackgroundColor = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return /*#__PURE__*/(
    React.createElement("section", {
      id: "about",
      className: "py-5",
      style: {
        backgroundColor: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black' } }, /*#__PURE__*/



    React.createElement("div", { className: "about-toggle" }, /*#__PURE__*/
    React.createElement("button", {
      onClick: toggleBackgroundColor,
      className: "toggle-btn",
      "aria-label": "Toggle Background Color" },

    isDarkMode ? 'Light Mode' : 'Dark Mode')), /*#__PURE__*/



    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("header", { className: "text-center mb-4" }, /*#__PURE__*/
    React.createElement("h2", null, "About Me")), /*#__PURE__*/



    React.createElement("div", { className: "d-flex flex-column flex-md-row align-items-center mb-4 text-center text-md-start" }, /*#__PURE__*/
    React.createElement("div", { className: "about-image" }, /*#__PURE__*/
    React.createElement("img", { src: "https://res.cloudinary.com/dkv5wtwtd/image/upload/v1742222928/IMG_6157_b54k6n.jpg", alt: "A portrait of Eleton M, Front-End Engineer", className: "img-fluid rounded-circle",
      style: { height: '160px', width: "160px", objectFit: 'cover' }, loading: "lazy" })), /*#__PURE__*/

    React.createElement("p", { className: "about-description" }, "Front-End Engineer | Digital Innovator | Creative Problem Solver")), /*#__PURE__*/




    React.createElement("article", { className: "about-text" }, /*#__PURE__*/
    React.createElement("p", null, "I'm a self-taught front-end engineer with skills acquired from hands-on experience and a passionate interest in web development. My interest in design and problem-solving started as simple curiosity but later grew into an ardent commitment to developing simple, user-friendly web applications."), /*#__PURE__*/


    React.createElement("p", null, "With a strong understanding of HTML, CSS, JavaScript, React, Redux, Bootstrap, Sass, jQuery, and GitHub, I take pride in writing clean and efficient code. I am also committed to continuous learning of new tools and practices to enhance the quality of my work."), /*#__PURE__*/


    React.createElement("p", null, "Where there is no coding, I enjoy exploring new design trends, animations, and performance optimizations. My goal is to further develop myself as a programmer and to deliver projects with considerable impact.")))));






}

function Projects() {
  const projects = [
  {
    id: 1,
    title: 'E-commerce Landing Page',
    description:
    'Built with React, Redux, Bootstrap, and Sass. I created a dynamic, responsive e-commerce landing page where users can browse products, filter by categories, and manage their cart. Using React for interactivity and Redux for smooth state management, I ensured a seamless user experience from browsing to checkout.',
    link: 'https://teethedeveloper.github.io/e-commerce-landing-page.github.io/' },

  {
    id: 2,
    title: 'Random Quote Generator',
    description:
    'Built with jQuery, Sass, HTML, and CSS. I created a simple yet interactive random quote generator that displays quotes from a predefined array of objects. Using jQuery, I dynamically select a random quote and update the displayed text and author. The app also allows users to share the quote on Twitter.',
    link: 'https://teethedeveloper.github.io/random-quote-generator.github.io/' },

  {
    id: 3,
    title: '25+5 Clock (Pomodoro Timer)',
    description:
    'Built with React and CSS. This project implements a Pomodoro timer that helps users manage their work and break intervals efficiently. It includes a customizable session and break length, and it alerts users with a beep when the timer ends.',
    link: 'https://teethedeveloper.github.io/pomodoro-timer.github.io/' }];



  return /*#__PURE__*/(
    React.createElement("section", { id: "projects", className: "py-5" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-center mb-4" }, "My Projects"), /*#__PURE__*/
    React.createElement("div", { className: "row justify-content-center" },
    projects.map((project) => /*#__PURE__*/
    React.createElement("div", { key: project.id, className: "col-sm-6 col-md-4 mb-4" }, /*#__PURE__*/
    React.createElement("div", { className: "card shadow-sm" }, /*#__PURE__*/
    React.createElement("div", { className: "card-body" }, /*#__PURE__*/
    React.createElement("h5", { className: "card-title" }, project.id, ". ", project.title), /*#__PURE__*/
    React.createElement("p", { className: "card-text" }, project.description), /*#__PURE__*/
    React.createElement("a", {
      href: project.link,
      className: "btn btn-outline-primary view-project",
      target: "_blank",
      rel: "noopener noreferrer" }, "View Project")))))))));











}

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [messageStatus, setMessageStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailPattern.test(formData.email)) {
      setMessageStatus('error-email');
      return;
    }

    if (!formData.name.trim()) {
      setMessageStatus('error-name');
      return;
    }

    if (formData.name.trim().length < 3) {
      setMessageStatus('error-name-length');
      return;
    }

    if (!formData.message.trim()) {
      setMessageStatus('error-message');
      return;
    }

    if (formData.message.trim().length < 10) {
      setMessageStatus('error-message-length');
      return;
    }

    setIsLoading(true);
    setMessageStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xkgjnzpy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json' },

        body: JSON.stringify(formData) });


      if (response.ok) {
        setMessageStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setMessageStatus('error');
      }
    } catch {
      setMessageStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return /*#__PURE__*/(
    React.createElement("section", { id: "contact", className: "py-5 bg-light", style: { color: "black" } }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-center mb-4" }, "Contact Me"), /*#__PURE__*/
    React.createElement("form", { onSubmit: handleSubmit, className: "mx-auto", style: { maxWidth: '600px' }, noValidate: true }, /*#__PURE__*/
    React.createElement("div", { className: "mb-3" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "name", className: "form-label" }, "Name"), /*#__PURE__*/
    React.createElement("input", {
      id: "name",
      className: "form-control",
      name: "name",
      value: formData.name,
      onChange: handleChange,
      required: true,
      placeholder: "Your Name" }),

    messageStatus === 'error-name' && /*#__PURE__*/React.createElement("div", { className: "invalid-feedback" }, "\u274C Name cannot be empty."),
    messageStatus === 'error-name-length' && /*#__PURE__*/React.createElement("div", { className: "invalid-feedback" }, "\u274C Name must be at least 3 characters long.")), /*#__PURE__*/


    React.createElement("div", { className: "mb-3" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "email", className: "form-label" }, "Email"), /*#__PURE__*/
    React.createElement("input", {
      id: "email",
      className: "form-control",
      name: "email",
      value: formData.email,
      onChange: handleChange,
      required: true,
      placeholder: "Your Email",
      type: "email" }),

    messageStatus === 'error-email' && /*#__PURE__*/React.createElement("div", { className: "invalid-feedback" }, "\u274C Please provide a valid email address.")), /*#__PURE__*/


    React.createElement("div", { className: "mb-3" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "message", className: "form-label" }, "Message"), /*#__PURE__*/
    React.createElement("textarea", {
      id: "message",
      className: "form-control",
      name: "message",
      value: formData.message,
      onChange: handleChange,
      required: true,
      placeholder: "Your message here...",
      rows: "5" }),

    messageStatus === 'error-message' && /*#__PURE__*/React.createElement("div", { className: "invalid-feedback" }, "\u274C Message cannot be empty."),
    messageStatus === 'error-message-length' && /*#__PURE__*/React.createElement("div", { className: "invalid-feedback" }, "\u274C Message must be at least 10 characters long.")), /*#__PURE__*/


    React.createElement("button", {
      type: "submit",
      className: "btn btn-primary w-100 send-button",
      disabled: isLoading,
      "aria-label": "Send your message",
      tabIndex: "0" },

    isLoading ? 'Sending...' : 'Send Message')), /*#__PURE__*/



    React.createElement("div", { className: "text-center mt-3", "aria-live": "polite" },
    messageStatus === 'success' && /*#__PURE__*/
    React.createElement("div", { className: "alert alert-success fade show", role: "alert" }, "\u2705 Your message has been sent successfully!"),



    messageStatus === 'error-email' && /*#__PURE__*/
    React.createElement("div", { className: "alert alert-danger fade show", role: "alert" }, "\u274C Please provide a valid email address."),



    messageStatus === 'error-name' && /*#__PURE__*/
    React.createElement("div", { className: "alert alert-danger fade show", role: "alert" }, "\u274C Name cannot be empty."),



    messageStatus === 'error-name-length' && /*#__PURE__*/
    React.createElement("div", { className: "alert alert-danger fade show", role: "alert" }, "\u274C Name must be at least 3 characters long."),



    messageStatus === 'error-message' && /*#__PURE__*/
    React.createElement("div", { className: "alert alert-danger fade show", role: "alert" }, "\u274C Message cannot be empty."),



    messageStatus === 'error-message-length' && /*#__PURE__*/
    React.createElement("div", { className: "alert alert-danger fade show", role: "alert" }, "\u274C Message must be at least 10 characters long."),



    messageStatus === 'error' && /*#__PURE__*/
    React.createElement("div", { className: "alert alert-danger fade show", role: "alert" }, "\u274C Something went wrong. Please try again later."))), /*#__PURE__*/






    React.createElement("div", { className: "social-icons" }, /*#__PURE__*/
    React.createElement("a", { href: "mailto:eleton@gmail.com", target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-envelope fa-2x" })), /*#__PURE__*/

    React.createElement("a", { href: "https://www.linkedin.com/in/eleton-masombuka-03b76b270", target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("i", { className: "fab fa-linkedin fa-2x" })), /*#__PURE__*/

    React.createElement("a", { href: "tel:+27671880015" }, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-phone fa-2x" })))));




}

function Footer() {
  return /*#__PURE__*/(
    React.createElement("footer", { className: "bg-dark text-white text-center py-3" }, /*#__PURE__*/
    React.createElement("p", { className: "mb-0" }, "\xA9 2025 Code By Eleton. All rights reserved.")));


}

function App() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(Navbar, null), /*#__PURE__*/
    React.createElement(Home, null), /*#__PURE__*/
    React.createElement(About, null), /*#__PURE__*/
    React.createElement(Projects, null), /*#__PURE__*/
    React.createElement(ContactForm, null), /*#__PURE__*/
    React.createElement(Footer, null)));


}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));