import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const slideIn = (
    direction: string,
    type: string,
    delay: number,
    duration: number
  ) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        "service_kzfdhf8",
        "template_399lawl",
        {
          from_name: form.name,
          to_name: "Janhavi Patil",
          from_email: form.email,
          to_email: 'patil.janhavi1207@gmail.com',
          message: form.message,
        },
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        "fZasPYbx09uYCZUEB"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <SectionTitle title="Get it Touch with me" titlleNo="04" />

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-bodyColor py-4 px-6 border border-textGreen placeholder:text-secondary text-white rounded-xl outline-none  font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className=" py-4 px-6 bg-bodyColor border border-textGreen placeholder:text-secondary text-white rounded-xl outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className=" py-4 px-6 bg-bodyColor border border-textGreen placeholder:text-secondary text-white rounded-xl outline-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="py-3 px-8 rounded-3xl border border-textGreen border-b-4 outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
