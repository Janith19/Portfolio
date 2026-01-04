import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-5xl mx-auto px-6 py-4 flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
