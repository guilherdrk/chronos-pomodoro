import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { MenuLink } from "../MenuLink";
import { useState } from "react";

type AvailableThemes = "dark" | "light";

export const Menu = () => {
  const [theme] = useState<AvailableThemes>("dark");

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.log("clicado");
  }

  return (
    <>
      <nav className={styles.menu}>
        <h1>{theme}</h1>

        <MenuLink aria-label="Ir para Home" title="Ir para Home">
          <HouseIcon />
        </MenuLink>
        <MenuLink aria-label="Ver Histórico" title="Ver Histórico">
          <HistoryIcon />
        </MenuLink>
        <MenuLink aria-label="Configurações" title="Configurações">
          <SettingsIcon />
        </MenuLink>
        <MenuLink aria-label="Mudar Tema" title="Mudar Tema" event={handleThemeChange} >
          <SunIcon />
        </MenuLink>
      </nav>
    </>
  );
};
