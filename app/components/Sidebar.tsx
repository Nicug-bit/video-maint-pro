import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-4">

      <h1 className="text-2xl font-bold mb-8">
        VideoMaint Pro
      </h1>

      <nav className="flex flex-col gap-4">

        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/associations">
          Asociatii
        </Link>

        <Link href="/calendar">
          Calendar
        </Link>

        <Link href="/map">
          Harta
        </Link>

      </nav>

    </aside>
  );
}
