import React from "react";
import { Button } from "react-bootstrap";
function Optionbtn({checked, onClick, text}) {
    return(
        <Button
        id="toggle-check"
        type="checkbox"
        variant={
          checked ? "outline-primary" : "primary"
        }
        checked={checked}
        className="optionbtn"
      
         onClick={onClick}
      >{text}</Button>
    )


}

export default Optionbtn