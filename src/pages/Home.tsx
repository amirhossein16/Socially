import { WelcomeCard } from "../shared/components/WelcomeCard/WelcomeCard";

export function Home() {
  return (
    <div className="grid grid-cols-12 gap-6 py-10">
      {/* Left Sidebar */}
      <aside className="col-span-3">
        <WelcomeCard
          user={{
            name: "Farshad",
            email: "farshad@example.com",
          }}
          onSignOut={() => alert("Signed out")}
        />
      </aside>

      {/* Feed */}
      <main className="col-span-6">
        <div className="space-y-6">
          {/* PostCard later */}
          <div className="h-40 rounded-lg border border-border bg-card" />
          <div className="h-40 rounded-lg border border-border bg-card" />
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="col-span-3">
        <div className="h-60 rounded-lg border border-border bg-card" />
      </aside>
    </div>
  );
}
