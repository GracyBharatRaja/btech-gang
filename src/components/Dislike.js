import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config.js";

export default function DisLike({ id }) {
  const [count, setCount] = useState(0);

  const docRef = doc(db, "dislikes", id);

  useEffect(() => {
    async function fetchDislikes() {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCount(docSnap.data().count || 0);
      } else {
        await setDoc(docRef, { count: 0 });
      }
    }

    fetchDislikes();
  }, [id]);

  const handleClick = async () => {
    const newCount = count + 1;
    setCount(newCount);
    await updateDoc(docRef, { count: newCount });
  };

  return <button onClick={handleClick}>👎 Dislike {count}</button>;
}
