import type { ReactNode } from "react";

interface HomeLayoutProps {
  left?: ReactNode;
  center: ReactNode;
  right?: ReactNode;
}

export function HomeLayout({ left, center, right }: HomeLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <aside className="col-span-3 hidden lg:block">{left}</aside>

        {/* Center Feed */}
        <main className="col-span-12 lg:col-span-6">{center}</main>

        {/* Right Sidebar */}
        <aside className="col-span-3 hidden lg:block">{right}</aside>
      </div>
    </div>
  );
}
