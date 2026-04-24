import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { MenuLink } from '../MenuLink';


export const Menu = (() => {

  return (
    <>
      <nav className={styles.menu}>
        <MenuLink>
          <HouseIcon />
        </MenuLink>
        <MenuLink>
          <HistoryIcon />
        </MenuLink>
        <MenuLink>
          <SettingsIcon />
        </MenuLink>
        <MenuLink>
          <SunIcon />
        </MenuLink>
      </nav>
    </>
  )
});