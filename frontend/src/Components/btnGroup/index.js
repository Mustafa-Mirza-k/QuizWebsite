import React, { useState } from "react";
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";
function BtnGroup() {
  const [checked, setChecked] = useState("1");
  const radios = [
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
    { name: "4", value: "4" },
    { name: "5", value: "5" },
    { name: "6", value: "6" },
    { name: "7", value: "7" },
    { name: "8", value: "8" },
    { name: "9", value: "9" },
    { name: "10", value: "10" },
    { name: ">", value: ">" },
  ];
  return (
    <div className="btnGroup" >
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <Button
            id="toggle-check"
            type="checkbox"
            variant={
              checked.toString() === radio.value ? "outline-primary" : "primary"
            }
            disabled
            checked={true}
            //   checked={checked.toString() === radio.value ? false : true}
            name={radio.name}
            value={radio.value}
            onClick={(e) => setChecked(radio.value)}
          >
            {radio.name}
            {console.log(checked.toString() === radio.value ? false : true)}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default BtnGroup;
