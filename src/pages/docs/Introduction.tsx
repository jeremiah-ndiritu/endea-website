export default function Introduction() {
  return (
    <>
      <h2 className="text-text-h">Introduction</h2>

      <p className="text-text mt-4">
        Endea is a <code>TypeScript-first</code> API simulator that lets you
        treat plain objects, schemas, and mock data as if they were living,
        evolving backend responses.
      </p>

      <p className="text-text mt-4">
        Instead of waiting for a backend to exist, you define a shape and
        immediately get back{" "}
        <span className="text-text-h">
          intelligent, enriched, and structured responses
        </span>{" "}
        that behave like a real API layer.
      </p>

      <p className="text-text mt-4">
        It’s not just mock data generation — Endea simulates how data *feels* in
        real systems: variation, structure, nested relations, and context-aware
        enhancements based on your input schema.
      </p>

      <div className="mt-8 p-6 bg-code-bg border border-border rounded-xl font-mono text-sm text-text-h">
        // Core idea
        <br />
        const result = await endea(&#123;
        <br />
        &nbsp;&nbsp;id: 1,
        <br />
        &nbsp;&nbsp;name: "Kimani"
        <br />
        &#125;)
      </div>

      <p className="text-text mt-6">
        Think of it as a{" "}
        <span className="text-text-h">backend behavior simulator</span>: you
        define structure → Endea returns realistic API-like output.
      </p>

      <p className="text-text mt-4">
        This makes it useful for frontend development, testing flows,
        prototyping systems, and simulating data-driven applications without
        relying on a real backend.
      </p>
    </>
  );
}
