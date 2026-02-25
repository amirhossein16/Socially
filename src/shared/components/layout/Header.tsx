import { Button } from "../../ui/button/Button";

interface HeaderProps {
  isAuthenticated?: boolean;
  onToggleTheme?: () => void;
}

export function Header({
  isAuthenticated = false,
  onToggleTheme,
}: HeaderProps) {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide">Socially</h1>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-md border border-border hover:bg-card transition-colors"
          >
            🌙
          </button>

          {/* Authenticated */}
          {isAuthenticated ? (
            <>
              <button className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                Home
              </button>
              <button className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                Notification
              </button>
              <button className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                Profile
              </button>
            </>
          ) : (
            <>
              <button className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                Home
              </button>
              <Button variant="secondary" size="sm">
                Sign In
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
