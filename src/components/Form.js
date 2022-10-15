import { useState } from "react";
import { MonthForm } from "./MonthForm";
import { TypeForm } from "./TypeForm";
import { Result } from "./Result";

export const Form = () => {
  const [ month, setMonth ] = useState(null);
  const [ type, setType ] = useState(null);

  return (
    <div>
      {month === null && <MonthForm setMonth={setMonth} />}
      {type === null && month !== null && <TypeForm setType={setType} />}
      {month !== null && type !== null && <Result month={month} setMonth={setMonth} type={type} setType={setType} />}
    </div>
  )
}