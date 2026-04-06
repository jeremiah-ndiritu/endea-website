import { Play, RefreshCcw } from "lucide-react";
import { Button } from "../components/UI/Button";

export default function Playground() {
  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 border-t border-border">
      <div className="p-6 border-r border-border bg-bg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-mono text-text">schema.ts</span>
          <Button variant="secondary" size="sm" icon={Play}>
            Run Simulation
          </Button>
        </div>
        <pre className="text-sm font-mono text-text-h p-4 bg-code-bg rounded-lg">
          {`const UserSchema = {\n  id: types.uuid(),\n  name: types.name(),\n  active: types.boolean()\n};`}
        </pre>
      </div>

      <div className="p-6 bg-social-bg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-mono text-text">output.json</span>
          <RefreshCcw
            size={14}
            className="text-text cursor-pointer hover:rotate-180 transition-transform duration-500"
          />
        </div>
        <pre className="text-sm font-mono text-accent p-4">
          {`{\n  "id": "550e8400-e29b...",\n  "name": "Alex Rivera",\n  "active": true\n}`}
        </pre>
      </div>
    </div>
  );
}
