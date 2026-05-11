import { Link } from 'react-router';
import styles from './styles.module.css';

export const Footer = (() => {

    return <footer className={styles.footer}>
      <Link to="/about-pomodoro/">Entenda como funciona uma técnica pomodoro</Link>
      <Link to="/">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚 </Link>
    </footer>
});