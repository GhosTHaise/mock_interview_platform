"use server";

import { db } from "@/firebase/admin";

export async function getInterviewsByUserId(userId: string): Promise<Interview[] | null> {
    const interviews = await db
        .collection("interviews")
        .where("userId", "==", userId)
        .orderBy("createdAt", "desc")
        .get();

    return interviews.docs.map((doc) => ({
        id : doc.id,
        ...doc.data()
    })) as Interview[];
}

 /**
 * Fetches the most recent finalized interviews, excluding those of a specified user.
 *
 * This asynchronous function queries the "interviews" collection in the database, 
 * ordering the results by their creation date in descending order. It filters out 
 * interviews associated with the provided user ID and limits the number of results 
 * based on the specified limit, defaulting to 20 if not provided.
 *
 * @param {GetLatestInterviewsParams} params - The parameters for fetching interviews.
 * @param {string} params.userId - The ID of the user whose interviews should be excluded from the results.
 * @param {number} [params.limit=20] - The maximum number of interviews to return; defaults to 20 if not specified.
 * @returns {Promise<Interview[] | null>} A promise that resolves to an array of Interview objects or null if no interviews are found.
 */
export async function getLatestInterviews(params: GetLatestInterviewsParams): Promise<Interview[] | null> {
    const { userId, limit = 20 } = params;

    const interviews = await db
        .collection("interviews")
        .orderBy("createdAt", "desc")
        .where("finalized", "==", true)
        .where("userId", "!=", userId)
        .limit(limit)
        .get();

    return interviews.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })) as Interview[];
}

export async function getInterviewById(id: string): Promise<Interview | null> {
    const interview = await db
        .collection("interviews")
        .doc(id)
        .get();

    return interview.data() as Interview | null;
}