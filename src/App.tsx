import { Avatar } from "./shared/ui/avatar/Avatar";
import { Button } from "./shared/ui/button/Button";
import { Card } from "./shared/ui/card/Card";

function App() {
  return (
    <div className="p-10 space-y-6">
      <div className="p-10 space-x-4 flex items-center">
        <Avatar name="Farshad" />
        <Avatar size="sm" name="Ali" />
        <Avatar size="lg" name="Hossein" />
      </div>
      <Card>
        <h2 className="text-lg font-semibold mb-4">Welcome Back!</h2>
        <Button className="w-full mb-2">Log In</Button>
        <Button variant="secondary" className="w-full">
          Sign Up
        </Button>
      </Card>
    </div>
  );
}

export default App;
