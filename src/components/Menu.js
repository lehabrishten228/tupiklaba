import React, { useState } from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className={styles.navbar}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <li>
          <button onClick={() => toggleDropdown(1)}>Категория 1</button>
          <ul className={`${styles.dropdown} ${activeDropdown === 1 ? styles.show : ""}`}>
            <li>Элемент 1.1</li>
            <li>Элемент 1.2</li>
          </ul>
        </li>
        <li>
          <button onClick={() => toggleDropdown(2)}>Категория 2</button>
          <ul className={`${styles.dropdown} ${activeDropdown === 2 ? styles.show : ""}`}>
            <li>Элемент 2.1</li>
            <li>Элемент 2.2</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
