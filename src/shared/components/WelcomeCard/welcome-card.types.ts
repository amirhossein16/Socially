export interface WelcomeCardProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  onSignOut?: () => void;
}
