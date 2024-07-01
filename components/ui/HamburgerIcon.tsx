import { useEffect } from "react";
import "../components.css";

const HamburgerIcon = ({ open }: { open: boolean }) => {
  useEffect(() => {
    const menu = document.getElementById("nav-icon");
    if (menu) {
      if (open) {
        menu.classList.add("open");
        document.body.style.overflow = 'hidden';
      } else {
        menu.classList.remove("open");
        document.body.style.overflow = 'unset';
      }
    }
  }, [open]);
  return (
    <div id="nav-icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerIcon;
