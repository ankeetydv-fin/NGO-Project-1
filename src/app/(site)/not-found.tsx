import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading text-primary mb-4">404</p>
      <h2 className="text-2xl font-bold font-heading text-text-dark mb-2">
        Page not found
      </h2>
      <p className="text-text-muted mb-6 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
