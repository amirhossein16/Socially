import { Avatar } from "../../ui/avatar/Avatar";
import { Button } from "../../ui/button/Button";
import { Card } from "../../ui/card/Card";
import type { WelcomeCardProps } from "./welcome-card.types";

export function WelcomeCard({ user, onSignOut }: WelcomeCardProps) {
  return (
    <Card className="flex items-center justify-between p-6">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <Avatar size="lg" src={user.avatar} name={user.name} />

        <div>
          <p className="text-lg font-semibold text-text-primary">
            Welcome back, {user.name}
          </p>

          <p className="text-sm text-text-secondary">{user.email}</p>
        </div>
      </div>

      {/* Right Section */}
      <Button variant="outline" onClick={onSignOut}>
        Sign out
      </Button>
    </Card>
  );
}
