'use client';

import { useState } from 'react';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import emailjs from 'emailjs-com';

export const ContactSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // Etat pour afficher/masquer le formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '', // Champ pour le motif
    honeypot: '', // Champ honeypot pour éviter les bots
  });
  const [isSpam, setIsSpam] = useState(false); // Vérification anti-spam
  const [formSent, setFormSent] = useState(false); // Afficher un message de confirmation après l'envoi

  const toggleFormVisibility = () => {
    setIsFormVisible((prevState) => !prevState); // Inverse l'état actuel pour afficher/masquer le formulaire
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Vérification du champ honeypot pour éviter les bots
    if (formData.honeypot) {
      setIsSpam(true); // Si le champ honeypot est rempli, il s'agit d'un spam
      return;
    }

    // Vérification des champs requis
    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      alert('Please fill in all fields');
      return;
    }

    // Si tout est valide, envoyer l'email via EmailJS
    emailjs.send('service_eruods7', 'template_eqp528a', formData, '_46XU3cq61Sm-ysnM')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormSent(true); // Afficher un message de confirmation
        setIsFormVisible(false); // Fermer le formulaire après soumission
      }, (error) => {
        console.log('FAILED...', error);
        alert('An error occurred. Please try again later.');
      });
  };

  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10" style={{
            backgroundImage: `url(${grainImage.src})`,
          }}></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Let&apos;s create something amazing together</h2>
              <p className="text-sm md:text-base mt-2">Ready to bring your next project to life? Let&apos;s connect and discuss how
                I can help you achieve your goals.
              </p>
            </div>
            <div>
            <button 
              onClick={toggleFormVisibility} 
              className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 
                        hover:bg-gray-700 hover:border-gray-700 transition-colors duration-200">
              <span className="font-semibold">Contact me</span>
              <ArrowUpRightIcon className="size-4" />
            </button>

            </div>
          </div>

          {/* Afficher le formulaire si l'état isFormVisible est vrai */}
          {isFormVisible && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Contact Form</h3>
              {isSpam && <p className="text-red-500">Your submission looks like spam. Please try again.</p>}
              {formSent && <p className="text-green-500">Your message has been sent successfully!</p>}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="px-4 py-2 border border-gray-300 rounded-xl"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="px-4 py-2 border border-gray-300 rounded-xl"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject of your message"
                    className="px-4 py-2 border border-gray-300 rounded-xl"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className="px-4 py-2 border border-gray-300 rounded-xl h-32"
                    required
                  />

                  <input 
                    type="text" 
                    name="honeypot" 
                    className="hidden" 
                    value={formData.honeypot} 
                    onChange={handleInputChange}
                    aria-hidden="true"
                  />

                  <button 
                    type="submit" 
                    className="bg-emerald-500 text-white px-6 py-2 rounded-xl mt-4 
                              hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-out">
                    Send Message
                  </button>

                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
