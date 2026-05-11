import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export const Footer = (() => {
    return <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro/">Entenda como funciona uma técnica pomodoro</RouterLink>
      <RouterLink href="/">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚 </RouterLink>
    </footer>
});