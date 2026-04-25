import styles from './styles.module.css';

type MenuLinkProps = {
  title: string;
  event?: React.MouseEventHandler<HTMLAnchorElement | undefined>;
  children: React.ReactNode;
}

export const MenuLink = (( { children, title, event, ...rest }: MenuLinkProps ) => {

  return (
    <>
      <a className={styles.menuLink} href="#" title={title} {...rest} onClick={event} >
          {children}
      </a>
    </>
  )
});