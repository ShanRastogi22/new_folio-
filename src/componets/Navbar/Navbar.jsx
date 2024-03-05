import styles from"./Navbar.module.css";
import { useState } from "react";
import { getImageUrl } from "../../utils";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}> 
      <img src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} className={styles.menuBtn} alt="menu-buton" onClick={() => setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}





