import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";

export default function DashboardPage() {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <div className="grid grid-cols-4 gap-4 mt-8">

            <div className="border rounded p-4">
              Total Asociatii
            </div>

            <div className="border rounded p-4">
              Vizite Azi
            </div>

            <div className="border rounded p-4">
              Vizite Saptamana
            </div>

            <div className="border rounded p-4">
              Restante
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}