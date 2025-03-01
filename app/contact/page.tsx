"use client";
import Loader from "@/components/loader";
import Fox from "@/components/models/Fox";
import useAlert from "@/hooks/useAlert";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";

type FormType = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const formRef = useRef<any>(null);
  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentAnimation, setCurrentAnimation] = useState<string>("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    // - simulate loading
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      showAlert({
        show: true,
        text: "Message send successfully!",
        type: "success",
      });
      setIsLoading(false);
      setCurrentAnimation("idle");
    }, 1000 * 5);
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };
  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            E-mail
            <input
              type="text"
              name="email"
              className="input"
              placeholder="John@email.com"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="input"
              placeholder="Let me know how can I help you?"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="">
        <Canvas
          style={{ width: "500px", height: "600px" }}
          camera={{
            position: [0, 1, 5],
            fov: 100,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default ContactPage;
