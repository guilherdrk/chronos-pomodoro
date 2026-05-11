import { Link } from 'react-router';
import styles from './styles.module.css';

type MenuLinkProps = {
  title: string;
  to: string
  event?: React.MouseEventHandler<HTMLAnchorElement | undefined>;
  children: React.ReactNode;

}

export const MenuLink = (({ children, title, to, event, ...rest }: MenuLinkProps) => {

  return (
    <>
      <Link
        className={styles.menuLink}
        to={to}
        title={title}
        {...rest}
        onClick={event} >
        {children}
      </Link>
    </>
  )
});