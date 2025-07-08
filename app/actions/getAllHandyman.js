'use server'
import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getAllHandyman() {
    try {
        const { databases } = await createAdminClient();

        // Fetch handyman
        const { documents: handyman } = await databases.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
          process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_HANDYMAN
        );

        // Revalidate the cache for this path
        // revalidatePath('/', 'layout');

        return handyman

    }catch (error) {
        console.log('Failed to get handyman', error);
        redirect('/error')

    }
}

export default getAllHandyman;