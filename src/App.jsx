import { useState } from "react";
import WelcomeCard from "./components/WelcomeCard";
import "./App.css";

function Like() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button className="btn-color" onClick={handleClick}>👍 Like {count}</button>;
}

function DisLike() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button  className="btn-color" onClick={handleClick}>👎 Dislike {count}</button>;
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
          <Like />  <DisLike />
          
        </div>
      ))}
    </div>
  );
}
