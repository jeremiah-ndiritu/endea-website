import { useState } from "react";
import CoreExportsBlock from "./CoreExportsBlock";

export default function Installation() {
  const [pkg, setPkg] = useState<"npm" | "yarn" | "pnpm">("npm");

  const installCmd = {
    npm: "npm install endea",
    yarn: "yarn add endea",
    pnpm: "pnpm add endea",
  };

  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold text-text-h">Installation</h1>

      <p className="text-text">
        Install Endea using your preferred package manager. It works anywhere
        Node.js runs — no backend setup required.
      </p>

      {/* Package manager selector */}
      <div className="flex gap-2 border border-border rounded-lg p-2 w-fit bg-surface-raised">
        {(["npm", "yarn", "pnpm"] as const).map((p) => (
          <button
            key={p}
            onClick={() => setPkg(p)}
            className={`px-3 py-1 rounded-md text-sm transition ${
              pkg === p
                ? "bg-accent-bg text-text-h border border-accent-border"
                : "text-text hover:text-text-h"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Install command */}
      <div className="bg-code-bg border border-border p-4 rounded-xl font-mono text-sm text-text-h">
        {installCmd[pkg]}
      </div>

      {/* Core API surface */}
      <div className="mt-10 space-y-4">
        <h2 className="text-text-h text-xl font-semibold">Core API Surface</h2>

        <p className="text-text">
          Endea exposes a small but powerful API for schema-driven simulation.
        </p>

        <CoreExportsBlock/>
      </div>

      {/* Backend architecture */}
      <div className="space-y-3">
        <h2 className="text-text-h text-xl font-semibold">
          How Endea works under the hood
        </h2>

        <p className="text-text">
          Endea is not just a local utility — it can also operate through a
          backend simulation layer.
        </p>

        <p className="text-text">
          The <code>urlschema()</code> function is used to describe and
          serialize schemas that can be sent to a backend API for remote
          simulation.
        </p>

        <div className="bg-code-bg border border-border p-4 rounded-xl font-mono text-sm text-text-h">
          {`fetch(\`\${apiUrl}?schema=\${urlschema(obj)}\`)`}
        </div>

        <p className="text-text">
          This allows Endea to act like a hybrid system: local intelligence +
          optional backend-powered generation.
        </p>
      </div>

      {/* Concept note */}
      <div className="p-4 border border-accent-border bg-accent-bg rounded-xl">
        <p className="text-text-h font-medium">Key idea</p>
        <p className="text-text mt-2">
          You don’t “fetch data” from Endea — you describe data behavior, and
          Endea generates it.
        </p>
      </div>
    </div>
  );
}
