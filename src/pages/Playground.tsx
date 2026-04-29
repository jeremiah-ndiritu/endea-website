import { Play, RefreshCcw } from "lucide-react";
import { Button } from "../components/UI/Button";
import Editor, { type EditorProps } from "@monaco-editor/react";
import { useState } from "react";
import endea from "endea";

const defaultCode = `
// an object, an array, a string, or any primitive JS value

{
  id: 89,
  title: "Kimani"
}
`;

function parseInputCode(input = "") {
  // 1. remove comments
  const noComments = input.replace(/\/\/.*$/gm, "");

  // 2. trim
  const cleaned = noComments.trim();

  // 3. safely evaluate JS literal-like input
  return safeParse(cleaned);
}

function safeParse(str:string) {
  try {
    // Wrap in parentheses so objects/arrays evaluate correctly
    return new Function(`return (${str})`)();
  } catch {
    throw new Error("Invalid input format");
  }
}

export default function Playground() {
  const [code, setCode] = useState(defaultCode);

  const [output, setOutput] = useState(`{
  "id": "550e8400-e29b...",
  "name": "Alex Rivera",
  "active": true
}`);

  const handleMount: EditorProps["onMount"] = (editor, monaco) => {
    console.log("Editor: ", editor);
    console.log("Monaco: ", monaco);
  };

  const runSimulation = async () => {
    console.log("Running with code:", code);
    const result = await endea(parseInputCode(code)).then((r) =>
      JSON.stringify(r, null, 2),
    );
    setOutput(result);
    console.log("result: ", result);
  };

  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 border-t border-border">
      {/* LEFT: EDITOR */}
      <div className="p-6 border-r border-border bg-bg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-mono text-text">script.ts</span>
          <Button
            variant="secondary"
            size="sm"
            icon={Play}
            onClick={runSimulation}
          >
            Run Simulation
          </Button>
        </div>

        <div className="rounded-lg overflow-scroll border border-border">
          <Editor
            onMount={handleMount}
            height="300px"
            defaultLanguage="typescript"
            value={code}
            onChange={(value) => setCode(value || "")}
            theme="vs-dark"
            options={{
              fontSize: 14,
              fontFamily: "JetBrains Mono, monospace",
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
              padding: { top: 12 },
            }}
          />
        </div>
      </div>

      {/* RIGHT: OUTPUT */}
      <div className="p-6 bg-social-bg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-mono text-text">
            output <code>endea(obj)</code>
          </span>
          <RefreshCcw
            size={14}
            className="text-text cursor-pointer hover:rotate-180 transition-transform duration-500"
            onClick={() => runSimulation()}
          />
        </div>

        <pre className="text-sm font-mono text-accent p-4 bg-code-bg rounded-lg">
          {output}
        </pre>
      </div>
    </div>
  );
}
