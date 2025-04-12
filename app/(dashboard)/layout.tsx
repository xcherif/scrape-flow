import DesktopSidebar from "@/components/Sidebar";
import { Separator } from "@/components/ui/separator";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import { ThemeModeToggle } from "@/components/ThemeModeToggle";
import { SignedIn, UserButton } from "@clerk/nextjs";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex flex-col min-h-screen flex-1">
        <header className="flex items-center justify-between px-6 py-4 container h-[50px]">
          <BreadcrumbHeader />
          <div className="flex items-center gap-2">
            <ThemeModeToggle />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="flex-1 container py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
export default layout;
