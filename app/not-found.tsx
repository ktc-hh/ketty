import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Page not found</h1>
      <Link href="/" className="text-blue-600 underline">Go back home</Link>
    </main>
  );
}
