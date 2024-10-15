"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NavBar from "@/components/custom/Navbar";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    name: "",
    birthday: "",
    email: "",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    tiktok: "",
    whatsapp: "",
    verificationFile: "",
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
    alert("Profile data saved!");
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex flex-col items-center ">
      <NavBar />
      <div className="w-full max-w-5xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-8">
          {/* Informations */}
          <div>
            <h2 className="text-xl mb-4">Informations</h2>
            <div className="space-y-4">
              <Input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="date"
                name="birthday"
                placeholder="Birthday"
                value={formData.birthday}
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleInputChange}
                className="text-black"
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
                value={formData.facebook}
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="text"
                name="instagram"
                placeholder="Instagram"
                value={formData.instagram}
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="text"
                name="twitter"
                placeholder="X / Twitter"
                value={formData.twitter}
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="text"
                name="linkedin"
                placeholder="LinkedIn"
                value={formData.linkedin}
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="text"
                name="tiktok"
                placeholder="TikTok"
                value={formData.tiktok}
                onChange={handleInputChange}
                className="text-black"
              />
              <Input
                type="text"
                name="whatsapp"
                placeholder="WhatsApp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                className="text-black"
              />
            </div>
          </div>

          {/* Verification */}
          <div>
            <h2 className="text-xl mb-4">Verification</h2>
            <div className="flex items-center space-x-2 mb-4">
              <svg
                className="w-8 h-8 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              </svg>
              <span>{formData.verificationFile || "ID_Name_FName.pdf"}</span>
            </div>
            <Input
              type="file"
              name="verificationFile"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setFormData((prevData) => ({
                    ...prevData,
                    verificationFile: file.name,
                  }));
                }
              }}
              className="hidden"
              id="verificationFile"
            />
            <label
              htmlFor="verificationFile"
              className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Upload New File
            </label>
          </div>
        </form>

        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={handleSubmit}
            className="px-8 py-2 bg-gray-800 rounded-full"
          >
            Save
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
