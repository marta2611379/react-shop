import { useState } from "react";
import "./CustomButton.css";

function CustomButton() {
  const [clicked, setClicked] = useState<boolean>(false);

  function handleClick(): void {
    setClicked(!clicked);
  }
  return (
    <button
      className={clicked ? "btn btn-primary" : "btn btn-secondary"}
      onClick={handleClick}
    >
      Click Me
    </button>
  );
}

export default CustomButton;
