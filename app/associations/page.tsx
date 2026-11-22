import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";

export default function AssociationsPage() {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold">
            Asociatii
          </h1>

        </div>

      </main>

    </div>
  );
}
