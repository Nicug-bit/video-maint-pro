"use client";

import { createAssociation }
from "@/actions/associationActions";

export default function AssociationForm() {

  return (
    <form
      action={createAssociation}
      className="space-y-4"
    >

      <input
        name="name"
        placeholder="Nume asociatie"
        className="border p-2 w-full"
        required
      />

      <input
        name="address"
        placeholder="Adresa"
        className="border p-2 w-full"
        required
      />

      <input
        name="sector"
        placeholder="Sector"
        className="border p-2 w-full"
      />

      <input
        name="contactPerson"
        placeholder="Persoana contact"
        className="border p-2 w-full"
      />

      <input
        name="phone"
        placeholder="Telefon"
        className="border p-2 w-full"
      />

      <input
        name="email"
        placeholder="Email"
        className="border p-2 w-full"
      />

      <select
        name="maintenanceType"
        className="border p-2 w-full"
      >
        <option value="LUNAR">
          Lunar
        </option>

        <option value="TRIMESTRIAL">
          Trimestrial
        </option>

        <option value="SEMESTRIAL">
          Semestrial
        </option>
      </select>

      <button
        className="
        bg-blue-600
        text-white
        px-4
        py-2
        rounded
        "
      >
        Salveaza
      </button>

    </form>
  );
}