import { useState, useEffect } from "react";
import "./App.css";
import WelcomeCard from "./components/WelcomeCard.jsx";
import { db } from "./firebase-config.js"
import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

// 🔥 Like component with Firestore
function Like({ id }) {
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

// 🔥 DisLike component with Firestore
function DisLike({ id }) {
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

export default function App() {
  const people = [
    {
      name: "Aditya V",
      imageId: "Aditya",
      description: "He is into Android UI development with Kotlin",
    },
    {
      name: "Mohammad Azeem",
      imageId: "Azeem",
      description: "He is into Digital Marketing And SQL",
    },
    {
      name: "Bharat Gracy",
      imageId: "Bharat",
      description: "He is into ReactJS",
    },
    {
      name: "Chaitanya P",
      imageId: "Chaitanya",
      description: "He is into Kotlin backend",
    },
    {
      name: "Girish Kamble",
      imageId: "Girish",
      description: "He is in Java",
    },
    {
      name: "Ravi Kumar V",
      imageId: "Ravi",
      description: "He is into Android UI development",
    },
    {
      name: "Sai Krishna",
      imageId: "Sai_Krishna",
      description: "He is in Modi Schemes",
    },
    {
      name: "Sai Patil",
      imageId: "Sai_Patil",
      description: "He is a Big Business Man",
    },
    {
      name: "Silas G",
      imageId: "Silas",
      description: "He is in GCP, Data Engineer",
    },
    {
      name: "Uday M",
      imageId: "Uday",
      description: "He is a Product Manager",
    },
  ];

  return (
    <div className="app">
      <h1>JNTU Sultanpur Gang</h1>
      {people.map((person, index) => (
        <div className="card-wrapper" key={index}>
          <WelcomeCard person={person} />
          <div className="button-group">
            <Like id={person.imageId} />  <DisLike id={person.imageId} />
            
          </div>
        </div>
      ))}
    </div>
  );
}
