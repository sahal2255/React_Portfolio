import React from "react";
import { useForm } from "react-hook-form";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-800 max-w-max px-6 py-12 mx-auto md:my-12 rounded-lg shadow-lg" id="contact">
      <Reveal>
        <div className="grid place-items-center">
          <p className="text-white font-bold text-3xl mb-6">Let’s Connect!</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-md"
            id="form"
          >
            <div className="mb-4">
              <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                {...register("name", { required: "Name is required" })}
                className={`w-full rounded-md border py-2 pl-4 pr-4 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-600" : "border-gray-600"}`}
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Your Email ..."
                {...register("email", { 
                  required: "Email is required", 
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Entered value does not match email format"
                  } 
                })}
                className={`w-full rounded-md border py-2 pl-4 pr-4 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-600" : "border-gray-600"}`}
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                id="textarea"
                cols="30"
                rows="4"
                placeholder="Your Message ..."
                {...register("message", { required: "Message is required" })}
                className={`w-full rounded-md border py-2 pl-4 pr-4 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? "border-red-600" : "border-gray-600"}`}
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md text-white font-semibold text-xl bg-blue-600 hover:bg-blue-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="flex mt-8 space-x-4 text-white">
            <a
              href="https://github.com/sahal2255"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-500 transition duration-300"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-500 transition duration-300"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
