import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config.js";

export default function Like({ id }) {
  const [count, setCount] = useState(0);

  const docRef = doc(db, "likes", id);

  useEffect(() => {
    async function fetchLikes() {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCount(docSnap.data().count || 0);
      } else {
        await setDoc(docRef, { count: 0 });
      }
    }

    fetchLikes();
  }, [id]);

  const handleClick = async () => {
    const newCount = count + 1;
    setCount(newCount);
    await updateDoc(docRef, { count: newCount });
  };

  return <button onClick={handleClick}>👍 Like {count}</button>;
}
