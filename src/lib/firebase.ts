import { getApp, getApps, initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore/lite";

// Temporary: points at the existing Firebase project. Swap the NEXT_PUBLIC_FIREBASE_*
// values in .env.local (and on the host) when moving to the production account.
const app = getApps().length
  ? getApp()
  : initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    });

const db = getFirestore(app);

/** Single collection for everything coming from the website; `form` tells the sources apart. */
export const WEBSITE_COLLECTION = "chrysalis_website";

export function saveWebsiteSubmission(form: string, data: Record<string, unknown>) {
  return addDoc(collection(db, WEBSITE_COLLECTION), {
    form,
    ...data,
    createdAt: serverTimestamp(),
  });
}
