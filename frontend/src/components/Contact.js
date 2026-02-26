import './Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! I'll get back to you soon.");
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="section-header reveal">
        <span className="section-num">06.</span>
        <h2 className="section-title">Contact</h2>
        <div className="section-line" />
      </div>

      <div className="contact-inner reveal">
        <div className="contact-grid">
          <div className="contact-left">
            <h3 className="contact-headline">
              Let's build<br />
              <span className="outline">something</span><br />
              great.
            </h3>
            <p className="contact-sub">
              Open to full-time roles, freelance projects, and interesting
              collaborations. Let's talk about your next big idea.
            </p>
            <div className="contact-links">
              <a href="mailto:adhilkhaliq@gmail.com" className="contact-link">
                <span className="contact-link-icon">✉️</span>
                adhilkhaliq@gmail.com
              </a>
              <a href="https://github.com/Adhilhameed" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-icon">🐙</span>
                github.com/adhilhameed
              </a>
              <a href="https://linkedin.com/in/adhilhameed" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-icon">💼</span>
                linkedin.com/in/adhilhameed
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input className="form-input" type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input className="form-input" type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="btn-primary" style={{ cursor: 'none', border: 'none' }}>
              <span>Send Message</span><span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}