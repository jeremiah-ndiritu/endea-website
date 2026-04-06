export default function Documentation (){return (
  <div className="flex flex-1 overflow-hidden">
    {/* Sidebar */}
    <aside className="w-64 border-r border-border p-6 hidden md:block">
      <div className="space-y-8">
        <div>
          <h4 className="text-xs uppercase tracking-widest text-text font-bold mb-4">
            Getting Started
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="text-accent font-medium">Introduction</li>
            <li className="text-text hover:text-text-h cursor-pointer">
              Installation
            </li>
            <li className="text-text hover:text-text-h cursor-pointer">
              Core Concepts
            </li>
          </ul>
        </div>
      </div>
    </aside>

    {/* Content */}
    <main className="flex-1 p-10 overflow-y-auto">
      <h2 className="text-text-h">Introduction</h2>
      <p className="text-text mt-4">
        Endea is a <code>TypeScript-first</code> simulator designed for teams
        that prioritize contract-driven development.
      </p>
      <div className="mt-8 p-6 bg-code-bg border border-border rounded-xl font-mono text-sm text-text-h">
        npm install endea
      </div>
    </main>
  </div>
)}
