import okoURL from "../assets/oko.png";
import lornetkaURL from "../assets/lornetka.png";
import malyURL from "../assets/maly.png";
import duzyURL from "../assets/duzy.png";


export const TypeForm = ({setType}) => {

  const handleClick = (value) => {
    setType(value);
  }

  return (
    <div className="formContainer">
      <div className="typeContainer">
        <img className="button" src={duzyURL} onClick={() => handleClick("big")}/>
        <img className="button" src={lornetkaURL} onClick={() => handleClick("ocu")} />
        <img className="button" src={malyURL} onClick={() => handleClick("lit")} />
        <img className="button" src={okoURL} onClick={() => handleClick("see")} />
      </div>
    </div>
  )
}