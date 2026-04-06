import { Button } from "../components/UI/Button";

export default function Components() {
  return (
    <div className="p-10 max-w-4xl">
      <h2 className="mb-8">UI Components</h2>

      <section className="mb-12">
        <h3 className="text-sm text-text mb-4 font-mono">Buttons / Variants</h3>
        <div className="flex flex-wrap gap-4 p-8 border border-border rounded-2xl bg-bg shadow-shadow">
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary View</Button>
          <Button variant="outline">Outline Mode</Button>
          <Button variant="ghost">Ghost Link</Button>
        </div>
      </section>

      <section>
        <h3 className="text-sm text-text mb-4 font-mono">Feedback States</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-accent-bg border border-accent-border rounded-lg text-accent text-sm">
            Success: Mock data generated successfully.
          </div>
          <div className="p-4 bg-code-bg border border-border rounded-lg text-text-h text-sm">
            Info: Latency set to 200ms.
          </div>
        </div>
      </section>
    </div>
  );
}
