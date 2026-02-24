import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "Adhil Hameed",
    email: "adhilkhaliq@gmail.com",
    message: "Hey Adhil, I would like to connect with you!",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Message Sent 🚀");
  };

  return (
    <section className="section">
      <p className="command">adhil@devops:~$ contact --send</p>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <textarea
          placeholder="Message"
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;