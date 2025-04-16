import Logo from "@/components/Logo";
import { Separator } from "@radix-ui/react-separator";
import { ThemeModeToggle } from "@/components/ThemeModeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-screen">
      {children}
      <Separator />
      <footer className="flex items-center justify-between p-4">
        <Logo iconSize={16} />
        <ThemeModeToggle />
      </footer>
    </div>
  );
}
