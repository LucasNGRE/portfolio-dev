'use client';

import { useState } from 'react';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
    honeypot: '',
  });
  const [isSpam, setIsSpam] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [error, setError] = useState('');

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Validation de l'email
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Vérification de la honeypot (anti-spam)
    if (formData.honeypot) {
      setIsSpam(true);
      return;
    }

    // Vérification si tous les champs sont remplis
    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      setError('Please fill in all fields');
      setTimeout(() => setError(''), 3000);  // Effacer l'erreur après 3 secondes
      return;
    }

    // Vérification de l'email
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      setTimeout(() => setError(''), 3000);  // Effacer l'erreur après 3 secondes
      return;
    }

    try {
      console.log('Sending data:', formData);  // Debug: Inspect data before sending
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setFormSent(true);
        setIsFormVisible(false);

        // Effacer le message de succès après 3 secondes
        setTimeout(() => setFormSent(false), 3000);
      } else {
        setError(data.error || 'An error occurred.');
        setTimeout(() => setError(''), 3000);  // Effacer l'erreur après 3 secondes
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      setTimeout(() => setError(''), 3000);  // Effacer l'erreur après 3 secondes
    }
  };

  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Let&apos;s create something amazing together</h2>
              <p className="text-sm md:text-base mt-2">Let&apos;s connect and discuss your project.</p>
            </div>
            <button 
              onClick={toggleFormVisibility} 
              className="text-white bg-gray-900 px-6 h-12 rounded-xl border border-gray-900 hover:bg-gray-700 flex items-center gap-2"
            >
              <span className="font-semibold">Contact me</span>
              <ArrowUpRightIcon className="w-5 h-5" />
            </button>
          </div>

          {isFormVisible && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Contact Form</h3>
              {isSpam && <p className="text-red-500">Your submission looks like spam.</p>}
              {formSent && <p className="text-green-500">Your message has been sent!</p>}
              {error && <p className="text-red-500">{error}</p>}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder="Your Name" 
                  required 
                  className="px-4 py-2 border border-gray-300 rounded-xl" 
                />
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  placeholder="Your Email" 
                  required 
                  className="px-4 py-2 border border-gray-300 rounded-xl" 
                />
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  placeholder="Subject" 
                  required 
                  className="px-4 py-2 border border-gray-300 rounded-xl" 
                />
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder="Your Message" 
                  required 
                  className="px-4 py-2 border border-gray-300 rounded-xl h-32" 
                />
                <input 
                  type="text" 
                  name="honeypot" 
                  value={formData.honeypot} 
                  onChange={handleInputChange} 
                  className="hidden" 
                  aria-hidden="true" 
                />
                <button 
                  type="submit" 
                  className="bg-emerald-500 text-white px-6 py-2 rounded-xl hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
