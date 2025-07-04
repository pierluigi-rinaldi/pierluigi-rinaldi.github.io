import { useState } from "react";
import SectionContent from "./components/SectionContent";

const sections = {
  about: "About Me",
  publications: "Publications",
  cv: "CV",
};

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-gray-900 text-white flex flex-col justify-between p-6">
        <div className="text-3xl font-bold">Pierluigi Rinaldi</div>
        <div className="flex flex-col items-end space-y-4">
          {Object.entries(sections).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`text-lg hover:underline ${
                activeSection === key ? "underline" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="w-2/3 relative">
        <img
          src="/main-image.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10 overflow-y-auto">
          <SectionContent section={activeSection} />
        </div>
      </div>
    </div>
  );
}
