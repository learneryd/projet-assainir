"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const tabss = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Verify",
      link: "/verify",
    },
    {
      name: "Prevention",
      link: "/prevention",
    },
    {
      name: "Profile",
      link: "/profile",
    },
  ];

  useEffect(() => {
    const path = window.location.pathname;
    const tab = tabss.find((tab) => tab.link === path);
    if (tab) {
      setActiveTab(tab.name);
    }
  }, []);

  return (
    <div className="w-full max-w-2xl">
      <div className="flex justify-center mb-6">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%201-rw4wNtoRLcElq4aWF5uUPgX21l8sjE.png"
          alt="BlackFilter Logo"
          className="h-20"
        />
      </div>

      <div className="flex justify-between mb-4">
        {tabss.map((tab) => (
          <Link
            href={tab.link}
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-1 rounded-full text-sm ${
              activeTab === tab.name ? "bg-blue-600" : "bg-gray-800"
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>

      <h1 className="text-lg font-normal text-center mb-4">
        Welcome to Black'Filter
      </h1>
    </div>
  );
};

export default NavBar;
