import { db } from "@/firebase/config";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function GET() {
  const snapshot = await getDocs(collection(db, "ratings"));
  const ratings = snapshot.docs.map(doc => doc.data().rating);
  const total = ratings.length;
  const average = ratings.reduce((a, b) => a + b, 0) / total || 0;
  return Response.json({ average, total });
}

export async function POST(request) {
  const data = await request.json();
  await addDoc(collection(db, "ratings"), data);
  return Response.json({ success: true });
}
