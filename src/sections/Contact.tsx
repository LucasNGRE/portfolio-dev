"use client";

import { useState } from "react";
import { toast } from "sonner";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { useI18n } from "@/locales/client";

export const ContactSection = () => {
  const t = useI18n();

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    honeypot: "",
  });
  const [formCount, setFormCount] = useState(0);

  const toggleFormVisibility = () => setIsFormVisible(!isFormVisible);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      toast.error("🚨 Spam détecté !");
      return;
    }

    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      toast.error(t("contactSection.errors.required"));
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error(t("contactSection.errors.invalidEmail"));
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFormCount((c) => c + 1);
        toast.success(t("contactSection.success"));
        setIsFormVisible(false);

        if (formCount + 1 >= 3) {
          toast.warning(t("contactSection.warning"));
        }
      } else {
        toast.error(data.error || t("contactSection.errors.generic"));
      }
    } catch {
      toast.error(t("contactSection.errors.network"));
    }
  };

  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                {t("contactSection.title")}
              </h2>
              <p className="text-sm md:text-base mt-2">
                {t("contactSection.subtitle")}
              </p>
            </div>
            <button
              onClick={toggleFormVisibility}
              className="text-white bg-gray-900 px-6 h-12 rounded-xl border border-gray-900 hover:bg-gray-700 flex items-center gap-2"
            >
              <span className="font-semibold">{t("contactSection.button")}</span>
              <ArrowUpRightIcon className="w-5 h-5" />
            </button>
          </div>

          {isFormVisible && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">
                {t("contactSection.formTitle")}
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t("contactSection.name")}
                    required
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-xl"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("contactSection.email")}
                    required
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-xl"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={t("contactSection.subject")}
                  required
                  className="px-4 py-2 border border-gray-300 rounded-xl w-full md:w-1/2"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t("contactSection.message")}
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

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-white font-bold bg-black px-6 h-12 rounded-xl border border-black 
               hover:bg-gray-800 flex items-center justify-center gap-2 
               transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                  >
                    {t("contactSection.send")}
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
