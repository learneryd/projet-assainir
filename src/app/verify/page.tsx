"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NavBar from "@/components/custom/Navbar";

export default function VerifyPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    name: "",
    birthday: "",
    email: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    twitter: "",
    linkedin: "",
    whatsapp: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("verifyFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("verifyFormData", JSON.stringify(formData));
    alert("Form data saved to localStorage!");
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex flex-col items-center">
      <NavBar />
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-semibold text-center mb-8">
          How to verify ?
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-8">
          {/* Informations */}
          <div>
            <h2 className="text-xl mb-4">Informations</h2>
            <div className="space-y-4">
              <Input
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="date"
                name="birthday"
                placeholder="Birthday"
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="email"
                name="email"
                placeholder="email"
                onChange={handleInputChange}
                className="text-black"
              />
            </div>
          </div>

          {/* Documents */}
          <div>
            <h2 className="text-xl mb-4">Documents</h2>
            <p className="text-sm mb-4">
              Click to download your ID or drop it here
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17289130946447277976658971283617-J9Z8B42fM0RLR9pH1EmO9nG4DvboRA.png"
                alt="Document Upload"
              />
            </div>
          </div>

          {/* Social media */}
          <div>
            <h2 className="text-xl mb-4">Social media</h2>
            <div className="space-y-4">
              <Input
                type="text"
                name="facebook"
                placeholder="Facebook"
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="text"
                name="instagram"
                placeholder="Instagram"
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="text"
                name="tiktok"
                placeholder="TikTok"
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="text"
                name="twitter"
                placeholder="X / Twitter"
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="text"
                name="linkedin"
                placeholder="LinkedIn"
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="text"
                name="whatsapp"
                placeholder="WhatsApp"
                onChange={handleInputChange}
                className="text-black"
              />
            </div>
          </div>
        </form>

        <p className="text-sm text-gray-400 mt-6">
          By clicking on "Confirm" I accept the terms and conditions of use and
          I have read the Black'Filter confidentiality policy.
        </p>

        <div className="flex justify-between items-center">
          <Button
            onClick={handleSubmit}
            className="px-8 py-2 bg-gray-800 rounded-full"
          >
            Confirm
          </Button>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Add extension</span>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17289082814574612020193315472280-BkbGkRCyNsYYxhGcxvnzTAzHWGUlWi.png"
              alt="Chrome Extension Icon"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
