"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7;

export async function signUp(params : SignUpParams){
    const { uid , name , email} = params;

    try {
        const userRecord = await db.collection("users").doc(uid).get();
        if(userRecord.exists){
            return {
                success : false,
                message : "User already exists. Please sign in instead."
            }
        }
    } catch (error : any) {
        console.log("Error creating a user", error);

        if(error.code === "auth/email-already-exists"){
            return {
                success : false,
                message : "This email is already in use."
            }
        }

        await db.collection("users").doc(uid).set({
            name,
            email,
        });

        return {
            success : false,
            message : "Failed to create an account."
        }
    }
}


