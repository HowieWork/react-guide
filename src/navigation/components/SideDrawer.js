import styles from './SideDrawer.module.css';

const SideDrawer = (props) => {
  return <aside className={styles['sidedrawer']}>{props.children}</aside>;
};

export default SideDrawer;
