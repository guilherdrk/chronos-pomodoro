import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { MenuLink } from "../MenuLink";
import { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark' ;
      // document.documentElement.setAttribute('data-theme', nextTheme);
      return nextTheme;
    });
  }

  // useEffect(() => {
  //   console.log('Use effect sem dependências', Date.now());

  // }); //executado toda vez que o componente renderiza na tela

  // useEffect(() => {
  //   console.log('useEffect com array de dependencias vazio!', Date.now());
  // }, []); //executa apenas quando o react monta o componente pela primeira vez

  useEffect(() => {
    console.log('theme mudou', theme, Date.now());
    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      console.log('olha este compenente será atualizado');
    }
  }, [theme]); //Executa apenas quando o valor de theme muda

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
