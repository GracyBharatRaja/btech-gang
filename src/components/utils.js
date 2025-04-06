import Aditya from "../assets/Aditya.jpeg";
import Azeem from "../assets/Azeem.jpeg";
import Bharat from "../assets/Bharat.jpeg";
import Chaitanya from "../assets/Chaitanya.jpeg";
import Girish from "../assets/Girish.jpeg";
import Sai_Krishna from "../assets/Sai_Krishna.jpeg";
import Sai_Patil from "../assets/Sai_Patil.jpeg";
import Silas from "../assets/Silas.jpeg";
import Uday from "../assets/Uday.jpeg";
import Ravi from "../assets/Ravi.jpeg";

const imageMap={

    Aditya,Azeem,Bharat,Chaitanya,Girish,Sai_Krishna,Sai_Patil,Silas,Uday,Ravi
};

export function getImgUrl(person){


    return imageMap[person.imageId] || null;
}
