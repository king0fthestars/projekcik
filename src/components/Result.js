import React, { useEffect, useState } from "react";
import Data from "../data/months.json";
import bykURL from "../assets/byk.jpg";
import jowiszURL from "../assets/jowisz.png";
import ksiezycURL from "../assets/ksiezyc.jpg";
import merkuryURL from "../assets/Merkury.jpg";
import neptunURL from "../assets/neptun.jpg";
import saturnURL from "../assets/saturn.png";
import uranURL from "../assets/uran.jpg";
import wielkipiesURL from "../assets/wielkipies.png";
 
export const Result = ({month, type, setMonth, setType }) => {
 
 
  const [ value, setValue ] = useState(Data.find(i => i.id === month).values.find(i => i.id === type));
 
  const handleReset = () => {
    setMonth(null);
    setType(null);
    setValue(null);
  }
 
  const chooseCardImage = (e) => {
    switch(true){
      case e === "ksiezyc.jpg":
        return ksiezycURL;
      case e === "byk.jpg":
        return bykURL;
      case e === "jowisz.png":
        return jowiszURL;
      case e === "Merkury.jpg":
        return merkuryURL;
      case e === "neptun.jpg":
        return neptunURL;
      case e === "saturn.png":
        return saturnURL;
      case e === "uran.jpg":
        return uranURL;
      case e === "wielkipies.png":
        return wielkipiesURL;
      default:
        return ksiezycURL;
    }
  }
 
  const getMonthName = () => {
    switch(month){
      case 'jan':
        return "Styczeń";
      case 'feb':
        return "Luty";
      case 'mar':
        return "Marzec";
      case 'apr':
        return "Kwiecień";
      case 'may':
        return "May";
      case 'jun':
        return "Czerwiec";
      case 'jul':
        return "Lipiec";
      case 'aug':
        return "Sierpień";
      case 'sep':
        return "Wrzesień";
      case 'oct':
        return "Październik";
      case 'nov':
        return "Listopad";
      case 'dec':
        return "Grudzień";
      default:
        return "Error";
    }
  }
 
  const getTypeName = () => {
    switch(type){
      case 'see':
        return "Wzrok";
      case 'ocu':
        return "Lornetka";
      case 'lit':
        return "Mały teleskop";
      case 'big':
        return "Duży teleskop";
      default:
        return "Error";
    }
  }
 
  return (
    <div className="result">
      <div className="banner">
        <p>{`${getMonthName()} - ${getTypeName()}`} </p>
        <button className="butt2" onClick={() => handleReset()}>Cofnij do menu</button>
      </div>
      <div className="allResult">
        <div className="resultIMG">
          <img className="img" src={chooseCardImage(value.values[0].image)} />
          <h5>{value.values[0].title}</h5>
          <span>{value.values[0].text}</span>
        </div>
        <div className="resultIMG">
          <img className="img" src={chooseCardImage(value.values[1].image)} />
          <h5>{value.values[1].title}</h5>
          <span>{value.values[1].text}</span>
        </div>
      </div>
      
    </div>
  )
}