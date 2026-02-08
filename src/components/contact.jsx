import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { getString } from "../language/settings";
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {

    const VIEWPORT_LATE = { once: true, margin: "0px 0px -320px 0px" };
    const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
    const fadeUpDelay = (d) => ({ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: "easeOut" } } });


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
    e.preventDefault();

    if (status === "sending") return;
    setStatus("sending");

    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError(getString("contact.errors.required"));
      setStatus("error");
      return;
    }

    if (!emailRegex.test(email.trim())) {
      setError(getString("contact.errors.email"));
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message })
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setError(getString("contact.errors.server"));
      setStatus("error");
    }

    }

    return (
        <section id="contact">
        <div className="contact-container">

            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT_LATE}>{getString("contact.sectionTitle")}</motion.h2>

            <div className="contact-content">

            <motion.div className="contact-information" variants={fadeUpDelay(0.1)} initial="hidden" whileInView="show" viewport={VIEWPORT_LATE}>
                <motion.div className="contact-item" variants={fadeUpDelay(0.0)} initial="hidden" whileInView="show" viewport={VIEWPORT_LATE}>
                <h3>{getString("contact.phone")}</h3>
                <p>{getString("contact.phoneNumber")}</p>
                </motion.div>

                <motion.div className="contact-item" variants={fadeUpDelay(0.12)} initial="hidden" whileInView="show" viewport={VIEWPORT_LATE}>
                <h3>{getString("contact.email")}</h3>
                <p>{getString("contact.emailAddress")}</p>
                </motion.div>

                <motion.div className="contact-item" variants={fadeUpDelay(0.24)} initial="hidden" whileInView="show" viewport={VIEWPORT_LATE}>
                <h3>{getString("contact.socialmedia")}</h3>
                <ul>
                    {(getString("contact.facebook") !== "" && getString("contact.facebook") !== "#") ? <li><a href={getString("contact.facebook")} target="_blank" rel="noreferrer"><FaFacebookF /></a></li> : null}
                    {(getString("contact.linkedin") !== "" && getString("contact.linkedin") !== "#") ? <li><a href={getString("contact.linkedin")} target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li> : null}
                </ul>
                </motion.div>
            </motion.div>

            <motion.form className="contact-form" noValidate onSubmit={handleSubmit} variants={fadeUpDelay(0.18)} initial="hidden" whileInView="show" viewport={VIEWPORT_LATE}>
                
                {status === "error" ? <p className="error">{error}</p> : null}
                {status === "sent" ? <p className="success">{getString("contact.success.sent")}</p> : null}

                <div className="form-double-group">
                <div className="form-group">
                    <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="name">{getString("contact.form.namePlaceholder")}</label>
                </div>

                <div className="form-group">
                    <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="email">{getString("contact.form.emailPlaceholder")}</label>
                </div>
                </div>

                <div className="form-group">
                <input type="text" id="subject" name="subject" required value={subject} onChange={(e) => setSubject(e.target.value)} />
                <label htmlFor="subject">{getString("contact.form.subjectPlaceholder")}</label>
                </div>

                <div className="form-group">
                <textarea id="message" name="message" rows="5" required value={message} onChange={(e) => setMessage(e.target.value)} />
                <label htmlFor="message">{getString("contact.form.messagePlaceholder")}</label>
                </div>

                <button className="btn blur" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : getString("contact.form.submitButton")}</button>
            </motion.form>

            </div>
        </div>
        </section>
    );
}
export default Contact;