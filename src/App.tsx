import { useState } from "react";
import { Header } from "./shared/components/layout/Header";
import { HomeLayout } from "./shared/components/layout/HomeLayout";
import { WelcomeCard } from "./shared/components/WelcomeCard/WelcomeCard";
import { Card } from "./shared/ui/card/Card";
import { CreatePostCard } from "./features/post/components/CreatePostCard";
import { PostCard } from "./features/post/components/PostCard";

function App() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header isAuthenticated={false} onToggleTheme={toggleTheme} />

      <HomeLayout
        left={
          <WelcomeCard
            user={{
              name: "Farshad",
              email: "farshad@example.com",
            }}
            onSignOut={() => alert("Signed out")}
          />
        }
        center={
          <div className="space-y-6">
            <CreatePostCard />

            <PostCard
              author="Farshad"
              time="2h"
              content="This is my first post in Socially 🚀"
            />

            <PostCard
              author="Sara"
              time="5h"
              content="Design matters. Details matter."
            />
          </div>
        }
        right={
          <Card>
            <p className="text-text-secondary">Right Panel</p>
          </Card>
        }
      />
    </div>
  );
}

export default App;
