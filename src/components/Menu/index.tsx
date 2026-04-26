import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { MenuLink } from "../MenuLink";
import { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
    return storageTheme;
  });

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark' ;
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

  return (
    <>
      <nav className={styles.menu}>
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
          {/* {theme === 'dark' ? <SunIcon/> : <MoonIcon />} */}
          { nextThemeIcon[theme]}
        </MenuLink>
      </nav>
    </>
  );
};
