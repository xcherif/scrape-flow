import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Don&apos;t worry, even the best websites have 404 errors sometimes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center ">
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-2 bg-primary text-white
          rounded-md transition-colors hover:bg-primary/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go back to home
          </Link>
        </div>
      </div>
      <footer className="mt-12 text-center">
        <p className="text-muted-foreground">
          If you believe this is an error, please contact our support team.
        </p>
      </footer>
    </div>
  );
}
export default NotFound;
