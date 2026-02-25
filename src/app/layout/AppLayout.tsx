import { Container } from "./Container";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Container>{children}</Container>
    </div>
  );
}
