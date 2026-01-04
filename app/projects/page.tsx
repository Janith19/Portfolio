import Link from "next/link";

export default function Projects() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="space-y-4">
        <Link href="#" className="block border p-4 rounded">
          <h2 className="font-semibold">Home Server Infrastructure</h2>
          <p className="text-sm text-gray-600">
            Secure self-hosted services with Docker
          </p>
        </Link>
      </div>
    </main>
  );
}
