"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold font-heading text-text-dark mb-2">
        Something went wrong
      </h2>
      <p className="text-text-muted mb-6 max-w-md">
        We encountered an error loading this page. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-btn-blue text-white font-medium rounded-lg hover:bg-btn-blue/90 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
