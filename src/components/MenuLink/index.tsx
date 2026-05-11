import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

type MenuLinkProps = {
  title: string;
  href: string;
  event?: React.MouseEventHandler<HTMLAnchorElement | undefined>;
  children: React.ReactNode;

}

export const MenuLink = (({ children, title, href, event, ...rest }: MenuLinkProps) => {

  return (
    <>
      <RouterLink
        className={styles.menuLink}
        href={href}
        title={title}
        {...rest}
        onClick={event} >
        {children}
      </RouterLink>
    </>
  )
});