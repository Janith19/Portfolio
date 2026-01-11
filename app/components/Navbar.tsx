import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur border-b border-black/5">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="font-semibold tracking-tight hover:opacity-80 transition"
        >
          Janith<span className="text-gray-400">.</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm">
          {["Projects", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="
                relative
                text-gray-700
                hover:text-black
                transition
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-px
                after:w-0
                after:bg-black
                hover:after:w-full
                after:transition-all
              "
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
