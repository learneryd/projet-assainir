import React from "react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/custom/Navbar";

export default function PreventionPage() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex flex-col items-center ">
      <NavBar />
      <div className="w-full max-w-4xl">
        {/* Custom Arrow */}
        <div className="relative w-full h-3 mb-8">
          <img
            src="line.png"
            alt="Line"
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold text-center">
            If you are victims of cyberharassment :
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            arcu erat, ultricies non mi in, efficitur iaculis mauris. Phasellus
            scelerisque sem sit amet mi facilisis, non suscipit dolor blandit.
            Nulla sit amet rhoncus lectus. Curabitur volutpat, odio at molestie
            rutrum, tortor turpis maximus est, ut consectetur ante nibh eu sem.
            Aenean euismod libero eros, non molestie sapien viverra in. Proin in
            dolor in mi ultricies tempus id quis ex. Curabitur tellus nisl,
            accumsan vel elementum et, tincidunt eu quam. Integer tempor, sapien
            at blandit consequat, tellus ipsum pellentesque est, non interdum
            ligula magna in neque. Donec quis lacinia lectus. Nunc id magna
            lobortis, auctor augue et, semper tortor.
          </p>
          <p className="text-sm">
            Donec at sem orci. Suspendisse finibus fringilla enim, vulputate
            tempor nunc dictum et. Suspendisse dictum eu ante vitae convallis.
            Aliquam ac dolor ultrices, posuere nisi sit amet, lobortis nulla.
            Nunc eu augue non tortor bibendum tincidunt eu sed felis. Sed
            placerat mauris a lectus placerat maximus. Nullam mollis maximus
            diam in vestibulum. Pellentesque id ex magna. In convallis ex ac
            ligula feugiat fermentum. In suscipit ante sem, a semper enim
            sodales at. Vestibulum id felis dignissim, maximus arcu sit amet,
            bibendum felis.
          </p>
          <p className="text-sm">
            Quisque a urna ut odio ultrices viverra id ut felis. Vestibulum
            volutpat ex interdum rhoncus tempus. Maecenas tortor tellus, aliquam
            sit amet porta et, venenatis et lacus. In finibus placerat leo,
            vitae venenatis nibh egestas ut. Vivamus elementum at enim eget
            volutpat. Curabitur consequat ultrices sapien ut condimentum. Donec
            quis ante et dolor bibendum mollis ut id ligula.
          </p>
        </div>

        {/* Add Extension Button */}
        <div className="flex justify-end mt-8">
          <Button
            variant="ghost"
            className="text-sm flex items-center space-x-2"
          >
            <span>Add extension</span>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17289082814574612020193315472280-BkbGkRCyNsYYxhGcxvnzTAzHWGUlWi.png"
              alt="Chrome Extension Icon"
              className="w-6 h-6"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
