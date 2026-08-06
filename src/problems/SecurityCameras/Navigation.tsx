import React from "react";
import styles from "./Navigation.module.css";
import { TbGridDots } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import { GoQuestion, GoDeviceCameraVideo } from "react-icons/go";
import { IoMdBug } from "react-icons/io";
import { RxIdCard } from "react-icons/rx";

function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.navContainer}>
      <div className={styles.verticalList}>
        <NavButton
          icon={<TbGridDots />}
          onClick={() => {
            setIsOpen((prevIsOpen) => !prevIsOpen);
          }}
        />
      </div>
      <div className={styles.verticalList}>
        <NavButton icon={<IoMdBug />} onClick={() => {}} />
        <NavButton icon={<FaBell />} onClick={() => {}} />
        <NavButton icon={<GoQuestion />} onClick={() => {}} />
      </div>
      <Dropdown isOpen={isOpen} />
    </div>
  );
}

type NavButtonProps = {
  icon: React.ReactNode;
  onClick: () => void;
};

function NavButton(props: NavButtonProps) {
  return (
    <button className={styles.navButton} type="button" onClick={props.onClick}>
      {props.icon}
    </button>
  );
}

type DropdownProps = {
  isOpen: boolean;
};

function Dropdown(props: DropdownProps) {
  return (
    <nav className={`${styles.dropdown} ${props.isOpen ? styles.open : ""}`}>
      <section className={styles.dropdownLinks} aria-label="Navigation Links">
        <a href="/cameras" className={styles.dropdownLink}>
          <GoDeviceCameraVideo className={styles.dropdownIcon} />
          <span>Cameras</span>
        </a>
        <a href="/cameras" className={styles.dropdownLink}>
          <RxIdCard className={styles.dropdownIcon} />
          <span>Access</span>
        </a>
        <a href="/cameras" className={styles.dropdownLink}>
          <GoDeviceCameraVideo className={styles.dropdownIcon} />
          <span>Cameras</span>
        </a>
        <a href="/cameras" className={styles.dropdownLink}>
          <RxIdCard className={styles.dropdownIcon} />
          <span>Access</span>
        </a>
        <a href="/cameras" className={styles.dropdownLink}>
          <GoDeviceCameraVideo className={styles.dropdownIcon} />
          <span>Cameras</span>
        </a>
        <a href="/cameras" className={styles.dropdownLink}>
          <RxIdCard className={styles.dropdownIcon} />
          <span>Access</span>
        </a>
        <a href="/cameras" className={styles.dropdownLink}>
          <GoDeviceCameraVideo className={styles.dropdownIcon} />
          <span>Cameras</span>
        </a>
        <a href="/cameras" className={styles.dropdownLink}>
          <RxIdCard className={styles.dropdownIcon} />
          <span>Access</span>
        </a>
      </section>
    </nav>
  );
}

export default Navigation;
