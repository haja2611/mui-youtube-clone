import { useState } from "react";

const UseToggle = () => {
  const [el, setEl] = useState(null);
  const open = Boolean(el);

  const handleClick = (event) => {
    setEl(event.currentTarget);
  };
  const handleClose = () => {
    setEl(null);
  };

  return { el, open, handleClick, handleClose };
};
export default UseToggle;
