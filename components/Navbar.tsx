import AccountTreeIcon from "@material-ui/icons/AccountTree";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import HomeIcon from "@material-ui/icons/Home";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export const Navbar = (props) => {
  return (
    <nav className={styles["navbar"]}>
      <ul className={styles["navbar-nav"]}>
        <NavItem
          href="/"
          icon={<HomeIcon className={styles.iconGraphic}></HomeIcon>}
        ></NavItem>
        <span className={styles.heading}>{props.title}</span>
        <NavItem icon={<MenuIcon className={styles.iconGraphic}></MenuIcon>}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </ul>
    </nav>
  );
};

export const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles["nav-item"]}>
      <a
        href={props.href}
        className={styles["icon-button"]}
        onClick={() => setOpen(!open)}
      >
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};

export const DropdownMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const DropdownItem = (props) => {
    return (
      <Link href={props.href}>
        <a
          href={props.href}
          className={styles["menu-item"]}
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <span className={styles["icon-button"]}>{props.leftIcon}</span>
          <span style={{ width: "20px" }}></span>
          {props.children}
          <span className={styles["icon-right"]}>{props.rightIcon}</span>
        </a>
      </Link>
    );
  };

  return (
    <div className={styles["dropdown"]}>
      <div className={styles["menu"]}>
        <DropdownItem
          href="/about"
          leftIcon={<PersonIcon className={styles.iconGraphic} />}
        >
          About Me
        </DropdownItem>
        <DropdownItem
          href="/projects"
          leftIcon={<AccountTreeIcon className={styles.iconGraphic} />}
        >
          Projects
        </DropdownItem>
        <DropdownItem
          href="/blog"
          leftIcon={<LibraryBooksIcon className={styles.iconGraphic} />}
        >
          Blog
        </DropdownItem>
      </div>
    </div>
  );
};
