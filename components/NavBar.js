import classes from './styles/NavBar.module.scss'
export default function NavBar() {
  return (
    <nav className={classes.nav}>
        <a href="#main" className={classes.navItem}>главная</a>
        <a href="#about" className={classes.navItem}>о нас</a>
        <a href="#otzivy" className={classes.navItem}>отзывы</a>
        <a href="#team" className={classes.navItem}>команда</a>
        <div className={classes.navLine}></div>
        <a href="#"><img className={classes.navItemIco} src="./img/social.svg" alt=""/></a>
    </nav>
  )
}
