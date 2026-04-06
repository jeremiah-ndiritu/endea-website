import { Button } from "../components/UI/Button";
import { Rocket, Code2, ArrowRight } from "lucide-react";

export default function Home () {
  return <div className="flex flex-col items-center justify-center text-center py-24 px-6">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-bg border border-accent-border text-accent text-xs font-mono mb-6">
      <Rocket size={12} /> v0.1.0 is live
    </div>
    <h1 className="max-w-3xl leading-[1.1]">
      Simulate APIs with <span className="text-accent">Type-Safety</span>
    </h1>
    <p className="text-text text-lg max-w-2xl mb-10">
      Stop waiting for the backend. Endea generates realistic, schema-driven
      mock responses directly in your TypeScript frontend.
    </p>
    <div className="flex gap-4">
      <Button variant="primary" size="lg" icon={ArrowRight}>
        Get Started
      </Button>
      <Button variant="outline" size="lg" icon={Code2}>
        View Examples
      </Button>
    </div>
  </div>
};