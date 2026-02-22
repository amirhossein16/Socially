import { Button } from "./shared/ui/button/Button";

function App() {
  return (
    <div>
      <div className="p-10 bg-white space-x-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>
  );
}

export default App;
