import Button from "./Button";
import { useState } from "react";
const Form = () => {
  const [fullname, setFullname] = useState("as");
  const add = (e) => {
    setFullname(e.target.value);
  };
  return (
    <form type="submit">
      <label>Full Name</label>
      <div>
        <input
          className="inputname"
          onChange={add}
          placeholder="Enter Name"
        ></input>
      </div>
      <p className="paragraph">{fullname}</p>
      <div>
        <Button className="inputname" setFullname={setFullname} />
        <Button className="clear" setFullname={setFullname} />
      </div>
    </form>
  );
};
export default Form;
