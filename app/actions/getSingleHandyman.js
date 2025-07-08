"use server";
import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getSingleHandyman(id) {
  try {
    const { databases } = await createAdminClient();

    // Fetch handyman
    const room = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_HANDYMAN,
      id
    );

    // Revalidate the cache for this path
    // revalidatePath('/', 'layout');

    return room;
  } catch (error) {
    console.log("Failed to get room", error);
    redirect("/error");
  }
}

export default getSingleHandyman;
