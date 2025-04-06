import { getImgUrl } from "./utils.js";

export default function WelcomeCard({ person }) {
    return (
      <div className="welcomecard-container">
        <img
          className="welcomecard"
          src={getImgUrl(person)}
          alt={person.name}
        />
        <div className="welcomecard-name">{person.name}</div>
        <p>{person.description}</p>
      </div>
    );
  }
  