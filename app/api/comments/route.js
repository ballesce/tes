import { db } from "@/firebase/config";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function GET() {
  const snapshot = await getDocs(collection(db, "comments"));
  const comments = snapshot.docs.map(doc => doc.data());
  return Response.json(comments);
}

export async function POST(request) {
  const data = await request.json();
  await addDoc(collection(db, "comments"), data);
  return Response.json({ success: true });
}
