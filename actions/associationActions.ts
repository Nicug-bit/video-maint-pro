"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createAssociation(formData: FormData) {
  const name = formData.get("name") as string;
  const address = formData.get("address") as string;

  const sector = formData.get("sector") as string;

  const contactPerson =
    formData.get("contactPerson") as string;

  const phone =
    formData.get("phone") as string;

  const email =
    formData.get("email") as string;

  const maintenanceType =
    formData.get("maintenanceType") as string;

  await prisma.association.create({
    data: {
      name,
      address,
      sector,
      contactPerson,
      phone,
      email,
      maintenanceType,
    },
  });

  revalidatePath("/associations");
}
export async function updateAssociation(
  id: string,
  formData: FormData
) {
  await prisma.association.update({
    where: {
      id,
    },
    data: {
      name: formData.get("name") as string,

      address:
        formData.get("address") as string,

      sector:
        formData.get("sector") as string,

      contactPerson:
        formData.get("contactPerson") as string,

      phone:
        formData.get("phone") as string,

      email:
        formData.get("email") as string,

      maintenanceType:
        formData.get("maintenanceType") as string,
    },
  });

  revalidatePath("/associations");
}

export async function deleteAssociation(
  id: string
) {
  await prisma.association.delete({
    where: {
      id,
    },
  });

  revalidatePath("/associations");
}