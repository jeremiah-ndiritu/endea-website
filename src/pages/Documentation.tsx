import { useState, type JSX } from "react";
import Introduction from "./docs/Introduction";
import Installation from "./docs/installation/Installation";
import CoreConcepts from "./docs/CoreConcepts";

type Section = {
  label: string;
  node: JSX.Element;
};

const sections: Section[] = [
  {
    label: "Introduction",
    node: <Introduction />,
  },
  {
    label: "Installation",
    node: <Installation />,
  },
  {
    label: "Core Concepts",
    node: <CoreConcepts />,
  },
];

export default function Documentation() {
  const [currentSection, setCurrentSection] = useState<Section>(sections[0]);

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border p-6 hidden md:block">
        <div className="space-y-8">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-text font-bold mb-4">
              Getting Started
            </h4>

            <ul className="space-y-3 text-sm">
              {sections.map((section) => (
                <li
                  key={section.label}
                  onClick={() => setCurrentSection(section)}
                  className={`cursor-pointer transition ${
                    currentSection.label === section.label
                      ? "text-accent font-medium"
                      : "text-text hover:text-text-h"
                  }`}
                >
                  {section.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10 overflow-y-auto">{currentSection.node}</main>
    </div>
  );
}
