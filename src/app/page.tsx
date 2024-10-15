"use client";

import NavBar from "@/components/custom/Navbar";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex flex-col items-center">
      <NavBar />
      <div className="">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nYcKBKqVRGhxa2zgExjWgCxc9bwI5R.png"
          alt="YouTube Play Button"
          className="cursor-pointer"
        />
      </div>

      <div className="flex justify-center items-center mt-4">
        <div>
          <span>Add extension</span>
          <button className="flex items-center ">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17289082814574612020193315472280-BkbGkRCyNsYYxhGcxvnzTAzHWGUlWi.png"
              alt="Chrome Extension Icon"
              className="w-20 h-20"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
