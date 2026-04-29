const coreExports = [
  {
    name: "endea<T>(obj, options?)",
    description:
      "Main entry function. Takes a TypeScript object of type T and returns a simulated data array as T[].",
  },
  {
    name: "MockOptions",
    description:
      "Configuration layer for controlling count, latency, error rate, intelligence behavior, and output variation rules.",
  },
  {
    name: "Schema",
    description:
      "Internal representation of a parsed object structure used by the simulation engine.",
  },
  {
    name: "TypeOf",
    description:
      "Utility type for extracting inferred structure from given object.",
  },
  {
    name: "entype(obj)",
    description:
      "Converts an object into a transportable schema format used for both local and backend simulation.",
  },
  {
    name: "generateSchema(obj)",
    description: "Parses raw input into a structured schema representation.",
  },
  {
    name: "intelligenceProcess(schema, options)",
    description:
      "Core simulation engine that takes a schema and generates data based on it.",
  },
  {
    name: "schemaFromEntypeResult()",
    description: "Reconstructs schema definitions from entype-encoded results.",
  },
  {
    name: "urlschema(obj)",
    description:
      "Serializes schema into URL-safe format for backend API simulation. Basically TS types as passengers 😁",
  },
  {
    name: "default export: endea",
    description:
      "Primary API surface for generating simulated data from raw input.",
  },
];

export default function CoreExportsBlock() {
  return (
    <div className="bg-code-bg border border-border p-4 rounded-xl text-sm text-text overflow-x-auto">
      <h3 className="text-text-h font-semibold mb-3">Core Exports</h3>

      <ul className="space-y-3 font-mono">
        {coreExports.map((item) => (
          <li key={item.name}>
            <code className="text-text-h">{item.name}</code>
            <p className="text-text mt-1">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
