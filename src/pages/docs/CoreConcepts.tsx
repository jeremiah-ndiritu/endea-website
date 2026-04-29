export default function CoreConcepts() {
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold text-text-h">Core Concepts</h1>

      <p className="text-text">
        Endea is not a UI framework or a typical data mocking library. It is a
        <span className="text-text-h"> behavior simulation engine</span> built
        around TypeScript structures.
      </p>

      {/* Concept 1 */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-text-h">
          1. Schema-First Simulation
        </h2>
        <p className="text-text">
          Everything in Endea starts with a schema — either inferred from an
          object or explicitly defined.
        </p>

        <div className="bg-code-bg border border-border p-3 rounded-lg font-mono text-sm text-text-h">
          endea(&#123; id: 1, name: "Kimani" &#125;)
        </div>

        <p className="text-text">
          That input is not treated as static data — it becomes a blueprint for
          generating realistic variations.
        </p>
      </section>

      {/* Concept 2 */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-text-h">
          2. entype() — Structured Intent
        </h2>
        <p className="text-text">
          The <code>entype()</code> function converts a structure into a
          transportable schema representation.
        </p>

        <p className="text-text">
          This is what allows Endea to move between local execution and backend
          simulation without losing structure.
        </p>

        <div className="bg-code-bg border border-border p-3 rounded-lg font-mono text-sm text-text-h">
          entype(obj) → Schema
        </div>
      </section>

      {/* Concept 3 */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-text-h">
          3. Intelligence Layer
        </h2>

        <p className="text-text">
          After schema generation, Endea applies an internal intelligence
          process that enriches and transforms data structures.
        </p>

        <div className="bg-code-bg border border-border p-3 rounded-lg font-mono text-sm text-text-h">
          intelligenceProcess(schema, options)
        </div>

        <p className="text-text">
          This is where realism happens — variations, structure consistency,
          nested relationships, and contextual data behavior.
        </p>
      </section>

      {/* Concept 4 */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-text-h">
          4. API Simulation Layer
        </h2>

        <p className="text-text">
          Endea can behave like a backend API using schema serialization.
        </p>

        <div className="bg-code-bg border border-border p-3 rounded-lg font-mono text-sm text-text-h">
          fetch(`${"{apiUrl}"}?schema=${"{urlschema(obj)}"}`)
        </div>

        <p className="text-text">
          This enables hybrid usage: local generation or remote simulation via a
          backend service.
        </p>
      </section>

      {/* Concept 5 */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-text-h">
          5. Type-Safe Output Contract
        </h2>

        <p className="text-text">
          Endea preserves TypeScript inference across its entire pipeline.
        </p>

        <div className="bg-code-bg border border-border p-3 rounded-lg font-mono text-sm text-text-h">
          Promise&lt;T[]&gt;
        </div>

        <p className="text-text">
          This means your input type directly influences your simulated output
          type — no runtime guessing.
        </p>
      </section>

      {/* Closing idea */}
      <div className="p-4 border border-accent-border bg-accent-bg rounded-xl">
        <p className="text-text-h font-medium">Mental model</p>
        <p className="text-text mt-2">
          You don’t generate mock data. You describe a system, and Endea
          simulates how that system behaves.
        </p>
      </div>
    </div>
  );
}
